module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameProfileGameRegion', function(err) {
      if (err) throw err;
      console.log("GameProfileGameRegion ADD");
      app.models.GameProfileGameRegion.create([
        {
            "gameProfileId": 1,
            "gameRegionId": 2
        },
        {
            "gameProfileId": 2,
            "gameRegionId": 12
        },
        {
            "gameProfileId": 4,
            "gameRegionId": 1
        },
        {
            "gameProfileId": 3,
            "gameRegionId": 20
        },
        {
            "gameProfileId": 5,
            "gameRegionId": 13
        },
        {
            "gameProfileId": 5,
            "gameRegionId": 14
        },  
      ]);
    })
}
