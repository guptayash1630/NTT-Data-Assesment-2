import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RoomsComponent from "./RoomsComponent";
import BookRoomComponent from "./BookRoomComponent";
import ButtonComponents from "./ButtonComponent";
enzyme.configure({ adapter: new Adapter() });

describe("Rooms component", () => {	
	it("Render times of BookRoomComponent", () => {
		const wrapper = enzyme.mount(<RoomsComponent />);
		expect(wrapper.find(BookRoomComponent).length).toBe(4);
	});

	it("should renders ButtonComponents", () => {
		const wrapper = enzyme.mount(<RoomsComponent />);
		expect(wrapper.find(ButtonComponents).length).toBe(1);
	});
});
