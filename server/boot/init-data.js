// 'use strict';

// var async = require('async');
// var createEnums =  require('../add-data-scripts/add-enums');
// var createDota2 = require('../add-data-scripts/add-game-dota2');
// var createCSGO = require('../add-data-scripts/add-game-csgo');
// var createLOL = require('../add-data-scripts/add-game-lol');
// var createPlayers = require('../add-data-scripts/add-test-players');

// module.exports = function(app) {
//   async.parallel({
//     dota: async.apply(createDota2Internal),
//     csgo: async.apply(createCSGOInternal),
//     lol: async.apply(createLOLInternal),
//     enums: async.apply(createEnumsInternal),
//   });

//   function createEnumsInternal() {
//     createEnums(app, function() {

//     });
//   }

//   function createCSGOInternal() {
//     createCSGO(app, function (csgo) {
//       console.log('Added csgo, id is: ' + csgo.id);

//       async.parallel({
//         players: async.apply(createPlayersInternal),
//       });
  
//       function createPlayersInternal() {
//         createPlayers(app, [csgo], function() {
//           console.log('CSGO GameProfile Added');
//         });
//       }
//     });
//   };

//   function createLOLInternal() {
//     createLOL(app, function (lol) {
//       console.log('Added LOL, id is: ' + lol.id);

//       async.parallel({
//         players: async.apply(createPlayersInternal),
//       });
  
//       function createPlayersInternal() {
//         createPlayers(app, [lol], function() {
//           console.log('LOL GameProfile Added');
//         });
//       }
//     });
//   }

//   function createDota2Internal() {
//     createDota2(app, function(dota) {
//       console.log('Added dota2, id is: ' + dota.id);
//       async.parallel({
//         players: async.apply(createPlayersInternal),
//       });

//       function createPlayersInternal() {
//         createPlayers(app, [dota], function() {
//           console.log('DOTA2 GameProfile Added');
//         });
//       }
//     });
//   }
// };
