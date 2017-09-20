'use strict';

module.exports = function(Player) {
  //Player.validatesInclusionOf('gender', {in: ['male', 'female', 'none']});

  Player.validatesUniquenessOf('username',{
    errorMessageUserName: 'Username already exist.'
  })

  Player.validatesUniquenessOf('email',{
    errorMessageUserEmail: 'Email already exist.'
  })

  Player.validate('password', validatePassword,{
    errorMessagePassword: 'Password is not valid'
  })

  Player.validate('username', validateUsername,{
    errorMessageUserName: 'Username already exist.'
  })

  function validateUsername(err){
    console.log("Validateusernameworks");
    var reExp =  /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,15}$/;
    if(!reExp.test(this.username))err();
  }

  function validatePassword(err){
    console.log("Validatepaswordworks");
    var reExp =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!reExp.test(this.password))err();
  }



  // Player.revEngine = function(sound, cb) {
  //   cb(null, sound - ' ' - sound - ' ' - sound);
  // };

  // Player.remoteMethod(
  //   'revEngine',
  //   {
  //     accepts: [{arg: 'sound', type: 'string'}],
  //     returns: {arg: 'engineSound', type: 'string'},
  //     http: {path:'/rev-engine', verb: 'post'}
  //   }
  // );
  
  // remote method before hook
  // Player.beforeRemote('login', function(context, unused, next) {
  //   console.log('Putting in the car key, starting the engine.');
  //   console.log("---CONTEXT");
  //   console.log(context.args)

  //   console.log("---UNUSED");
  //   console.log(unused);
  //   console.log("---NEXT");
  //   console.log(next);
  //   next();
  // });
  // // remote method after hook
  // Player.afterRemote('login', function(context, remoteMethodOutput, next) {
  //   console.log('Turning off the engine, removing the key.');
  //   next();
  // });


  // Player.login({include: 'user'}, function(err, token, user) {
  //    console.log("Hello from login");
  //    console.log(err);
  //    console.log(token);
  //    console.log(user);
  // });

  // Player.remoteMethod(
  //   'login',
  //   {
  //       http: { verb: 'POST' },
  //       description: 'Login custom test',
  //       accepts: { arg: 'params', type: 'array' },
  //       returns: { arg: 'data', type: 'string' }
  //   }
  // );



  Player.updateBasicProfile = function (params, cb) {
      debugger;
      console.log(params);
      console.log("PARAMS ZERO:");
      console.log(params[0]);
      //Client Input
      var language = params[0].languageId || [];
      var playerId = params[0].id;

      //Server 
      var ds = Player.dataSource;
      var sqlBase = "";
      var sql = "";

      //INSERT LANGUAGE ( ManyToMany )
      var generateSql = "";
      var sqlBase = "INSERT INTO playerlanguage (playerId, languageId) VALUES ";
      if(language && language.length > 0){

        //Remove language( old )
        sqlBase = 'DELETE FROM playerlanguage WHERE playerId = ';
        sql = sqlBase + playerId;

        ds.connector.query(sql, params, function (err, value) {
          console.log("Remove language");
          if (err) console.error(err);
          //Insert language
          sqlBase = "INSERT INTO playerlanguage (playerId, languageId) VALUES ";
          sql = sqlBase;
          generateSql += language.map(function(language){
            return ' ('+playerId+','+language+')';
          });

          sql = sql + generateSql;
          ds.connector.query(sql, params, function (err, value) {
            console.log("Add language");
              if (err) console.error(err);
              
          });
        });

      }

      //INSERT OTHER 
      //INSERT INTO player(`gender`,`birthday`, `biography`, `countryId`) VALUES ([value-1],[value-2],[value-3],[value-4]) WHERE player.id = 1
      sqlBase = "INSERT INTO player(gender, birthday, biography, countryId) VALUES ([value-1],[value-2],[value-3],[value-4]) WHERE player.id = 1";
      let keyValue = "";
      //REFACTOR MAP FUNCTION ( ifTIme )
      if(params[0].gender || params[0].birthday || params[0].biography || params[0].countryId){
        //GENERATE QUERY
        if(params[0].gender){
          console.log(params[0].gender);
          keyValue += "gender='"+params[0].gender+"',";
        }
  
        if(params[0].birthday){
          console.log(params[0].birthday);
          keyValue += "birthday='"+params[0].birthday+"',";
        }
  
        if(params[0].biography){
          console.log(params[0].biography);
          keyValue += "biography='"+params[0].biography+"',";
        }
  
        if(params[0].countryId){
          console.log(params[0].countryId);
          keyValue += "countryId='"+params[0].countryId+"',";
        }

        keyValue = keyValue.substring(0, keyValue.length - 1);

        sqlBase = "UPDATE player SET " + keyValue + " WHERE player.id=" + playerId;
        console.log(sqlBase);
        //EXECUTE QUERY
        ds.connector.query(sqlBase, params, function (err, value) {
          console.log("Add Other");
            if (err) console.error(err);
            
            cb(err, value);
        }); 
      }
      

  };

  Player.remoteMethod(
      'updateBasicProfile',
      {
          http: { verb: 'POST' },
          description: 'Filter GameProfile Test',
          accepts: { arg: 'params', type: 'array' },
          returns: { arg: 'data', type: 'string' }
      }
  );

  Player.sveIgrac = function (category, cb) {
    
        var ds = Player.dataSource;
        var sql = "SELECT * FROM player";

        ds.connector.query(sql, category, function (err, products) {

            if (err) console.error(err);

            cb(err, products);

        });

    };

    Player.remoteMethod(
        'sveIgrac',
        {
            http: { verb: 'get' },
            description: 'Get list of products by category',
            accepts: { arg: 'category', type: 'string', function(ctx) { var req = ctx.req; console.log(req)} },
            returns: { arg: 'data', type: ['Player'], root: true }
        }
    );

};
