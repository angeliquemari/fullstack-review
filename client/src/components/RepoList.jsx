import React from 'react';

const Repo = (props) => (
  <div>
    <div><a href={props.repo.html_url}>{props.repo.name}</a> ({props.repo.owner_login}) {props.repo.description ? `- ${props.repo.description}`: null}</div>
  </div>
);

const RepoList = (props) => (
  <div>
    <h4> Most recently updated repos </h4>
    {props.repos.map((repo, index) => <Repo key={index} repo={repo}/>)}
  </div>
)

export default RepoList;