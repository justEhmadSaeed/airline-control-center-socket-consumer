import React, { useEffect, useState } from 'react';

const Chat = ({ chats, sendChat }) => {
	const [senderName, setSenderName] = useState('Sender 1');
    const [message, setMessage] = useState('');
    
	// send message to the server
	const sendMessage = async () => {
		sendChat(senderName, message);
		setMessage('');
    };
    // Convert unix timestamp to Human-readable date
	const convertToDateTime = (unix) => {
		return new Date(unix).toLocaleString();
	};

	return (
		<div id='chat-control'>
			<h2>Center Control</h2>
			<div id='chat-block'>
				<div id='all-messages'>
					<input
						value={senderName}
						onChange={(event) => setSenderName(event.target.value)}
						className='input-text'
						type='text'
						placeholder='Username'
					/>
					{chats.map((chat, key) => (
						<div key={key} className='message'>
							<div className='sender-info'>
								<div>
									<b>{chat.name}</b>
								</div>
								<div>{convertToDateTime(chat.date)}</div>
							</div>
							<div className='msg-text'>{chat.message}</div>
						</div>
					))}
				</div>
				<div id='message-sending-box'>
					<input
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						className='input-text'
						type='text'
						placeholder='Type here...'
					/>
					<button
						disabled={!message.length > 0 || !senderName.length > 0}
						className='button'
						onClick={sendMessage}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
