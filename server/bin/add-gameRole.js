module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameRole', function(err) {
      if (err) throw err;
      console.log("GameRole ADD");
      app.models.GameRole.create([
          {
            label: 'Cary',
            value: 'cary',
            gameId: 1,
            order: 1,
          }, {
            label: 'Support',
            value: 'support',
            gameId: 1,
            order: 5,
          }, {
            label: 'Farming Support',
            value: 'farming_support',
            gameId: 1,
            order: 4,
          }, {
            label: 'Offline',
            value: 'offline',
            gameId: 1,
            order: 3,
          }, {
            label: 'Mid',
            value: 'mid',
            gameId: 1,
            order: 2,
          },
          {
            label: 'AWP',
            value: 'awp',
            gameId: 2,
            order: 1,
          }, {
            label: 'Lurker',
            value: 'lurker',
            gameId: 2,
            order: 5,
          }, {
            label: 'Rifler',
            value: 'rifler',
            gameId: 2,
            order: 4,
          }, {
            label: 'IGL',
            value: 'igl',
            gameId: 2,
            order: 3,
          }, {
            label: 'Supporter',
            value: 'supporter',
            gameId: 2,
            order: 2,
          }, {
            label: 'Fragger',
            value: 'fragger',
            gameId: 2,
            order: 6,
          },
          {
            label: 'Top',
            value: 'top',
            gameId: 3,
            order: 1,
          }, {
            label: 'Jungle',
            value: 'jungle',
            gameId: 3,
            order: 2,
          }, {
            label: 'Mid',
            value: 'mid',
            gameId: 3,
            order: 3,
          }, {
            label: 'ADC',
            value: 'adc',
            gameId: 3,
            order: 4,
          }, {
            label: 'Support',
            value: 'support',
            gameId: 3,
            order: 5,
          }, {
            label: 'Fill',
            value: 'fill',
            gameId: 3,
            order: 6
          }
      ]);
    })
}