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

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;