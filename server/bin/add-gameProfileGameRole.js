module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameProfileGameRole', function(err) {
      if (err) throw err;
      console.log("GameProfileGameRole ADD");
      app.models.GameProfileGameRole.create([
        {
            "gameProfileId": 5,
            "gameRoleId": 1
        },
        {
            "gameProfileId": 5,
            "gameRoleId": 2
        },
        {
            "gameProfileId": 5,
            "gameRoleId": 3
        },
        {
            "gameProfileId": 5,
            "gameRoleId": 4
        },
        {
            "gameProfileId": 3,
            "gameRoleId": 1
        },
        {
            "gameProfileId": 3,
            "gameRoleId": 2
        },
      ]);
    })
}
