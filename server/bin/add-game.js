module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('Game', function(err) {
      if (err) throw err;
      console.log("Game ADD");
      app.models.Game.create([
      {
        name: 'Dota2',
        genre: 'MOBA',
        shortName: 'dota2'
      },{
        name: 'Counter-Strike: Global Offensive',
        genre: 'FPS',
        shortName: 'csgo'
      },{
        name: 'League of Legends',
        genre: 'MOBA',
        shortName: 'lol',
      }]);
    });
  }
