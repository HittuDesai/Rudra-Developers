/*
 * Class Definition for a Coordinate on the World
 * Variables => Latitude and Longitude
 * Getters => latitude() and longitude()
 */

export class Coordinate {
	// Declaring Latitude and Longitude as Private Variables
	#latitude;
	#longitude;

	// Parameterized Constructor
	constructor(latitude, longitude) {
		this.#latitude = latitude;
		this.#longitude = longitude;
	}

	// Getter for Latitude
	latitude() {
		return this.#latitude;
	}

	// Getter for Longitude
	longitude() {
		return this.#longitude;
	}

	// Method to make a copy from existing Coordinate Object
	duplicate() {
		return new Coordinate(this.latitude(), this.longitude());
	}

	// Method to log a Coordinate to the console
	log() {
		console.log(`Coordinate => [${this.latitude()}, ${this.longitude()}]`);
	}
}
