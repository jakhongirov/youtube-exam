import React from 'react';
import './Subscriptions.scss';

import { useNavigate } from 'react-router-dom';

function Subscriptions() {
	const [data, setData] = React.useState([]);
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/users')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			<h4>Subscriptions</h4>

			<ul className='channel__list'>
				{data.length > 0 &&
					data.map((row) => (
						<li className='channel__item' key={row.id}>
							<button
								className='channels__btn'
								onClick={() => navigate('/home/' + row.id)}>
								<img
									className='channel__img'
									src='https://stopdtp.com/images/2021/06/05/sample_user_icon.png'
									alt='img'
									width='26'
									height='26'
								/>
								<span className='channel__name'>{row.username}</span>
							</button>
						</li>
					))}
			</ul>
		</>
	);
}

export default Subscriptions;