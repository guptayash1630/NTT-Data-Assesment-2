import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookRoomComponent from "./BookRoomComponent";
enzyme.configure({ adapter: new Adapter() });

describe("BookRoomComponent component", () => {
	const props = {
		id: "room1",
		name: "Room 1",
		checkbox: false,
		children: 0,
		adult: 1
	};

	it("should render Title Room 1", () => {
		const wrapper = enzyme.mount(<BookRoomComponent {...props} />);
		expect(wrapper.find(".panel-heading").text()).toBe("Room 1");
	});
});
