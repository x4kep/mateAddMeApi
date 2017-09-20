
module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameProfileComment', function(err) {
      if (err) throw err;
      console.log("GameProfileComment ADD");
      app.models.GameProfileComment.create([
        {
          "text":"Komentar neki sareni 0",
          "gameProfileId":3,
          "playerId":1
        },
        {
          "text":"Komentar neki sareni 1",
          "gameProfileId":3,
          "playerId":1
        },
        {
          "text":"Komentar neki sareni 2",
          "gameProfileId":3,
          "playerId":1
        }
      ]);
    });
  }