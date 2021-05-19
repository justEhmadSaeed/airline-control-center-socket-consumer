import './App.css';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import FlightMap from './components/FlightMap';
import FlightInformation from './components/FlightInformation';
import Chat from './components/Chat';

const App = () => {
	const [markerPosition, setMarkerPosition] = useState({});
	const [flights, setFlights] = useState([]);
	useEffect(() => {
		const socket = io(
			'http://tarea-3-websocket.2021-1.tallerdeintegracion.cl',
			{
				path: '/flights',
			}
		);
		socket.on('POSITION', (data) => {
			console.log(data.code);
			setMarkerPosition(data);
		});
		socket.emit('FLIGHTS', () => {});
		socket.on('FLIGHTS', (data) => {
			console.log(data);
			setFlights(data);
		});
		socket.on('CHAT', (data) => console.log(data));
		// 	// CLEAN UP THE EFFECT
		return () => socket.disconnect();
	}, []);
	console.log(markerPosition);
	console.log(flights);
	return (
		<div className='App'>
			<div id='flight-data'>
				<FlightMap markerPosition={markerPosition} />
				<FlightInformation />
			</div>
			<Chat />
		</div>
	);
};

export default App;
