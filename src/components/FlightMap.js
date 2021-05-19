import React from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
} from 'react-leaflet';

const FlightMap = ({ markerPosition }) => {
	return (
		<div className='flight-map'>
			<h2>Flight Map</h2>
			<MapContainer
				className='leaflet-container'
				center={[-33, -66]}
				zoom={5}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{markerPosition.position ? (
					<Marker position={markerPosition.position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				) : (
					<></>
				)}
			</MapContainer>
		</div>
	);
};

export default FlightMap;
