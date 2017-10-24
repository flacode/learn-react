import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'; // we start off by calling renderer.create, and passing to that function the JSX that we want to build into our new snapshot. 

import AddGreeter from './AddGreeter';

configure({adapter: new Adapter() }); // requirement for enzyme

describe(AddGreeter, () => {
    const mockAddGreeting = jest.fn();
    const component = shallow(
        <AddGreeter addGreeting={mockAddGreeting} />
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <AddGreeter />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the form', () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    });

    it('calls the passed in addGreeting function when add button is clicked', () => {
        component.find('button').simulate('click');
        expect(mockAddGreeting).toBeCalled();
    });

    it('updates the form when keys are pressed', () => {
        const updateKey = 'foo';
        component.instance().handleUpdate({target: {value: updateKey}});
        expect(component.state('greetingName')).toEqual(updateKey);
    });

    it('blanks out the greetingName when the button is clicked', () => {
        const updateKey = 'a';
        component.instance().handleUpdate({target: {value: updateKey}});
        expect(component.state('greetingName')).toEqual(updateKey);
        component.find('button').simulate('click');
        expect(component.state('greetingName')).toHaveLength(0);
    });
});