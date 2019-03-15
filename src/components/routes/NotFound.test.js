import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render correctly', () => {
    const comp = shallow(<NotFound />);
    expect(comp).toMatchSnapshot();
  });
});
