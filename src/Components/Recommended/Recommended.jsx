import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

function Recommended() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/photos')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			<h2 className='recommended__heading'>Recommended</h2>

			<ul className='list__slider'>
				{data.length > 0 &&
					data.map((row) => (
						<li className='item__slider' key={row.id}>
							<Carousel>
								<img
									
									className='video__img'
									src={row.url}
									alt='img'
									width='550'
									height='250'
								/>

								<p className='video__title'>{row.title}</p>
							</Carousel>
							<p className='video__title'>{row.title}</p>
						</li>
					))}
			</ul>
		</>
	);
}

export default Recommended;
