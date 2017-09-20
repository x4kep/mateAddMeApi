'use strict';

var async = require('async');

module.exports = function addGameDota2(app, then) {
  var db = app.dataSources.mysqlds;

  async.parallel({
    dota: async.apply(createDota),
  }, function(err, results) {
    var dota2 = results.dota[0];

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
        id: dota2.id,
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
          label: 'Cary',
          value: 'cary',
          gameId: dota2.id,
          order: 1,
        }, {
          label: 'Support',
          value: 'support',
          gameId: dota2.id,
          order: 5,
        }, {
          label: 'Farming Support',
          value: 'farming_support',
          gameId: dota2.id,
          order: 4,
        }, {
          label: 'Offline',
          value: 'offline',
          gameId: dota2.id,
          order: 3,
        }, {
          label: 'Mid',
          value: 'mid',
          gameId: dota2.id,
          order: 2,
        }], cb);
      });
    }

    function createRanks(cb) {
      db.automigrate('GameRank', function(err) {
        var GameRank = app.models.GameRank;

        GameRank.create([{
          label: '<1000',
          value: 1000,
          gameId: dota2.id,
        }, {
          label: '1000-1999',
          value: 2000,
          gameId: dota2.id,
        }, {
          label: '2000-2999',
          value: 3000,
          gameId: dota2.id,
        }, {
          label: '3000-3999',
          value: 4000,
          gameId: dota2.id,
        }, {
          label: '4000-4999',
          value: 5000,
          gameId: dota2.id,
        }, {
          label: '5000-5999',
          value: 6000,
          gameId: dota2.id,
        }, {
          label: '6000-6999',
          value: 7000,
          gameId: dota2.id,
        }, {
          label: '7000-7999',
          value: 8000,
          gameId: dota2.id,
        }, {
          label: '>8000',
          value: 99999,
          gameId: dota2.id,
        }], cb);
      });
    }

    function createModes(cb) {
      db.automigrate('GameMode', function(err) {
        var GameMode = app.models.GameMode;

        GameMode.create([{
          label: 'Public',
          value: 'public',
          gameId: dota2.id,
        }, {
          label: 'Ranked',
          value: 'ranked',
          gameId: dota2.id,
        }, {
          label: 'Competitive',
          value: 'competitive',
          gameId: dota2.id,
        }], cb);
      });
    }

    function createRegions(cb) {
      db.automigrate('GameRegion', function(err) {
        var Region = app.models.GameRegion;

        if (err) return cb(err);

        Region.create([{
          label: 'India',
          value: 'india',
          gameId: dota2.id
        }, {
          label: 'US / West',
          value: 'us-west',
          gameId: dota2.id
        }, {
          label: 'US / East',
          value: 'us-east',
          gameId: dota2.id
        }, {
          label: 'Europe / West',
          value: 'europe-west',
          gameId: dota2.id
        }, {
          label: 'Europe / East',
          value: 'europe-east',
          gameId: dota2.id
        }, {
          label: 'Russia',
          value: 'russia',
          gameId: dota2.id
        }, {
          label: 'South Africa',
          value: 'south-africa',
          gameId: dota2.id
        }, {
          label: 'Chile',
          value: 'chile',
          gameId: dota2.id
        }, {
          label: 'Peru',
          value: 'peru',
          gameId: dota2.id
        }, {
          label: 'Japan',
          value: 'japan',
          gameId: dota2.id
        }, {
          label: 'South Korea',
          value: 'south-korea',
          gameId: dota2.id
        }], cb);
      });
    }
  });

  function createDota(cb) {
    db.automigrate('Game', function(err) {
      if (err) return cb(err);
      var Game = app.models.Game;
      Game.create([{
        name: 'Dota2',
        genre: 'MOBA',
        shortName: 'dota2'
      }], cb);
    });
  }
};
