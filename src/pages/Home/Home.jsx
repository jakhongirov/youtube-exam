import React from 'react';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import HomeMain from '../../Components/HomeMain/HomeMain';

function Home() {
	const elMain = React.useRef();
	const elModal = React.useRef();

	return (
		<>
			<HomeHeader main={elMain} elModal={elModal} />
			<HomeMain main={elMain} elModal={elModal}/>
		</>
	);
}

export default Home;
