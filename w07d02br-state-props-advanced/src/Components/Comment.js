import React from 'react';
import './comment.css'

function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;
	console.log(props);
	// $('#buttonCLick').on('click', (evt) => {/..})
	const onLikeClick = () => {
		console.log("LIKE CLICK");
		props.death(id, 'likes');
	}

	const onDislikeClick = () => {
		console.log("DISLIKE CLICK");
		props.death(id, 'dislikes');
	}
	// myCbFunction = () => {////}

	// $('#button').on('click', (evt) => { /////  })
	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={() => onLikeClick()}>Like {likes}</button>
				<button onClick={onDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;