const express = require('express');
let app = express();
const githubHelper = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  githubHelper.getReposByUsername(req.body.username, (error, data) => {
    if (error) return console.log('Error getting repos: ', error);
    db.save(data, (error, writeResult) => {
      if (error) return console.log('Error saving repos to db: ', error);
      res.end();
    });
  });
});

app.get('/repos', function (req, res) {
  db.getTop25Repos((docs) => {
    res.send(JSON.stringify(docs));
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

