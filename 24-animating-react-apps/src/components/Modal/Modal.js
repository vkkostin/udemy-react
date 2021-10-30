import React from 'react';
// import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTiming = {
	enter: 400,
	exit: 1000,
}

const modal = ({ show, closed }) => {
	// const cssClasses = ['Modal']

	// if (show === 'entering') {
	// 	cssClasses.push('ModalOpen')
	// }

	// if (show === 'exiting') {
	// 	cssClasses.push('ModalClosed')
	// }

	// return (
	// 	<Transition
	// 		mountOnEnter
	// 		unmountOnExit
	// 		in={show}
	// 		timeout={animationTiming}
	// 	>
	// 		{state => {
	// 			const cssClasses = [
	// 				'Modal',
	// 				state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null
	// 			]
	// 			return (
	// 				<div className={cssClasses.join(' ')}>
	// 					<h1>A Modal</h1>
	// 					<button className="Button" onClick={closed}>Dismiss</button>
	// 				</div>
	// 			)
	// 		}}
	// 	</Transition>
	// )

	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={show}
			timeout={animationTiming}
			classNames={{
				enter: '',
				enterActive: 'ModalOpen',
				exit: '',
				exitActive: 'ModalClosed',
			}}
		>
			<div className='Modal'>
				<h1>A Modal</h1>
				<button className="Button" onClick={closed}>Dismiss</button>
			</div>
		</CSSTransition>
	)
}

export default modal;