module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameRank', function(err) {
      if (err) throw err;
      console.log("GameRank ADD");
      app.models.GameRank.create([
          {
            label: '<1000',
            value: 1000,
            gameId: 1,
          }, {
            label: '1000-1999',
            value: 2000,
            gameId: 1,
          }, {
            label: '2000-2999',
            value: 3000,
            gameId: 1,
          }, {
            label: '3000-3999',
            value: 4000,
            gameId: 1,
          }, {
            label: '4000-4999',
            value: 5000,
            gameId: 1,
          }, {
            label: '5000-5999',
            value: 6000,
            gameId: 1,
          }, {
            label: '6000-6999',
            value: 7000,
            gameId: 1,
          }, {
            label: '7000-7999',
            value: 8000,
            gameId: 1,
          }, {
            label: '>8000',
            value: 99999,
            gameId: 1,
          },
          {
            label: 'Unranked',
            value: 'unranked',
            gameId: 2,
          }, {
            label: 'Silver I',
            value: 'silver-i',
            gameId: 2,
          }, {
            label: 'Silver II',
            value: 'silver-ii',
            gameId: 2,
          }, {
            label: 'Silver III',
            value: 'silver-iii',
            gameId: 2,
          }, {
            label: 'Silver IV',
            value: 'silver-iv',
            gameId: 2,
          }, {
            label: 'Silver Elite',
            value: 'silver-elite',
            gameId: 2,
          }, {
            label: 'Silver Elite Master',
            value: 'silver-elite-master',
            gameId: 2,
          }, {
            label: 'Gold Nova I',
            value: 'gold-nova-i',
            gameId: 2,
          }, {
            label: 'Gold Nova II',
            value: 'gold-nova-ii',
            gameId: 2,
          }, {
            label: 'Gold Nova III',
            value: 'gold-nova-iii',
            gameId: 2,
          }, {
            label: 'Gold Nova Master',
            value: 'gold-nova-master',
            gameId: 2,
          }, {
            label: 'Master Guardian I',
            value: 'master-guardian-i',
            gameId: 2,
          }, {
            label: 'Master Guardian II',
            value: 'master-guardian-ii',
            gameId: 2,
          }, {
            label: 'Master Guardian Elite',
            value: 'master-guardian-elite',
            gameId: 2,
          }, {
            label: 'Distinguished Master Guardian',
            value: 'distinguished-master-guardian',
            gameId: 2,
          }, {
            label: 'Legendary Eagle',
            value: 'legendary-eagle',
            gameId: 2,
          }, {
            label: 'Legendary Eagle Master',
            value: 'legendary-eagle-master',
            gameId: 2,
          }, {
            label: 'Supreme Master First Class',
            value: 'supreme-master-first-class',
            gameId: 2,
          }, {
            label: 'The Global Elite',
            value: 'the-global-elite',
            gameId: 2
          },
          {
            label: 'Bronze V',
            value: 'bronze-v',
            gameId: 3,
          }, {
            label: 'Bronze IV',
            value: 'bronze-iv',
            gameId: 3,
          }, {
            label: 'Bronze III',
            value: 'bronze-iii',
            gameId: 3,
          }, {
            label: 'Bronze II',
            value: 'bronze-ii',
            gameId: 3,
          }, {
            label: 'Bronze I',
            value: 'bronze-i',
            gameId: 3,
          }, {
            label: 'Silver V',
            value: 'silver-v',
            gameId: 3,
          }, {
            label: 'Silver IV',
            value: 'silver-iv',
            gameId: 3,
          }, {
            label: 'Silver III',
            value: 'silver-iii',
            gameId: 3,
          }, {
            label: 'Silver II',
            value: 'silver-ii',
            gameId: 3,
          }, {
            label: 'Silver I',
            value: 'silver-i',
            gameId: 3,
          }, {
            label: 'Gold V',
            value: 'gold-v',
            gameId: 3,
          }, {
            label: 'Gold IV',
            value: 'gold-iv',
            gameId: 3,
          }, {
            label: 'Gold III',
            value: 'gold-iii',
            gameId: 3,
          }, {
            label: 'Gold II',
            value: 'gold-ii',
            gameId: 3,
          }, {
            label: 'Gold I',
            value: 'gold-i',
            gameId: 3,
          }, {
            label: 'Platinum V',
            value: 'platinum-v',
            gameId: 3,
          }, {
            label: 'Platinum IV',
            value: 'platinum-iv',
            gameId: 3,
          }, {
            label: 'Platinum III',
            value: 'platinum-iii',
            gameId: 3,
          }, {
            label: 'Platinum II',
            value: 'platinum-ii',
            gameId: 3,
          }, {
            label: 'Platinum I',
            value: 'platinum-i',
            gameId: 3,
          }, {
            label: 'Diamond V',
            value: 'diamond-v',
            gameId: 3,
          }, {
            label: 'Diamond IV',
            value: 'diamond-iv',
            gameId: 3,
          }, {
            label: 'Diamond III',
            value: 'diamond-iii',
            gameId: 3,
          }, {
            label: 'Diamond II',
            value: 'diamond-ii',
            gameId: 3,
          }, {
            label: 'Diamond I',
            value: 'diamond-i',
            gameId: 3,
          }, {
            label: 'Master',
            value: 'master',
            gameId: 3,
          }, {
            label: 'Challenger',
            value: 'challenger',
            gameId: 3,
          }
      ]);
    })
}