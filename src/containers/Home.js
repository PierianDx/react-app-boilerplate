import React, { Component } from 'react';
import Notification from '../components/Notification';

class Home extends Component {
  state = {
    response: '',
    post: '',
    active: false,
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

  handleClose = ev => {
    this.setState({
      active: false,
      responseToPost: ''
    });
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
    this.setState({
      active: true,
      responseToPost: body
    });
  };

  render() {
    const { active, responseToPost, post, response } = this.state;
    return (
      <section className="section App">
        <p className="title">Home Page</p>
        <div className="container margin-md">
          <div className="notification">{response}</div>
        </div>
        <form onSubmit={this.handleSubmit} className="margin-md">
          <div className="field">
            <label className="label">Post to Server</label>
          </div>
          <div className="field is-grouped">
            <p className="control has-icons-left is-expand">
              <input
                type="text"
                className="input"
                value={post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-globe" />
              </span>
            </p>
            <p className="control">
              <button className="button is-primary" type="submit">
                Send Message
              </button>
            </p>
          </div>
        </form>
        <div className="container margin-md">
          {responseToPost && (
            <Notification active={active} onClose={this.handleClose}>
              <p>
                Received <strong>{responseToPost}</strong> back from server.
              </p>
            </Notification>
          )}
        </div>
      </section>
    );
  }
}

export default Home;
