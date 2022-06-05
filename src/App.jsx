import { useState, useEffect } from 'react';
import { Page } from './template/Page'

// Define sample data for local development
import sampleData from './sample_data.json'

function App() {
	// Declare payload state variable to store $uhuu template payload
	const [payload, setPayload] = useState($uhuu.payload() || sampleData);

	// listen $uhuu sdk events and set payload state the most recent one
	$uhuu.listen('payload', (data) => {
		setPayload(data);
	});

	useEffect(
		() => {
			// Do something after payload update.
		},
		[payload]
	);

	return (
		<div className="App">
			<Page payload={payload} />
		</div>
	);
}

export default App;
