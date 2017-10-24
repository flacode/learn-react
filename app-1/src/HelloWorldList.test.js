import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'; // we start off by calling renderer.create, and passing to that function the JSX that we want to build into our new snapshot. 

import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

configure({adapter: new Adapter() });

describe(HelloWorldList, () => {
    const component = shallow(
      <HelloWorldList />
    );
  
    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <HelloWorldList />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('contains an AddGreeter subcomponent', () => {
      expect(component.find(AddGreeter)).toHaveLength(1);
    });
  
    it('contains the same number of HelloWorld components as greetings', () => {
      const helloWorlds = component.find(HelloWorld).length;
      const greetings = component.state('greetings').length;
      expect(helloWorlds).toEqual(greetings);
    });
  
    it('adds another greeting when the add greeting function is called', () => {
      const before = component.find(HelloWorld).length;
      component.instance().addGreeting('Sample');
      const after = component.find(HelloWorld).length;
      expect(after).toBeGreaterThan(before);
    });
  
    it('removes a greeting from the list when the remove greeting function is called', () => {
      const before = component.find(HelloWorld).length;
      const removeMe = component.state('greetings')[0];
      component.instance().removeGreeting(removeMe);
      const after = component.find(HelloWorld).length;
      expect(after).toBeLessThan(before);
    });
  });