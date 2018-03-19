import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../store/fixtures/expenses';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error  for invalid form submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


test('should set descrition on input chnage',()=>{
    const value = ''; // new desription
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
});

test('should set descrition on note chanage',()=>{
    const value = ''; // new note
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid number',()=>{
    const value = ''; // 3.56
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
});

test('should call onSubmit prop for valid from submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} /> );
    wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
});
expect(wrapper.state('error')).toBe('');
expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description:expenses[0].description,
    amount: expenses[0].amount,
    note:expenses[0].note,
    createdAt:expenses[0].createdAt
});
});

// test('should set new date on date change ',()=>{
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
//     });

// test('should set calender focus on change',()=>{
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm/>);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
//     expect(wrapper.state('calanderFocused')).toBe(focused);
// });



