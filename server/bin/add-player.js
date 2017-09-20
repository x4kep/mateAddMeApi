
module.exports = function(){
  var path = require('path');
  var app = require(path.resolve(__dirname, '../server'));
  var ds = app.datasources.mysqlds;
  ds.automigrate('Player', function(err) {
    if (err) throw err;
    console.log("Player ADD");
    var players = [
      {
          role: 'admin',
          username: 'x4kep',
          gender: 'male',
          birthday: '1992-04-23T21:24:25.851Z',
          email: 'dusan.veselinovic@ymail.com',
          password: '123456',
          emailVerified: true,
          countryId: 1,
          languageId: 1,
          biography: "Biografija x4kepp",
          isBaned:false
      },
      {
          role: 'user',
          username: 'dUcK',
          gender: 'male',
          birthday: '1987-12-21T21:24:25.851Z',
          email: 'veselinovic.veselinovic@ymail.com',
          password: '123456',
          emailVerified: true,
          countryId: 2,
          languageId: 1,
          biography: "Biografija Dcuk",
          isBaned:false
      }
    ];
    var count = players.length;
    players.forEach(function(account) {
      app.models.Player.create(account, function(err, model) {
        if (err) throw err;
        count--;
        if (count === 0)
          ds.disconnect();
      });
    });
  });
}