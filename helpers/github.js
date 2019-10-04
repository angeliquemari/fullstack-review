const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'angeliquemari',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return request(options, (error, response, body) => {
    if (error) console.log();
    if (response) {
      console.log('response', response);
      console.log('status code', response.statusCode);
      console.log('body', body);
    }
  });
  // next: save data to db
}

module.exports.getReposByUsername = getReposByUsername;