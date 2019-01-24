import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AlbumFetcher } from './AlbumFetcher';
import SearchBar from '../../components/SearchBar/SearchBar';
import Catalogue from '../../components/Catalogue/Catalogue';
import Navigation from '../../components/Navigation/Navigation';
import Message from '../../components/Message/Message';

configure({ adapter: new Adapter() });

describe('<AlbumFletcher />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AlbumFetcher />);
  });

  it('should show a SearchBar when mounted', () => {
    expect(wrapper.find(SearchBar).length).toEqual(1);
  });

  it('should show a Message when mounted', () => {
    expect(wrapper.find(Message).length).toEqual(1);
  });

  it('should show a Catalogue when user searches and query returns results', () => {
    wrapper.setProps({
      initialLoad: true,
      albums: [[{}]]
    });
    expect(wrapper.find(Catalogue).length).toEqual(1);
  });

  it('should show a Navigation when user searches and query returns results', () => {
    wrapper.setProps({
      initialLoad: true,
      albums: [[{}]]
    });
    expect(wrapper.find(Navigation).length).toEqual(1);
  });
});
