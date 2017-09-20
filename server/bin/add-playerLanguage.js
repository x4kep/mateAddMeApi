module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('PlayerLanguage', function(err) {
      if (err) throw err;
      console.log("PlayerLanguage ADD");
      app.models.PlayerLanguage.create([
        {
            "playerId": 1,
            "languageId": 1
        },
        {
            "playerId": 1,
            "languageId": 2
        },
        {
            "playerId": 1,
            "languageId": 4
        },
        {
            "playerId": 2,
            "languageId": 1
        },
        {
            "playerId": 2,
            "languageId": 2
        },
        {
            "playerId": 2,
            "languageId": 3
        },
      ]);
    })
}
