import { useEffect, useRef } from 'react';
import { useAnnounceStore } from './announceStore';
import React from 'react';

const Announcer = React.memo(() => {
	const message = useAnnounceStore((state) => state.message);
	const clicked = useAnnounceStore((state) => state.clicked);
	let prevEl = document.activeElement;

	const announcer = useRef < HTMLDivElement > null;

	useEffect(() => {
		announcer.current.focus();
	}, [clicked]);

	const handler = (e) => {
		const AccessInfoButton = document.querySelector('#AccessibleInfoButton');
		e.preventDefault();
		if (prevEl.title === 'Close Keyboard Accessible Control Panel') {
			AccessInfoButton.focus();
		} else if (
			prevEl.tagName === 'BUTTON' ||
			prevEl.className === 'inputBox' ||
			prevEl.className === 'DropDown'
		) {
			prevEl.focus();
		}
	};

	return (
		<>
			<div
				role='log'
				aria-atomic='true'
				aria-live='assertive'
				onKeyDown={handler}
				style={{ textAlign: 'center', userSelect: 'text' }}
				ref={announcer}
				id='Announcer'
				tabIndex={-1}
			>
				{/* <h3>Description: </h3> */}
				{message}
			</div>
		</>
	);
});

export default Announcer;
