import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Eightball from "./Eightball";

let testArr = [{ msg: "It is certain.", color: "green" }];
let testsArr = [{ msg: "Signs point to yes.", color: "goldenrod" },
{ msg: "Reply hazy, try again.", color: "goldenrod" },
{ msg: "Ask again later.", color: "goldenrod" }];

it("it renders without errors", function() {
  shallow(<Eightball />);
});

it("it renders initial message", function() {
  let wrapper = mount(<Eightball />);
  expect(wrapper.html()).toContain("Think of a Question");
});

it("it renders correct message", function() {
  let wrapper = mount(<Eightball answers={testArr}/>);
  
  expect(wrapper.prop('answers')).toEqual(testArr);

  wrapper.setState({msg: "This works!!!"});
  expect(wrapper.html()).toContain("This works!!!");
})

it("it changes default message on click", function(){
  let wrapper = mount(<Eightball answers={testArr}/>);

  let button = wrapper.find('button').first();
  button.simulate("click")
  expect(wrapper.state().msg).toEqual("It is certain.");
})

it("it works with random messages", function() {
  let wrapper = shallow(<Eightball answers={testsArr}/>);
  wrapper.instance().getRandom = jest.fn( () => testArr[0]) 
})