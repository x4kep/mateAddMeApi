'use strict';

module.exports = function(GameProfile) {
  
  //FILTER GAME PROFILE 
  GameProfile.filterGamerProfiles = function (params, cb) {

      // console.log(params[0]);
      console.log("PARAMS ZERO:");
      console.log(params);
      
      var sqlRealations = 
      `
        SELECT DISTINCT player.id AS playerId, YEAR(CURDATE()) - YEAR(birthday) AS age FROM  gameProfile
        LEFT JOIN gameprofilegamemode ON gameprofile.id = gameprofilegamemode.gameProfileId
        LEFT JOIN gamemode ON gameprofilegamemode.gameModeId = gamemode.id
        
        LEFT JOIN gameprofilegamerole ON gameprofile.id = gameprofilegamerole.gameProfileId
        LEFT JOIN gamerole ON gameprofilegamerole.gameRoleId = gamerole.id
        
        LEFT JOIN gameprofilegameregion ON gameprofile.id = gameprofilegameregion.gameProfileId
        LEFT JOIN gameregion ON gameprofilegameregion.gameRegionId = gameregion.id
        
        LEFT JOIN player ON gameprofile.playerId = player.id
        LEFT JOIN country ON player.countryId = country.id
        
        LEFT JOIN playerlanguage ON player.id = playerlanguage.playerId
        LEFT JOIN language ON playerlanguage.languageId = language.id
        
        LEFT JOIN gamerank ON gameprofile.gameRankId = gamerank.id
      `;
      var sqlGenerate ="";
      var formatInput ="";
      //Create CustomQuery Login
        var item = params[0];
        /*console.log(item);*/
        if(item["gameId"] !== undefined){
          sqlGenerate ="WHERE gameprofile.gameId = "+item["gameId"];
        }
        
        if(item["gameModeId"] !== undefined){
          formatInput="";
          console.log(item["gameModeId"]);
          formatInput += item["gameModeId"].map(function(item){
            return item;
          })
          console.log(formatInput);
          sqlGenerate +=" AND gameMode.id IN("+formatInput+")";
        }

        if(item["gameRegionId"] !== undefined){
          formatInput="";
          formatInput += item["gameRegionId"].map(function(item){
            return item;
          })
          console.log(formatInput);
          sqlGenerate +=" AND gameRegion.id IN("+formatInput+")";
        }

        if(item["gameRoleId"] !== undefined){
          formatInput="";
          console.log(item["gameRoleId"]);
          formatInput += item["gameRoleId"].map(function(item){
            return item;
          })
          console.log(formatInput);
          sqlGenerate +=" AND gameRole.id IN("+formatInput+")";
        }
        
        if(item["languageId"] !== undefined){
          formatInput="";
          console.log(item["languageId"]);
          formatInput += item["languageId"].map(function(item){
            return item;
          })
          console.log(formatInput);
          sqlGenerate +=" AND language.id IN("+formatInput+")";
        }

        if(item["countryId"] !== undefined){
          formatInput="";
          formatInput += item["countryId"]
          sqlGenerate +=" AND country.id IN("+formatInput+")";
        }

        if(item["gameRankId"] !== undefined){
          formatInput="";
          console.log(item["gameRankId"]);
          formatInput += item["gameRankId"]
          sqlGenerate +=" AND gameRank.id IN("+formatInput+")";
        }

        if(item["gender"] !== undefined){
          formatInput="";
          console.log(item["gender"]);
          formatInput = item["gender"]
          sqlGenerate +=" AND player.gender="+"'"+formatInput+"'";
        }

        if(item["age"] !== undefined){
          console.log(item["age"]);
          sqlGenerate +=" GROUP BY age HAVING age BETWEEN "+item["age"][0]+" AND "+item["age"][1];
        }
    
      
      console.log(sqlRealations+sqlGenerate);

      var ds = GameProfile.dataSource;
      var sql = sqlRealations+sqlGenerate;

    

      ds.connector.query(sql, params, function (err, products) {
        // console.log(params);
          if (err) console.error(err);

          cb(err, products);

      });
      
    };

    GameProfile.remoteMethod(
      'filterGamerProfiles',
      {
        http: { verb: 'get' },
        description: 'Filter GameProfile Test',
        accepts: { arg: 'params', type: 'array' },
        returns: { arg: 'data', type: 'string' }
      }
    );

    //UPDATE PROFILE
    GameProfile.updateGameProfile = function (params, cb) {
      console.log("updateGameProfile");
      console.log(params[0]);
      
      let clientFormData = params[0];

      var ds = GameProfile.dataSource;
      var sqlBase = "UPDATE gameprofile SET ";
      var sql = "";

      let keyValue = "";
      //UPDATE ( NOT ManyToMany  )
      if( clientFormData.isActive !== undefined || clientFormData.gameRankId !== undefined || clientFormData.availability !== undefined || clientFormData.experience !== undefined){ 
        if(clientFormData.isActive !== undefined){
          let intoNumber = 0;
          if(clientFormData.isActive){
            intoNumber = 1;
          }
          keyValue += "isActive='"+intoNumber+"',";
        }
        if(clientFormData.gameRankId !== undefined){
          keyValue += "gameRankId='"+clientFormData.gameRankId+"',";
        }
  
        if(clientFormData.availability !== undefined){
          keyValue += "availability='"+clientFormData.availability+"',";
        }
  
        if(clientFormData.experience !== undefined){
          keyValue += "experience='"+clientFormData.experience+"',";
        }
        keyValue = keyValue.substring(0, keyValue.length - 1);
        
        sql = sqlBase + keyValue + " WHERE gameprofile.id= " + clientFormData.gameProfileid;
        
        console.log(sql);
        //EXECUTE QUERY
        ds.connector.query(sql, params, function (err, value) {
          console.log("Add Other GameProfile");
            if (err) console.error(err);
            
        });
      }

      //UPDATE ( ManyToMany )
      ////////////////////////////

      //ADD MODE 
      let gameProfileid = clientFormData.gameProfileid;
      let modeId = clientFormData.modeId;
      if(modeId && modeId.length > 0){
        let generateSql1 = "";
        //Remove language( old )
        sqlBase = 'DELETE FROM gameprofilegamemode WHERE gameProfileId = ';
        sql = sqlBase + clientFormData.gameProfileid;

        console.log(sql);
        ds.connector.query(sql, params, function (err, value) {
          console.log("Remove gameprofilegamemode");
          if (err) console.error(err);

          //Insert mode ( manyTomany)
          sqlBase = "INSERT INTO gameprofilegamemode (gameProfileId, gameModeId) VALUES ";
          sql = sqlBase;
          generateSql1 += modeId.map(function(mode){
            return ' ('+gameProfileid+','+mode+')';
          });

          sql = sql + generateSql1;
          console.log(sql);
          ds.connector.query(sql, params, function (err, value) {
            console.log("Add gameMode");
              if (err) console.error(err);
              
          });
        });
    
      }

      //ADD ROLE
      let roleId = clientFormData.roleId;
      if(roleId && roleId.length > 0){
        let generateSql2 = "";

        //Remove gameprofilegamerole( old )
        sqlBase = 'DELETE FROM gameprofilegamerole WHERE gameProfileId = ';
        sql = sqlBase + clientFormData.gameProfileid;

        console.log(sql);
        ds.connector.query(sql, params, function (err, value) {
          console.log("Remove gameprofilegamerole");
          if (err) console.error(err);

          //Insert role ( manyTomany)
          sqlBase = "INSERT INTO gameprofilegamerole (gameProfileId, gameRoleId) VALUES ";
          sql = sqlBase;
          generateSql2 += roleId.map(function(role){
            return ' ('+gameProfileid+','+role+')';
          });

          sql = sql + generateSql2;
          console.log(sql);
          ds.connector.query(sql, params, function (err, value) {
            console.log("Add gameprofilegamerole");
              if (err) console.error(err);
              
          });
        });
    
      }

      //ADD REGION
      let regionId = clientFormData.regionId;
      if(regionId && regionId.length > 0){
        let generateSql3 = "";

        //Remove gameprofilegamerole( old )
        sqlBase = 'DELETE FROM gameprofilegameregion WHERE gameProfileId = ';
        sql = sqlBase + clientFormData.gameProfileid;

        console.log(sql);
        ds.connector.query(sql, params, function (err, value) {
          console.log("Remove gameprofilegameregion");
          if (err) console.error(err);

          //Insert role ( manyTomany)
          sqlBase = "INSERT INTO gameprofilegameregion (gameProfileId, gameRegionId) VALUES ";
          sql = sqlBase;
          generateSql3 += regionId.map(function(region){
            return ' ('+gameProfileid+','+region+')';
          });

          sql = sql + generateSql3;
          console.log(sql);
          ds.connector.query(sql, params, function (err, value) {
            console.log("Add gameprofilegameregion");
              if (err) console.error(err);
              cb(err, value);
          });
        });
    
        }

    };
          
    GameProfile.remoteMethod(
      'updateGameProfile',
      {
        http: { verb: 'POST' },
        description: 'Update game profile',
        accepts: { arg: 'params', type: 'array' },
        returns: { arg: 'data', type: 'string' }
      }
    );

  };
   
    

























































