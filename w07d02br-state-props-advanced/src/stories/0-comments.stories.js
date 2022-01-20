import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

// import the component
import Comment from '../Components/Comment';
import CommentList from '../Components/CommentList';

const comment = {
	id: 1,
	image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	content: 'This is a great comment!!! ',
	likes: 10,
	dislikes: 1,
}
// mock functions
// a function that does absolutely nothing but to serve a purpose of being a function
// (Comment(data: comment))
storiesOf('Comments')
	.add('A Random Comment', () => <Comment data={comment} handleClick={action('onClick')}/>)




const comments = [
	{
		id: 1,
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'This is a great comment!!! ',
		likes: 10,
		dislikes: 1,
	},
	{
		id: 2,
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'THIS IS A TERRIBLE COMMENT!!!',
		likes: 0,
		dislikes: 55,
	}
]

// make a stoiresOF and use add()

// what is props or properties?
// CommentList(name, list, val, isFalse, )
//  const CommentList = ( props ) => {... }
storiesOf('CommentList Component')
  .add('default', () => <CommentList comments={comments} />)