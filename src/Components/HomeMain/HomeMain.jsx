import React from 'react';
import './HomeMain.scss';

import NavSmall from '../NavSmall/NavSmall';
import NavBig from '../NavBig/NavBig';
import Subscriptions from '../Subscriptions/Subscriptions';
import Setting from '../Setting/Setting';

import PostOne from '../PostOne/PostOne';
import Recommended from '../Recommended/Recommended';
import ChannelFood from '../ChannelFood/ChannelFood';

function HomeMain({ main, elModal }) {
	return (
		<>
			<main className='main'>
				<section>
					<div className='container'>
						<div className='menu__modal' ref={elModal}>
							<div className='menu__modal-item'>
								<NavSmall />
								<NavBig />
								<Subscriptions />
								<Setting />
							</div>
						</div>
					</div>
				</section>

				<section className='posts' ref={main}>
					<div className='container'>
						<PostOne />
						<Recommended />
						<ChannelFood />
					</div>
				</section>
			</main>
		</>
	);
}

export default HomeMain;
