module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameMode', function(err) {
      if (err) throw err;
      console.log("GameMode ADD");
      app.models.GameMode.create([
          {
            label: 'Public',
            value: 'public',
            gameId: 1,
          }, {
            label: 'Ranked',
            value: 'ranked',
            gameId: 1,
          }, {
            label: 'Competitive',
            value: 'competitive',
            gameId: 1,
          },
          {
            label: 'Machmaking',
            value: 'machmaking',
            gameId: 2,
          }, {
            label: 'Competitive PUGs',
            value: 'competitive-pugs',
            gameId: 2,
          }, {
            label: 'League',
            value: 'league',
            gameId: 2,
          }, {
            label: 'Casual',
            value: 'casual',
            gameId: 2
          },
          {
            label: 'Public',
            value: 'public',
            gameId: 3,
          }, {
            label: 'Ranked',
            value: 'ranked',
            gameId: 3,
          }, {
            label: 'Competitive',
            value: 'competitive',
            gameId: 3,
          },
          {
            label: '3v3 Unranked',
            value: '3v3Unranked',
            gameId: 3,
          }, {
            label: '5v5 Unranked',
            value: '5v5Unranked',
            gameId: 3,
          }, {
            label: '3v3 Ranked',
            value: '3v3Ranked',
            gameId: 3,
          },{
            label: '5v5 Ranked',
            value: '5v5Ranked',
            gameId: 3,
          },
          {
            label: 'ARAM',
            value: 'aram',
            gameId: 3,
          }
      ]);
    })
}
