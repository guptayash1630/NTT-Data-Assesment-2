import React, { Fragment } from "react";
import BookRoomComponent from "./BookRoomComponent";
import Button from "./ButtonComponent";

class RoomsComponent extends React.Component {
	state = {
		rooms: [
			{
				id: "room1",
				name: "Room 1",
				checkbox: false,
				checked: true,
				children: 0,
				adult: 1
			},
			{
				id: "room2",
				name: "Room 2",
				checkbox: true,
				checked: false,
				children: 0,
				adult: 1
			},
			{
				id: "room3",
				name: "Room 3",
				checkbox: true,
				checked: false,
				children: 0,
				adult: 1
			},
			{
				id: "room4",
				name: "Room 4",
				checkbox: true,
				checked: false,
				children: 0,
				adult: 1
			}
		]
	};

	onClick = () => {
		let message = '';
		let rooms = Object.assign([], this.state.rooms);
		let selectedRooms = rooms.filter(room => {
			return room.checked;
		});
		if (selectedRooms.length > 0) {
			message = selectedRooms.length + " rooms selected.";
			selectedRooms.forEach((room, index) => {
				message += "\n Room " + (index + 1) + ": Adluts: " + room.adult + ", Children: " + room.children;
			});
			if (window.confirm(message)) {
				localStorage.setItem("Rooms", JSON.stringify(rooms));
			}
		} else {
			window.prompt(message);
		}
	};

	onBookRoomComponentChange = room => {
		let rooms = Object.assign([], this.state.rooms);
		rooms = rooms.map(rm => {
			if (room.checked && !rm.checked && rm.id <= room.id) {
				rm.checked = room.checked;
			}
			if (!room.checked && rm.checked && rm.id >= room.id) {
				rm.checked = room.checked;
				rm.adult = room.adult;
				rm.children = room.children;
			}
			if (rm.id === room.id) {
				rm.adult = room.adult;
				rm.children = room.children;
			}
			return rm;
		});
		this.setState({ rooms: rooms });
	};

	componentDidMount() {		
			let rooms = JSON.parse(localStorage.getItem("Rooms"));
			if (rooms && Array.isArray(rooms)) {
				this.setState({ rooms: rooms });
			}		
	}

	render() {
		return (
			<Fragment>
				<div className="row mt-5">
					<div className="flex-container">
						{this.state.rooms.map(room => {
							return <BookRoomComponent key={room.id} {...room} onRoomsSelectionChange={this.onBookRoomComponentChange} />;
						})}
					</div>
				</div>
				<div className="row mt-5 ml-5">
					<Button value="Submit" onClick={this.onClick} />
				</div>
			</Fragment>
		);
	}
}

export default RoomsComponent;
