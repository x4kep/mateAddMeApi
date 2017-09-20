module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('GameRegion', function(err) {
      if (err) throw err;
      console.log("GameRegion ADD");
      app.models.GameRegion.create([
        {
          label: 'India',
          value: 'india',
          gameId: 1
        }, {
          label: 'US / West',
          value: 'us-west',
          gameId: 1
        }, {
          label: 'US / East',
          value: 'us-east',
          gameId: 1
        }, {
          label: 'Europe / West',
          value: 'europe-west',
          gameId: 1
        }, {
          label: 'Europe / East',
          value: 'europe-east',
          gameId: 1
        }, {
          label: 'Russia',
          value: 'russia',
          gameId: 1
        }, {
          label: 'South Africa',
          value: 'south-africa',
          gameId: 1
        }, {
          label: 'Chile',
          value: 'chile',
          gameId: 1
        }, {
          label: 'Peru',
          value: 'peru',
          gameId: 1
        }, {
          label: 'Japan',
          value: 'japan',
          gameId: 1
        }, {
          label: 'South Korea',
          value: 'south-korea',
          gameId: 1
        },
        {
          label: 'North America / West',
          value: 'north-america-west',
          gameId: 2
        }, {
          label: 'North America / Central',
          value: 'north-america-central',
          gameId: 2
        }, {
          label: 'North America / East',
          value: 'north-america-east',
          gameId: 2
        }, {
          label: 'South America',
          value: 'south-america',
          gameId: 2
        }, {
          label: 'Europe / Central',
          value: 'europe-central',
          gameId: 2
        }, {
          label: 'Europe / East',
          value: 'europe-east',
          gameId: 2
        }, {
          label: 'Europe / North',
          value: 'europe-north',
          gameId: 2
        }, {
          label: 'Europe / West',
          value: 'europe-west',
          gameId: 2
        }, {
          label: 'Asia',
          value: 'asia',
          gameId: 2
        }, {
          label: 'Oceania',
          value: 'oceania',
          gameId: 2
        }, {
          label: 'Africa',
          value: 'africa',
          gameId: 2
        }, {
          label: 'Middle East',
          value: 'middle-east',
          gameId: 2
        },
        {
          label: 'North America',
          value: 'north-america',
          gameId: 3
        }, {
          label: 'EU West',
          value: 'eu-west',
          gameId: 3
        }, {
          label: 'EU Nordic & East',
          value: 'eu-nordic-east',
          gameId: 3
        }, {
          label: 'Korean',
          value: 'korean',
          gameId: 3
        }, {
          label: 'Brasil',
          value: 'brasil',
          gameId: 3
        }, {
          label: 'Turkey',
          value: 'turkey',
          gameId: 3
        }, {
          label: 'Latin America North',
          value: 'latin-america-north',
          gameId: 3
        }, {
          label: 'Latin America South',
          value: 'latin-america-south',
          gameId: 3
        }, {
          label: 'Oceania',
          value: 'oceania',
          gameId: 3
        }, {
          label: 'Russia',
          value: 'russia',
          gameId: 3
        }
      ]);
    })
}