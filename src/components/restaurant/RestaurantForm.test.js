// import React from 'react';
// import expect from 'expect';
// import {mount, shallow} from 'enzyme';
// import {RestaurantForm} from './RestaurantForm';
//
// /* DOES NOT WORK */
// describe ('Restaurant Form', () => {
//   it('sets error message when trying to save empty name', () => {
//     const restaurants = [
//       {
//         name: "The Bicycle Thief",
//         location: "1475 Lower Water Street",
//         rating: 5,
//         comment: "Great pasta!"
//       },
//       {
//         name: "2 Doors Down",
//         location: "1533 Barrington Street",
//         rating: 4,
//         comment: "Great burgers!"
//       }
//     ];
//
//     const props = {
//       onSave: () => {}
//     };
//
//     const wrapper = mount(<RestaurantForm {...props}/>);
//     const addButton = wrapper.find('input').last();
//
//     expect(addButton.prop('type')).toBe('submit');
//     addButton.simulate('click');
//
//     expect(wrapper.state().errors.name).toBe('Name cannot be blank.');
//     expect(wrapper.state().errors.location).toBe('Location cannot be blank.');
//     expect(wrapper.state().errors.rating).toBe('Rating cannot be blank.');
//   });
// });
