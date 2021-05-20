import React from 'react';

const FlightInformation = ({ flights }) => {
	return (
		<div id='flight-information'>
			<h2>Flight Information</h2>
			<div className='grid'>
				{flights.length > 0 ? (
					flights.map((flight, key) => (
						<div key={key} className='info-card'>
							<h3>{flight.code}</h3>
							<div>Plane: {flight.plane}</div>
							<div>Airline: {flight.airline}</div>
							<div>Passengers: {flight.seats}</div>
						</div>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default FlightInformation;
