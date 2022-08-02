import { DegreeToRadian, EarthRadiusInMeters } from "../constants";

/*
 * Class Definition for a Pair Of Coordinates
 */

export class PairOfCoordinates {
	// Declaring Latitude and Longitude as Private Variables
	#coordinate1;
	#coordinate2;

	// Parameterized Constructor
	constructor(coordinate1, coordinate2) {
		this.#coordinate1 = coordinate1;
		this.#coordinate2 = coordinate2;
	}

	// Getter for both Coordinates
	coordinates() {
		const arrayOfCoordinates = [this.#coordinate1, this.#coordinate2];
		return arrayOfCoordinates;
	}

	// Calculate distance betwwen two coordinates
	distance() {
		const arrayOfCoordinates = this.coordinates();

		const latitude1 = arrayOfCoordinates[0].latitude() * DegreeToRadian;
		const latitude2 = arrayOfCoordinates[1].latitude() * DegreeToRadian;
		const latitudeDiff = latitude2 - latitude1;

		const longitude1 = arrayOfCoordinates[0].longitude() * DegreeToRadian;
		const longitude2 = arrayOfCoordinates[1].longitude() * DegreeToRadian;
		const longitudeDiff = longitude2 - longitude1;

		const distance =
			2 *
			EarthRadiusInMeters *
			Math.asin(
				Math.sqrt(
					Math.pow(Math.sin(latitudeDiff / 2), 2) +
						Math.cos(latitude1) *
							Math.cos(latitude2) *
							Math.pow(Math.sin(longitudeDiff / 2), 2)
				)
			);
		return distance;
	}

	// Log both Coordinates to the Console
	log() {
		const arrayOfCoordinates = this.coordinates();
		console.log(
			`Coordinates => [${arrayOfCoordinates[0].latitude()}, ${arrayOfCoordinates[0].longitude()}] and [${arrayOfCoordinates[1].latitude()}, ${arrayOfCoordinates[1].longitude()}]`
		);
	}
}
