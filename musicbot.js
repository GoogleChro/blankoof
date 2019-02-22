const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.json');
client.music = require("discord.js-musicbot-addon");
client.music.start(client, {
    youtubeKey: cfg.api,
    anyoneCanSkip: true,
    ownerOverMember: true,
    inlineEmbeds: true,
    musicPresence: true,
    clearPresence: true,
    defVolume: cfg.defaultvolume,
    botPrefix: cfg.prefix,
    djRole: cfg.musicrole,
    botAdmins: cfg.admins,
    embedColor: cfg.colour,
    ownerID: cfg.ownerid,
    cooldown: {
      enabled: false,
      timer: 1000,
      exclude: ["volume","queue","pause","resume","np"]
    }
  });
  
// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

  client.login(process.env.BOT_TOKEN);
