'use strict';

var async = require('async');

module.exports = function addGameLol(app, then) {
  var db = app.dataSources.mysqlds;

  async.parallel({
    lol: async.apply(createLol),
  }, function(err, results) {
    var lol = results.lol[0];

    if (err) {
      throw err;
    }

    async.parallel({
      roles: async.apply(createRoles),
      ranks: async.apply(createRanks),
      modes: async.apply(createModes),
      regions: async.apply(createRegions)
    }, function(err, results) {
      if (err) {
        throw err;
      }

      then({
        id: lol.id,
        gameRanks: results.ranks,
        gameRoles: results.roles,
        gameModes: results.modes,
        gameRegions: results.regions,
      });
    });

    function createRoles(cb) {
      db.automigrate('GameRole', function(err) {
        var GameRole = app.models.GameRole;

        GameRole.create([{
          label: 'Top',
          value: 'top',
          gameId: lol.id,
          order: 1,
        }, {
          label: 'Jungle',
          value: 'jungle',
          gameId: lol.id,
          order: 2,
        }, {
          label: 'Mid',
          value: 'mid',
          gameId: lol.id,
          order: 3,
        }, {
          label: 'ADC',
          value: 'adc',
          gameId: lol.id,
          order: 4,
        }, {
          label: 'Support',
          value: 'support',
          gameId: lol.id,
          order: 5,
        }, {
          label: 'Fill',
          value: 'fill',
          gameId: lol.id,
          order: 6
        }], cb);
      });
    }

    function createRanks(cb) {
      db.automigrate('GameRank', function(err) {
        var GameRank = app.models.GameRank;

        GameRank.create([{
          label: 'Bronze V',
          value: 'bronze-v',
          gameId: lol.id,
        }, {
          label: 'Bronze IV',
          value: 'bronze-iv',
          gameId: lol.id,
        }, {
          label: 'Bronze III',
          value: 'bronze-iii',
          gameId: lol.id,
        }, {
          label: 'Bronze II',
          value: 'bronze-ii',
          gameId: lol.id,
        }, {
          label: 'Bronze I',
          value: 'bronze-i',
          gameId: lol.id,
        }, {
          label: 'Silver V',
          value: 'silver-v',
          gameId: lol.id,
        }, {
          label: 'Silver IV',
          value: 'silver-iv',
          gameId: lol.id,
        }, {
          label: 'Silver III',
          value: 'silver-iii',
          gameId: lol.id,
        }, {
          label: 'Silver II',
          value: 'silver-ii',
          gameId: lol.id,
        }, {
          label: 'Silver I',
          value: 'silver-i',
          gameId: lol.id,
        }, {
          label: 'Gold V',
          value: 'gold-v',
          gameId: lol.id,
        }, {
          label: 'Gold IV',
          value: 'gold-iv',
          gameId: lol.id,
        }, {
          label: 'Gold III',
          value: 'gold-iii',
          gameId: lol.id,
        }, {
          label: 'Gold II',
          value: 'gold-ii',
          gameId: lol.id,
        }, {
          label: 'Gold I',
          value: 'gold-i',
          gameId: lol.id,
        }, {
          label: 'Platinum V',
          value: 'platinum-v',
          gameId: lol.id,
        }, {
          label: 'Platinum IV',
          value: 'platinum-iv',
          gameId: lol.id,
        }, {
          label: 'Platinum III',
          value: 'platinum-iii',
          gameId: lol.id,
        }, {
          label: 'Platinum II',
          value: 'platinum-ii',
          gameId: lol.id,
        }, {
          label: 'Platinum I',
          value: 'platinum-i',
          gameId: lol.id,
        }, {
          label: 'Diamond V',
          value: 'diamond-v',
          gameId: lol.id,
        }, {
          label: 'Diamond IV',
          value: 'diamond-iv',
          gameId: lol.id,
        }, {
          label: 'Diamond III',
          value: 'diamond-iii',
          gameId: lol.id,
        }, {
          label: 'Diamond II',
          value: 'diamond-ii',
          gameId: lol.id,
        }, {
          label: 'Diamond I',
          value: 'diamond-i',
          gameId: lol.id,
        }, {
          label: 'Master',
          value: 'master',
          gameId: lol.id,
        }, {
          label: 'Challenger',
          value: 'challenger',
          gameId: lol.id,
        }], cb);
      });
    }

    function createModes(cb) {
      db.automigrate('GameMode', function(err) {
        var GameMode = app.models.GameMode;
        GameMode.create([{
          label: '3v3 Unranked',
          value: '3v3Unranked',
          gameId: lol.id,
        }, {
          label: '5v5 Unranked',
          value: '5v5Unranked',
          gameId: lol.id,
        }, {
          label: '3v3 Ranked',
          value: '3v3Ranked',
          gameId: lol.id,
        },{
          label: '5v5 Ranked',
          value: '5v5Ranked',
          gameId: lol.id,
        },
        {
          label: 'ARAM',
          value: 'aram',
          gameId: lol.id,
        },
      ], cb);
      });
    }

    function createRegions(cb) {
      db.automigrate('GameRegion', function(err) {
        var Region = app.models.GameRegion;

        if (err) return cb(err);

        Region.create([{
          label: 'North America',
          value: 'north-america',
          gameId: lol.id
        }, {
          label: 'EU West',
          value: 'eu-west',
          gameId: lol.id
        }, {
          label: 'EU Nordic & East',
          value: 'eu-nordic-east',
          gameId: lol.id
        }, {
          label: 'Korean',
          value: 'korean',
          gameId: lol.id
        }, {
          label: 'Brasil',
          value: 'brasil',
          gameId: lol.id
        }, {
          label: 'Turkey',
          value: 'turkey',
          gameId: lol.id
        }, {
          label: 'Latin America North',
          value: 'latin-america-north',
          gameId: lol.id
        }, {
          label: 'Latin America South',
          value: 'latin-america-south',
          gameId: lol.id
        }, {
          label: 'Oceania',
          value: 'oceania',
          gameId: lol.id
        }, {
          label: 'Russia',
          value: 'russia',
          gameId: lol.id
        }], cb);
      });
    }
  });

  function createLol(cb) {
    db.automigrate('Game', function(err) {
      if (err) return cb(err);
      var Game = app.models.Game;
      Game.create([{
        name: 'League of Legends',
        genre: 'MOBA',
        shortName: 'lol',
      }], cb);
    });
  }
};
