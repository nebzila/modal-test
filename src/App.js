import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
	const modal = useRef(null);
	const PersonModal = useRef(null);
	const AnimalModal = useRef(null);
	const DescriptionModal = useRef(null);
	const ActionModal = useRef(null);
	const ResultModal = useRef(null);
	const PersonOption = useRef(null);
	const AnimalOption = useRef(null);
	const DescriptionOption = useRef(null);
	const ActionOption = useRef(null);
	const result1 = useRef(null);
	const result2 = useRef(null);
	const [person, setPerson] = useState('');
	const [animal, setAnimal] = useState('');
	const [description, setDescription] = useState('');
	const [action, setAction] = useState('');
	const [pageIndex, setPageIndex] = useState(0);
	const [multiModal, setMultiModal] = useState(false);

	useEffect(() => {
		if (pageIndex === 4) {
			result1.current.focus();
		}
	}, [pageIndex]);

	return (
		<>
			<button
				onClick={() => {
					PersonModal.current.showModal();
				}}
			>
				Open Modal Chain
			</button>
			<dialog ref={PersonModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Person</h1>
					<select
						ref={PersonOption}
						onChange={() => {
							setPerson(PersonOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
						<option>Joe</option>
						<option>Julie</option>
						<option>Katherine</option>
						<option>Alexa</option>
						<option>Jacob</option>
						<option>Gianna</option>
						<option>Sarah</option>
						<option>Deb</option>
						<option>Aiden</option>
						<option>Ben</option>
					</select>
					<button
						onClick={() => {
							PersonOption.current.selectedIndex = 0;
							PersonModal.current.close();
							AnimalModal.current.showModal();
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog ref={AnimalModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Animal</h1>
					<select
						ref={AnimalOption}
						onChange={() => {
							setAnimal(AnimalOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
						<option>gorilla</option>
						<option>archaeopteryx</option>
						<option>sea cucumber</option>
						<option>axolotl</option>
						<option>narwhal</option>
						<option>godzilla</option>
						<option>chupacabra</option>
					</select>
					<button
						onClick={() => {
							AnimalOption.current.selectedIndex = 0;
							AnimalModal.current.close();
							DescriptionModal.current.showModal();
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog ref={DescriptionModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Description</h1>
					<select
						ref={DescriptionOption}
						onChange={() => {
							setDescription(DescriptionOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
						<option>covered in mold</option>
						<option>drunk</option>
						<option>fat</option>
						<option>just awful</option>
						<option>technically illegal</option>
					</select>
					<button
						onClick={() => {
							DescriptionOption.current.selectedIndex = 0;
							DescriptionModal.current.close();
							ActionModal.current.showModal();
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog ref={ActionModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Action</h1>
					<select
						ref={ActionOption}
						onChange={() => {
							setAction(ActionOption.current.value);
						}}
					>
						<option>Select</option>
						<option>betray the the will of its owner</option>
						<option>consider its life choices</option>
						<option>cause irreversible problems for all</option>
						<option>bring a horrible smell</option>
					</select>
					<button
						onClick={() => {
							ActionOption.current.selectedIndex = 0;
							ActionModal.current.close();
							ResultModal.current.showModal();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog ref={ResultModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h3
						tabIndex={1}
						result={result2}
					>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</h3>
					<button
						onClick={() => {
							ResultModal.current.close();
							setPageIndex(0);
							setPerson('');
							setAnimal('');
							setDescription('');
							setAction('');
						}}
					>
						Close
					</button>
				</div>
			</dialog>

			<button
				onClick={() => {
					modal.current.showModal();
				}}
			>
				Open Paginated Modal
			</button>
			<div className='App'>
				<dialog ref={modal}>
					<div
						id='ModalContent'
						style={{
							height: '100%',
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{pageIndex === 0 ? (
							<div id='personSlide'>
								<h1 tabIndex={1}>Select Person</h1>
								<select
									ref={PersonOption}
									onChange={() => {
										setPerson(PersonOption.current.value);
									}}
								>
									<option selected={true}>Select</option>
									<option>Joe</option>
									<option>Julie</option>
									<option>Katherine</option>
									<option>Alexa</option>
									<option>Jacob</option>
									<option>Gianna</option>
									<option>Sarah</option>
									<option>Deb</option>
									<option>Aiden</option>
									<option>Ben</option>
								</select>
								<button
									onClick={() => {
										if (person === '') {
											alert('Select an option');
										} else {
											PersonOption.current.selectedIndex = 0;
											setPageIndex(1);
										}
									}}
								>
									Next
								</button>
							</div>
						) : pageIndex === 1 ? (
							<div id='animalSlide'>
								<h1 tabIndex={1}>Select Animal</h1>
								<select
									ref={AnimalOption}
									onChange={() => {
										setAnimal(AnimalOption.current.value);
									}}
								>
									<option selected={true}>Select</option>
									<option>gorilla</option>
									<option>archaeopteryx</option>
									<option>sea cucumber</option>
									<option>axolotl</option>
									<option>narwhal</option>
									<option>godzilla</option>
									<option>chupacabra</option>
								</select>
								<button
									onClick={() => {
										AnimalOption.current.selectedIndex = 0;
										setPageIndex(2);
									}}
								>
									Next
								</button>
							</div>
						) : pageIndex === 2 ? (
							<div id='descriptionSlide'>
								<h1 tabIndex={1}>Select Description</h1>
								<select
									ref={DescriptionOption}
									onChange={() => {
										setDescription(DescriptionOption.current.value);
									}}
								>
									<option selected={true}>Select</option>
									<option>covered in mold</option>
									<option>drunk</option>
									<option>fat</option>
									<option>just awful</option>
									<option>technically illegal</option>
								</select>
								<button
									onClick={() => {
										DescriptionOption.current.selectedIndex = 0;
										setPageIndex(3);
									}}
								>
									Next
								</button>
							</div>
						) : pageIndex === 3 ? (
							<div id='actionSlide'>
								<h1 tabIndex={0}>Select Action</h1>
								<select
									ref={ActionOption}
									onChange={() => {
										setAction(ActionOption.current.value);
									}}
								>
									<option selected={true}>Select</option>
									<option>betray the the will of its owner</option>
									<option>consider its life choices</option>
									<option>cause irreversible problems for all</option>
									<option>bring a horrible smell</option>
								</select>
								<button
									onClick={() => {
										ActionOption.current.selectedIndex = 0;
										setPageIndex(4);
									}}
								>
									Complete
								</button>
							</div>
						) : (
							<div id='resultSlide'>
								<div
									style={{ fontWeight: 'bold', fontSize: '20px' }}
									ref={result1}
									tabIndex={0}
								>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</div>
								<button
									onClick={() => {
										modal.current.close();
										setPageIndex(0);
										setPerson('');
										setAnimal('');
										setDescription('');
										setAction('');
									}}
								>
									Close
								</button>
							</div>
						)}
					</div>
				</dialog>
			</div>
			<button
				onClick={() => {
					setMultiModal(!multiModal);
				}}
			>
				Open multi modals
			</button>
			{multiModal ? (
				<div
					id='modal2'
					style={{
						height: '200px',
						width: '100px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-around',
						border: 'solid black 5px',
						borderRadius: '15px',
					}}
				>
					<button
						onClick={() => {
							PersonModal.current.showModal();
						}}
					>
						Person
					</button>
					<button
						onClick={() => {
							AnimalModal.current.showModal();
						}}
					>
						Animal
					</button>{' '}
					<button
						onClick={() => {
							DescriptionModal.current.showModal();
						}}
					>
						Description
					</button>{' '}
					<button
						onClick={() => {
							ActionModal.current.showModal();
						}}
					>
						Action
					</button>{' '}
					<button
						onClick={() => {
							ResultModal.current.showModal();
						}}
					>
						Result
					</button>
					<dialog ref={PersonModal}>
						<div
							id='ModalContent'
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<h1 tabIndex={1}>Select Person</h1>
							<select
								ref={PersonOption}
								onChange={() => {
									setPerson(PersonOption.current.value);
								}}
							>
								<option selected={true}>Select</option>
								<option>Joe</option>
								<option>Julie</option>
								<option>Katherine</option>
								<option>Alexa</option>
								<option>Jacob</option>
								<option>Gianna</option>
								<option>Sarah</option>
								<option>Deb</option>
								<option>Aiden</option>
								<option>Ben</option>
							</select>
							<button
								onClick={() => {
									PersonOption.current.selectedIndex = 0;
									PersonModal.current.close();
								}}
							>
								Close
							</button>
						</div>
					</dialog>
					<dialog ref={AnimalModal}>
						<div
							id='ModalContent'
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<h1 tabIndex={1}>Select Animal</h1>
							<select
								ref={AnimalOption}
								onChange={() => {
									setAnimal(AnimalOption.current.value);
								}}
							>
								<option selected={true}>Select</option>
								<option>gorilla</option>
								<option>archaeopteryx</option>
								<option>sea cucumber</option>
								<option>axolotl</option>
								<option>narwhal</option>
								<option>godzilla</option>
								<option>chupacabra</option>
							</select>
							<button
								onClick={() => {
									AnimalOption.current.selectedIndex = 0;
									AnimalModal.current.close();
								}}
							>
								Close
							</button>
						</div>
					</dialog>
					<dialog ref={DescriptionModal}>
						<div
							id='ModalContent'
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<h1 tabIndex={1}>Select Description</h1>
							<select
								ref={DescriptionOption}
								onChange={() => {
									setDescription(DescriptionOption.current.value);
								}}
							>
								<option selected={true}>Select</option>
								<option>covered in mold</option>
								<option>drunk</option>
								<option>fat</option>
								<option>just awful</option>
								<option>technically illegal</option>
							</select>
							<button
								onClick={() => {
									DescriptionOption.current.selectedIndex = 0;
									DescriptionModal.current.close();
								}}
							>
								Close
							</button>
						</div>
					</dialog>
					<dialog ref={ActionModal}>
						<div
							id='ModalContent'
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<h1 tabIndex={1}>Select Action</h1>
							<select
								ref={ActionOption}
								onChange={() => {
									setAction(ActionOption.current.value);
								}}
							>
								<option>Select</option>
								<option>betray the the will of its owner</option>
								<option>consider its life choices</option>
								<option>cause irreversible problems for all</option>
								<option>bring a horrible smell</option>
							</select>
							<button
								onClick={() => {
									ActionOption.current.selectedIndex = 0;
									ActionModal.current.close();
								}}
							>
								Close
							</button>
						</div>
					</dialog>
					<dialog ref={ResultModal}>
						<div
							id='ModalContent'
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div id='resultSlide'>
								<h3
									result={result2}
								>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</h3>
								<button
									onClick={() => {
										ResultModal.current.close();
										setPageIndex(0);
										setPerson('');
										setAnimal('');
										setDescription('');
										setAction('');
									}}
								>
									Close
								</button>
							</div>
						</div>
					</dialog>
				</div>
			) : null}
		</>
	);
}

export default App;
