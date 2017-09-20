module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameProfile', function(err) {
      if (err) throw err;
      console.log("GameProfile ADD");
      app.models.GameProfile.create([
        {
          gameId: 1,
          playerId: 1,
          gameRankId: 2,
          gameRoleId: 1,
          gameModeId: 1,
          gameRegionId: 1,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry",
          contactLink: "www.steam.com/id:2506"
      },
      {
          gameId: 2,
          playerId: 1,
          gameRankId: 15,
          gameRoleId: 1,
          gameModeId: 2,
          gameRegionId: 1,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry",
          contactLink: "www.steam.com/id:2506",
      },
      {
          gameId: 1,
          playerId: 2,
          gameRankId: 1,
          gameRoleId: 4,
          gameModeId: 1,
          gameRegionId: 2,
          experience: "Lorem Ipsu printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy and typesetting industry",
          contactLink: "www.steam.com/id:2506",
      },
      {
          gameId: 2,
          playerId: 2,
          gameRankId: 23,
          gameRoleId: 1,
          gameModeId: 1,
          gameRegionId: 2,
          experience: "Lorem Ipsum is simply dummy text of the . Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy printing and typesetting industry",
          contactLink: "www.steam.com/id:2506",
      },
      {
          gameId: 3,
          playerId: 2,
          gameRankId: 39,
          gameRoleId: 1,
          gameModeId: 1,
          gameRegionId: 2,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy ",
          availability: "Lorem Time  of the printing and typesetting industry",
          contactLink: "www.steam.com/id:2506",
      }
      ]);
    })
}