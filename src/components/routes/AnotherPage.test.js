import React from 'react';
import { shallow } from 'enzyme';

import AnotherPage from './AnotherPage';

describe('AnotherPage', () => {
  it('should render correctly', () => {
    const comp = shallow(<AnotherPage />);
    expect(comp).toMatchSnapshot();
  });
});
