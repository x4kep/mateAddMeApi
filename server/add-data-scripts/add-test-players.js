'use strict';

var async = require('async');
module.exports = function(app, games, then) {
  var db = app.dataSources.mysqlds;
    let currentGame = games[0];

    console.log(games);

  async.parallel({
    players: async.apply(createPlayers),
  }, function(err, results) {
    var x4kep = 1;
    var dUck = 2;
    var MoneyMan = 3;
    var MiniMan = 4;
    var h4ker = 5;
    var GirlyGirl = 6;
    var TokiVoki = 7;

    if (err) {
      throw err;
    }

    async.parallel({
      gameProfiles: async.apply(createGameProfiles),
    }, function(err, result) {
      then(result.gameProfiles);
    });

    function createGameProfiles(cb) {
      var GameProfile = app.models.GameProfile;

      if(currentGame.id == 1){
        //Add DOTA
        GameProfile.create([{
          gameId: currentGame.id,
          playerId: x4kep,
          gameRankId: currentGame.gameRanks[5].id,
          gameRoleId: currentGame.gameRoles[1].id,
          gameModeId: currentGame.gameModes[2].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
         {
          gameId: currentGame.id,
          playerId: dUck,
          gameRankId: currentGame.gameRanks[6].id,
          gameRoleId: currentGame.gameRoles[0].id,
          gameModeId: currentGame.gameModes[2].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
        {
          gameId: currentGame.id,
          playerId: MoneyMan,
          gameRankId: currentGame.gameRanks[6].id,
          gameRoleId: currentGame.gameRoles[0].id,
          gameModeId: currentGame.gameModes[2].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
        {
          gameId: currentGame.id,
          playerId: MiniMan,
          gameRankId: currentGame.gameRanks[6].id,
          gameRoleId: currentGame.gameRoles[0].id,
          gameModeId: currentGame.gameModes[2].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
        {
          gameId: currentGame.id,
          playerId: h4ker,
          gameRankId: currentGame.gameRanks[6].id,
          gameRoleId: currentGame.gameRoles[0].id,
          gameModeId: currentGame.gameModes[2].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        }
        ], cb); 
      }else if(currentGame.id==2){
        //Add CSGO
        GameProfile.create([{
          gameId: currentGame.id,
          playerId: x4kep,
          gameRankId: currentGame.gameRanks[1].id,
          gameRoleId: currentGame.gameRoles[2].id,
          gameModeId: currentGame.gameModes[3].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
         {
          gameId: currentGame.id,
          playerId: dUck,
          gameRankId: currentGame.gameRanks[1].id,
          gameRoleId: currentGame.gameRoles[1].id,
          gameModeId: currentGame.gameModes[1].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
        {
          gameId: currentGame.id,
          playerId: GirlyGirl,
          gameRankId: currentGame.gameRanks[1].id,
          gameRoleId: currentGame.gameRoles[1].id,
          gameModeId: currentGame.gameModes[1].id,
          gameRegionId: currentGame.gameModes[1].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        }
        ], cb);
      }else{
        //Add LOL
        GameProfile.create([
         {
          gameId: currentGame.id,
          playerId: dUck,
          gameRankId: currentGame.gameRanks[3].id,
          gameRoleId: currentGame.gameRoles[3].id,
          gameModeId: currentGame.gameModes[3].id,
          gameRegionId: currentGame.gameModes[2].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        },
        {
          gameId: currentGame.id,
          playerId: TokiVoki,
          gameRankId: currentGame.gameRanks[3].id,
          gameRoleId: currentGame.gameRoles[3].id,
          gameModeId: currentGame.gameModes[3].id,
          gameRegionId: currentGame.gameModes[2].id,
          experience: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          availability: "Lorem Time dummy text of the printing and typesetting industry"
        }
        ], cb);
      }
    }
  });

  function createPlayers(cb) {
    db.automigrate('Player', function(err) {
      var Player = app.models.Player;

      if (err) {
        return cb(err);
      }

      Player.create([{
        role: 'admin',
        username: 'x4kep',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'dusan.veselinovic@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 1,
        languageId: 1,
        biography: "Biografija x4kepp"
      }, {
        role: 'user',
        username: 'dUcK',
        gender: 'male',
        birthday: '1987-12-21T21:24:25.851Z',
        email: 'veselinovic.veselinovic@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 2,
        languageId: 1,
        biography: "Biografija Dcuk"
      },
      {
        role: 'user',
        username: 'MoneyMan',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'MoneyMan@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 2,
        languageId: 1,
        biography: "Biografija Dcuk"
      },
      {
        role: 'user',
        username: 'MiniMan',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'MiniMan@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 2,
        languageId: 1,
        biography: "Biografija Dcuk"
      },
      {
        role: 'user',
        username: 'h4ker',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'h4ker@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 4,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'dragonBall',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'dragonBall@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 4,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'GirlyGirl',
        gender: 'female',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'GirlyGirl@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 4,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'TokiVoki',
        gender: 'female',
        birthday: '1992-04-23T21:24:25.851Z',
        username: 'x4kep',
        email: 'TokiVoki@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 4,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'DokaToka',
        gender: 'female',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'DokaToka@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 4,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'WolaTola',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'WolaTola@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 5,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'ZoomBoom',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'ZoomBoom@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 5,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'TikTak',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'TikTak@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 6,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'magMa',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'magMa@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'FellIt',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'FellIt@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'Qop',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'Qop@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'RushTrust',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'RushTrust@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'YeyMe',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'YeyMe@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'goldChemist',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'goldChemist@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'IhNiht',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'IhNiht@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 7,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'ZoVa',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'ZoVa@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'MoveSpeed',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'MoveSpeed@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'Universe',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'Universe@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'epictitus',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'epictitus@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'socrate',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'socrate@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'Zeno',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'zeno@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      },
      {
        role: 'user',
        username: 'Papa',
        gender: 'male',
        birthday: '1992-04-23T21:24:25.851Z',
        email: 'papa@ymail.com',
        password: '123456',
        emailVerified: true,
        countryId: 8,
        languageId: 1,
        biography: "Biografija "
      }], cb);
    });
  }
};
