
module.exports = function(){
    var path = require('path');
    var app = require(path.resolve(__dirname, '../server'));
    var ds = app.datasources.mysqlds;
    ds.automigrate('Language', function(err) {
      if (err) throw err;
      console.log("Language ADD");
      app.models.Language.create([{
        'iso639-1': 'en',
        label: 'English',
        value: 'english',
      }, {
        'iso639-1': 'sr',
        label: 'Serbian',
        value: 'serbian',
      }, {
        'iso639-1': 'gr',
        label: 'French',
        value: 'french',
      },{
        'iso639-1': 'de',
        label: 'German',
        value: 'german',
      },{
        'iso639-1': 'ga',
        label: 'Irish',
        value: 'greec',
      },{
        'iso639-1': 'gr',
        label: 'Greek',
        value: 'greek',
      }]);
    });
  }