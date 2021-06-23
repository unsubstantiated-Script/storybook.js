//Startup SB --> 3 bash terminals
//1. yarn test --watchAll
//2. yarn storybook
//3. yarn start

import React from "react";

import Task from "./Task";

export default {
	component: Task,
	title: "Task",
};

//Overview
//--Two basic levels in SB--> Important! SB is "Component" driven!
//1. Component->think "template"
//2. Child "Stories" -> SB jargon
//--Each "story" is a permutation of a component e.g. same basic component with small tweaks. Think "easily changing" "dark/light" mode or adding a quick toggle like a "like" or "love". Build out the main component and govern small changes with child "stories". This makes scaling in React way easier...

/*Basic Structure
Component-sitting in one file--this is the story that "changes"
    state ----
    state     |--Sit inside another "story file" and tweak the "state" of what's rendered 
    state ----
*/

//Note: "Task" below only refers to the given name of the component we are mutating. Tutorial project builds out a "Task List" ////Name can be anything relevant to the project at hand as in regular React.

//Creating this just helps reduce the amount of written code...copy/paste into your own project and change the component "Task" //name
const Template = (args) => <Task {...args} />;

//Story STates
//Defines the component for SB

//Assigned to template as these are permutations
//Work like a functional component
//Exporting each state allows us to use it elsewhere

//State 1                  //making a copy of the function w/ same implementation
export const Default = Template.bind({});
//->Args allow for live edits w/o restarting the app server
Default.args = {
	task: {
		// SB needs the component and it's title
		id: "1",
		title: "Test Task",
		state: "TASK_INBOX",
		updateAt: new Date(2021, 0, 1, 9, 0),
	},
};

//State 2
export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		//Spreading the default object...
		...Default.args.task,
		//Just tweaking the state to conditionally render this state...
		state: "TASK_PINNED",
	},
};

//State 3
export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: "TASK_ARCHIVED",
	},
};
