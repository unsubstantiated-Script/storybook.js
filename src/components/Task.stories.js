import React from "react";

import Task from "./Task";

//Overview
//--Two basic levels in SB-->
//Component-think "template"
//Child "Stories"
//--Each story is a permutation of a component e.g. same basic component with small tweaks. Think dark/light mode or adding a quick toggle

//Structure
//->Component
//-->Story
//-->Story
//-->Story...

export default {
	component: Task,
	title: "Task",
};

const Template = (args) => <Task {...args} />;

//Defines the component for SB
// SB needs the component and it's title
//Assigned to template as these are permutations
//Work like a functional component
//-->Template.bind({}) is used to allow each exported story to set its own props, yet same implementation
//->Args allow for live edits w/o restarting the app server
export const Default = Template.bind({});
Default.args = {
	task: {
		id: "1",
		title: "Test Task",
		state: "TASK_INBOX",
		updateAt: new Date(2021, 0, 1, 9, 0),
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		state: "TASK_PINNED",
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: "TASK_ARCHIVED",
	},
};
