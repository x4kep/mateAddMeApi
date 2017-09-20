'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
// var cors = require('cors')

var app = module.exports = loopback();
var db = app.dataSources.db;
//Allow cors 
// app.use(cors());

app.start = function() {
  
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
    

    //My Custom End Points TEST PURPOSE
    app.get('/ping', function(req, res) {
      var models = app.models();
      var modelList = "";
      models.forEach(function(Model) {
        modelList += "--" + Model.modelName; 
      });
      res.send(modelList);
    });

    // app.get('/api/GameProfiles', function(req, res) {
    //   console.log("_________REQUEST_______");
    //   console.log(req);
    //   console.log("_________RESPONSE_______");
    //   console.log(res);
    // });

    
  });


  db.automigrate('Game', function(err) {
    var Game = app.models.Game;
console.log('adding some data dude');
    Game.create([{
      name: 'Dota2',
      genre: 'RPG',
    }]);
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
