import React, { Component } from 'react';
import back_img from './static/background.jpeg'

class App extends Component {
render() {
	const myStyle={
		backgroundImage: `url(${back_img})`,
		height:'100vh',
		marginTop:'-70px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
    
	};
	return (
	<div style={myStyle}>
		<h4> Кириенко Денис </h4>
	</div>
	);
}
}

export default App;
