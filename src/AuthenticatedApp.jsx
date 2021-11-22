import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import ChannelsPgae from './pages/Channels/Channels';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<Home />} />
				<Route path='/channel/:id' element={<ChannelsPgae />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
