import React from "react";

import PropTypes from "prop-types";

//Task Template built out completely things meant to be changed are rendered conditionally and link up to the state variable which will be manipulated by the different stories...

//Can be tested before being built

export default function Task({
	task: { id, title, state },
	onArchiveTask,
	onPinTask,
}) {
	return (
		<div className={`list-item ${state}`}>
			<label className='checkbox'>
				<input
					type='checkbox'
					defaultChecked={state === "TASK_ARCHIVED"}
					disabled={true}
					name='checked'
				/>
				<span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
			</label>
			<div className='title'>
				<input
					type='text'
					value={title}
					readOnly={true}
					placeholder='Input title'
				/>
			</div>

			<div className='actions' onClick={(event) => event.stopPropagation()}>
				{state !== "TASK_ARCHIVED" && (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a onClick={() => onPinTask(id)}>
						<span className={`icon-star`} />
					</a>
				)}
			</div>
		</div>
	);
}

//Builds out the shape of the data to give warnings if the task component is misused
Task.propTypes = {
	/**Composition of the task */
	task: PropTypes.shape({
		/** Id of the task */
		id: PropTypes.string.isRequired,
		/** Title of the task */
		title: PropTypes.string.isRequired,
		/** Current state of the task */
		state: PropTypes.string.isRequired,
	}),
	/** Event to change the task to archived */
	onArchiveTask: PropTypes.func,
	/** Event to change the task to pinned */
	onPinTask: PropTypes.func,
};

//To test install yarn add -D @storybook/addon-storyshots react-test-renderer
//create  src/storybook.test.js file
//Load with:
//import initStoryshots from '@storybook/addon-storyshots'; initStoryshots();
//Run yarn test in a fourth terminal

//Note: this structure allows us to build out a single component in isolation for testing before building the rest of the app around it. Thus, we can pefect small portions of the app and assemble them later. Legos...
