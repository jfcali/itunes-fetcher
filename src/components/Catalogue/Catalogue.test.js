import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Catalogue from './Catalogue';
import ToggleView from '../ToggleView/ToggleView';
import Album from './Album/Album';

configure({ adapter: new Adapter() });

describe('<Catalogue />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Catalogue />);
  });

  it('should render <ToggleView />', () => {
    expect(wrapper.find(ToggleView)).toHaveLength(1);
  });

  it('should render no <Album>s if no albums are passed as props', () => {
    expect(wrapper.find(Album)).toHaveLength(0);
  });

  it('should render 3 <Album />', () => {
    wrapper.setProps({
      currentPage: 1,
      albums: [[{ key: 1 }]]
    });
    expect(wrapper.find(Album)).toHaveLength(1);
  });
});
