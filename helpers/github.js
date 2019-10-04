const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'angeliquemari',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return request(options, (error, response, body) => {
    if (error) return callback(error);
    callback(null, JSON.parse(body));
  });
}

module.exports.getReposByUsername = getReposByUsername;