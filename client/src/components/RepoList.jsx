import React from 'react';

const Repo = (props) => (
  <div>
    <div>{(props.order + 1).toString().padStart(2, '0')}. <a href={props.repo.html_url}>{props.repo.name}</a> ({props.repo.owner_login}, {`${props.repo.updated_at.substring(0,10)} ${props.repo.updated_at.substring(11,19)}`}) {props.repo.description ? `- ${props.repo.description}`: null}</div>
  </div>
);

const RepoList = (props) => (
  <div>
    <h4> Most recently updated repos </h4>
    {props.repos.map((repo, index) => <Repo key={index} order={index} repo={repo}/>)}
  </div>
)

export default RepoList;