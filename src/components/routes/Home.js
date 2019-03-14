import React, { Component } from 'react';

class Home extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: this.state.post })
    });

    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="notification">
            <p className="content">
              <strong>Response from Server: </strong>
              {this.state.response}
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <h4 className="title">Post Message to Server</h4>
            <div className="field has-addons">
              <div className="control has-icons-left is-expanded">
                <input
                  type="text"
                  className="input"
                  placeholder="type a message here"
                  value={this.state.post}
                  onChange={e => this.setState({ post: e.target.value })}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          {this.state.responseToPost && (
            <div className="notification">
              <p className="content">
                <strong>Received</strong>: {this.state.responseToPost}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Home;
