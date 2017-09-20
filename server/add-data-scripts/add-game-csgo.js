'use strict';

var async = require('async');

module.exports = function addGameCSGO(app, then) {
  var db = app.dataSources.mysqlds;

  async.parallel({
    dota: async.apply(createCSGO),
  }, function(err, results) {
    var csgo = results.dota[0];

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
        id: csgo.id,
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
          label: 'AWP',
          value: 'awp',
          gameId: csgo.id,
          order: 1,
        }, {
          label: 'Lurker',
          value: 'lurker',
          gameId: csgo.id,
          order: 5,
        }, {
          label: 'Rifler',
          value: 'rifler',
          gameId: csgo.id,
          order: 4,
        }, {
          label: 'IGL',
          value: 'igl',
          gameId: csgo.id,
          order: 3,
        }, {
          label: 'Supporter',
          value: 'supporter',
          gameId: csgo.id,
          order: 2,
        }, {
          label: 'Fragger',
          value: 'fragger',
          gameId: csgo.id
        }], cb);
      });
    }

    function createRanks(cb) {
      db.automigrate('GameRank', function(err) {
        var GameRank = app.models.GameRank;

        GameRank.create([{
          label: 'Unranked',
          value: 'unranked',
          gameId: csgo.id,
        }, {
          label: 'Silver I',
          value: 'silver-i',
          gameId: csgo.id,
        }, {
          label: 'Silver II',
          value: 'silver-ii',
          gameId: csgo.id,
        }, {
          label: 'Silver III',
          value: 'silver-iii',
          gameId: csgo.id,
        }, {
          label: 'Silver IV',
          value: 'silver-iv',
          gameId: csgo.id,
        }, {
          label: 'Silver Elite',
          value: 'silver-elite',
          gameId: csgo.id,
        }, {
          label: 'Silver Elite Master',
          value: 'silver-elite-master',
          gameId: csgo.id,
        }, {
          label: 'Gold Nova I',
          value: 'gold-nova-i',
          gameId: csgo.id,
        }, {
          label: 'Gold Nova II',
          value: 'gold-nova-ii',
          gameId: csgo.id,
        }, {
          label: 'Gold Nova III',
          value: 'gold-nova-iii',
          gameId: csgo.id,
        }, {
          label: 'Gold Nova Master',
          value: 'gold-nova-master',
          gameId: csgo.id,
        }, {
          label: 'Master Guardian I',
          value: 'master-guardian-i',
          gameId: csgo.id,
        }, {
          label: 'Master Guardian II',
          value: 'master-guardian-ii',
          gameId: csgo.id,
        }, {
          label: 'Master Guardian Elite',
          value: 'master-guardian-elite',
          gameId: csgo.id,
        }, {
          label: 'Distinguished Master Guardian',
          value: 'distinguished-master-guardian',
          gameId: csgo.id,
        }, {
          label: 'Legendary Eagle',
          value: 'legendary-eagle',
          gameId: csgo.id,
        }, {
          label: 'Legendary Eagle Master',
          value: 'legendary-eagle-master',
          gameId: csgo.id,
        }, {
          label: 'Supreme Master First Class',
          value: 'supreme-master-first-class',
          gameId: csgo.id,
        }, {
          label: 'The Global Elite',
          value: 'the-global-elite',
          gameId: csgo.id
        }], cb);
      });
    }

    function createModes(cb) {
      db.automigrate('GameMode', function(err) {
        var GameMode = app.models.GameMode;

        GameMode.create([{
          label: 'Machmaking',
          value: 'machmaking',
          gameId: csgo.id,
        }, {
          label: 'Competitive PUGs',
          value: 'competitive-pugs',
          gameId: csgo.id,
        }, {
          label: 'League',
          value: 'league',
          gameId: csgo.id,
        }, {
          label: 'Casual',
          value: 'casual',
          gameId: csgo.id
        }], cb);
      });
    }

    function createRegions(cb) {
      db.automigrate('GameRegion', function(err) {
        var Region = app.models.GameRegion;

        if (err) return cb(err);

        Region.create([{
          label: 'North America / West',
          value: 'north-america-west',
          gameId: csgo.id
        }, {
          label: 'North America / Central',
          value: 'north-america-central',
          gameId: csgo.id
        }, {
          label: 'North America / East',
          value: 'north-america-east',
          gameId: csgo.id
        }, {
          label: 'South America',
          value: 'south-america',
          gameId: csgo.id
        }, {
          label: 'Europe / Central',
          value: 'europe-central',
          gameId: csgo.id
        }, {
          label: 'Europe / East',
          value: 'europe-east',
          gameId: csgo.id
        }, {
          label: 'Europe / North',
          value: 'europe-north',
          gameId: csgo.id
        }, {
          label: 'Europe / West',
          value: 'europe-west',
          gameId: csgo.id
        }, {
          label: 'Asia',
          value: 'asia',
          gameId: csgo.id
        }, {
          label: 'Oceania',
          value: 'oceania',
          gameId: csgo.id
        }, {
          label: 'Africa',
          value: 'africa',
          gameId: csgo.id
        }, {
          label: 'Middle East',
          value: 'middle-east',
          gameId: csgo.id
        }], cb);
      });
    }
  });

  function createCSGO(cb) {
    db.automigrate('Game', function(err) {
      if (err) return cb(err);
      var Game = app.models.Game;
      Game.create([{
        name: 'Counter-Strike: Global Offensive',
        genre: 'FPS',
        shortName: 'csgo'
      }], cb);
    });
  }
};
