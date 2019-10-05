import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  getTopRepos() {
    $.get('/repos', null, (topRepos) => {
      var newRepos = topRepos.map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          owner_login: repo.owner.login,
          description: repo.description,
          html_url: repo.html_url,
          created_at: repo.created_at,
          updated_at: repo.updated_at
        };
      });
      this.setState({repos: newRepos});
    }, 'json');
  }

  search(term) {
    $.post({
      url: '/repos',
      data: JSON.stringify({username: term}),
      contentType: 'application/json',
      success: () => {
        this.getTopRepos()
      }
    });
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }

  componentDidMount() {
    this.getTopRepos();
  }
}

ReactDOM.render(<App />, document.getElementById('app'));