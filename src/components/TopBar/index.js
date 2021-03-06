/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = ({filterFavoriteWise, showAllItem}) => {
	const hasLogo = false;
	return (
		<div className='pg-topbar'>
			<h4 className='pg-topbar-branding' 
				onClick={() => showAllItem()}>
				{hasLogo && (
					<img
						className='pg-topbar-logo'
						src='#'
						alt='wp-photo-gallery'
					/>
				)}
				{!hasLogo && (
					<span className='pg-topbar-title'>
						WP <span>Photo</span> Gallery
					</span>
				)}
			</h4>
			<div className='search-input-control'>
				<input
					className='search-input'
					type='text'
					placeholder='Search here...'
				/>
			</div>
			<button
				onClick={filterFavoriteWise}
				className='pg-button pg-love-button only-icon'>
				<span className='icon'>
					<i className='pgicon pg-like'></i>
				</span>
			</button>
			<Link to='/Upload' className='pg-button pg-success-button'>
				<span className='text'>Upload</span>{' '}
				<span className='icon'>
					<i className='pgicon pg-download'></i>
				</span>
			</Link>
		</div>
	);
};

export default TopBar;
