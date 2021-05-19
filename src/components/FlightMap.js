import { Icon } from 'leaflet';
import React from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
} from 'react-leaflet';

const FlightMap = ({ markerPositions, flights }) => {

	const airplane = new Icon({
		iconUrl: '/airplane.png',
		iconSize:[40, 40]
	})
	return (
		<div className='flight-map'>
			<h2>Flight Map</h2>
			<MapContainer
				className='leaflet-container'
				center={flights.length > 0 ? flights[0].origin : [-33, -66]}
				zoom={5}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{flights.map((flight) => (
					<Marker
						key={flight.code}
						position={
							markerPositions[flight.code]
								? markerPositions[flight.code]
								: [0, 0]
						}
						icon={airplane}
					>
						<Popup>
							Airline: {flight.airline}
							<br />
							Flight Code: {flight.code}
							<br />
							Plane: {flight.plane}
							<br />
							Seats: {flight.seats}
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default FlightMap;
