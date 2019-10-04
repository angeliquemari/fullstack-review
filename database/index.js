const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: {
    login: String,
    html_url: String,
    repos_url: String
  },
  html_url: String,
  description: String,
  created_at: Date,
  updated_at: Date,
  popularity: {
    watchers_count: Number,
    stargazers_count: Number,
    forks_count: Number
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  for (let i = 0; i < repos.length; i++) {
    var repo = repos[i];
    var repoData = {
      id: repo.id,
      name: repo.name,
      owner: {
        login: repo.owner.login,
        html_url: repo.owner.html_url,
        repos_url: repo.owner.repos_url
      },
      html_url: repo.html_url,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      popularity: {
        watchers_count: repo.watchers_count,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count
      }
    };
    Repo.updateOne({id: repo.id}, repoData, {upsert: true}, (err, writeOpResult) => {
      console.log(`repo '${repo.name}' saved to db`, writeOpResult);
    });
  }
} // next: respond to client

module.exports.save = save;