require('events').EventEmitter.defaultMaxListeners = 15;

var addPlayer =  require('./add-player');
var addCountry =  require('./add-country');
var addLanguage =  require('./add-language');

var addGame =  require('./add-game');
var addGameRole = require('./add-gameRole');
var addGameMode = require('./add-gameMode');
var addGameRegion = require('./add-gameRegion');
var addGameRank = require('./add-gameRank');

var addGameProfile = require('./add-gameProfile');
var addGameProfileComment = require('./add-gameProfileComment');

var addGameProfileGameMode = require('./add-gameProfileGameMode');
var addGameProfileGameRegion = require('./add-gameProfileGameRegion');
var addGameProfileGameRole = require('./add-gameProfileGameRole');
var addPlayerLanguage = require('./add-playerLanguage');

addPlayer();
// addCountry();
// addLanguage();

// addGame();
// addGameRole();
// addGameMode();
// addGameRegion();
// addGameRank();

// addGameProfile();
// addGameProfileComment();

//Relation ManyToMany
// addGameProfileGameMode();
// addGameProfileGameRegion();
// addGameProfileGameRole();
// addPlayerLanguage();