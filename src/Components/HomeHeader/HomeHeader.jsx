import React from 'react';
import './HomeHeader.scss';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Image/Black.svg';
import menu from '../../Assets/Image/Menu.svg';

import Search from '../Search/Search';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

function HomeHeader({ main, elModal }) {
	const [modal, setModal] = React.useState(false);

	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='header__box'>
						<button
							className='box__menu--btn'
							onClick={() => {
								setModal((prev) => !prev);
								if (modal) {
									main.current.classList.add('content');
									main.current.classList.add('open');
									elModal.current.classList.add('close');
								} else if (!modal) {
									main.current.classList.remove('content');
									elModal.current.classList.remove('close');
									main.current.classList.add('contain');
								}
							}}>
							<img
								className='box__menu-img'
								src={menu}
								alt='menu img'
								width='20'
								height='17'
							/>
						</button>
						<Link className='box__logo-link' to='/'>
							<img
								className='logo-img'
								src={logo}
								alt='youtube logo'
								width='116'
								height='25'
							/>
						</Link>
					</div>
					<Search />
					<ProfileMenu />
				</div>
			</header>
		</>
	);
}

export default HomeHeader;
