import React from 'react';
import { shallow, mount } from 'enzyme';
import waitUntil from 'async-wait-until';
import nock from 'nock';

import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    // Mock network responses from API calls
    nock(/.*/)
      .persist()
      // .log(console.log)
      .get('/api/hello')
      .reply(
        200,
        {
          express: 'Hello from Test'
        },
        {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      )
      .post('/api/world')
      .reply(200, (uri, body) => body.post, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      });
  });

  afterEach(() => {
    // Reset network mocks after each test
    nock.cleanAll();
  });

  it('should render correctly', () => {
    const comp = shallow(<Home />);
    expect(comp).toMatchSnapshot();
  });

  it('should update based on sent messages', async done => {
    let comp = shallow(<Home />);

    // Handle componentDidMount async call
    await waitUntil(() => comp.state('response') !== '');
    expect(comp.state('response')).toEqual('Hello from Test');

    // Handling user input field
    comp.find('input').simulate('change', {
      target: { value: 'testing' }
    });
    expect(comp.state('post')).toEqual('testing');

    // Handle form submit (async call to api)
    comp.find('form').simulate('submit', { preventDefault: () => {} });
    await waitUntil(() => comp.state('responseToPost') !== '');
    expect(comp.state('responseToPost')).toEqual('testing');

    done();
  });
});
