import React from "react";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json";
import { Header } from "../../components/Header";

test("should render Header correctly", () => {
	const wrapper = shallow(<Header startLogout={() => {}} />);
	expect(wrapper).toMatchSnapshot();

	// expect(toJSON(wrapper)).toMatchSnapshot();

	//enzyme example
	// expect(wrapper.find("h1").text()).toBe("Expensify App");



	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// console.log(renderer.getRenderOutput());
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
});

//should call startLogout on button click
test("should call startLogout on button click", () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout} />);
	wrapper.find("button").simulate("click");
	expect(startLogout).toHaveBeenCalled();
});

//LoginPage test file -> should call startLogin on button click

