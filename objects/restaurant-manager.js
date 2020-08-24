let restaurant = {
	name: 'Spoon and Stable',
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function(partySize) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		return partySize <= seatsLeft;
	},
	seatParty: function(partySize) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		if (partySize <= seatsLeft) {
			this.guestCount += partySize;
			return `${partySize} seats are currently available.`;
		} else {
			return `Cannont seat table. Only ${seatsLeft} seats available.`;
		}
	},
	removeParty: function(partySize) {
		this.guestCount -= partySize;
	}
};

restaurant.seatParty(72);
console.log(restaurant.guestCount);
console.log(restaurant.seatParty(4));
restaurant.removeParty(5);
console.log(restaurant.guestCount);
console.log(restaurant.seatParty(4));
