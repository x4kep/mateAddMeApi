module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameProfileGameMode', function(err) {
      if (err) throw err;
      console.log("GameProfileGameMode ADD");
      app.models.GameProfileGameMode.create([
        {
            "gameProfileId": 1,
            "gameModeId": 1
        },
        {
            "gameProfileId": 1,
            "gameModeId": 2
        },
        {
            "gameProfileId": 2,
            "gameModeId": 4
        },
        {
            "gameProfileId": 2,
            "gameModeId": 5
        },
        {
            "gameProfileId": 4,
            "gameModeId": 3
        },
        {
            "gameProfileId": 4,
            "gameModeId": 1
        },
        {
            "gameProfileId": 3,
            "gameModeId": 1
        },
        {
            "gameProfileId": 3,
            "gameModeId": 2
        },
        {
            "gameProfileId": 5,
            "gameModeId": 4
        },
        {
            "gameProfileId": 5,
            "gameModeId": 5
        },
        {
            "gameProfileId": 5,
            "gameModeId": 6
        },
      ]);
    })
}
