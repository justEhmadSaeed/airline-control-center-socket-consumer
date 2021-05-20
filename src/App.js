import './App.css';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import FlightMap from './components/FlightMap';
import FlightInformation from './components/FlightInformation';
import Chat from './components/Chat';

const App = () => {
	const [markerPositions, setMarkerPositions] = useState({});
	const [flights, setFlights] = useState([]);
	useEffect(() => {
		const socket = io(
			'http://tarea-3-websocket.2021-1.tallerdeintegracion.cl',
			{
				path: '/flights',
			}
		);
		socket.emit('FLIGHTS', () => {});
		socket.on('FLIGHTS', (data) => {
			console.log(data);
			setFlights(data);
		});
		socket.on('POSITION', (data) => {
			const temp = { ...markerPositions };
			temp[data.code] = data.position;
			// update the state
			setMarkerPositions(temp);
			console.log(markerPositions);
		});
		socket.on('CHAT', (data) => console.log(data));
		// 	// CLEAN UP THE EFFECT
		return () => socket.disconnect();
	}, [markerPositions]);
	return (
		<div className='App'>
			<div id='flight-data'>
				<FlightMap
					markerPositions={markerPositions}
					flights={flights}
				/>
				<FlightInformation flights={flights} />
			</div>
			<Chat />
		</div>
	);
};

export default App;
