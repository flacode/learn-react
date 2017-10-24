import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'; // we start off by calling renderer.create, and passing to that function the JSX that we want to build into our new snapshot. 
import HelloWorld from './HelloWorld';

configure({adapter: new Adapter() });

describe(HelloWorld, () => {
    // Add the rest of our tests here later!
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();//jest.fn() is a special syntax to create a mock function. 
    const component = shallow(
      <HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
          <HelloWorld name="Person"/>
        );
        const tree = component.toJSON();//take that snapshot and turn it into a JSON representation of the tree
        expect(tree).toMatchSnapshot();
      });

      it('contains the supplied name', () => {
        expect(component.text()).toContain(name);
      });

      it('modifies the greeting when frenchify button is clicked', () =>{
          component.find('button.frenchify').simulate('click');
          expect(component.text()).toContain('Bonjour');
      });

      it('calls the passed in removeGreeting function when remove button is clicked', () => {
          component.find('button.remove').simulate('click');
          expect(mockRemoveGreeting).toBeCalled();
      });
      

  });