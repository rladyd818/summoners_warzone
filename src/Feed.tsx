import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				);
			});
	}, []);

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			{
				posts.map((post) => (
					<Post
						key={post.id}
						profilePic={post.data.profilePic}
						message={post.data.message}
						timestamp={post.data.timestamp}
						username={post.data.username}
						image={post.data.image}
					/>
				))
				/* <Post
				profilePic="https://images.unsplash.com/photo-1603320045158-61d0dc0fbb33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				message="{message}"
				timestamp="{timestamp}"
				username="{username}"
				image="https://code.org/shared/images/social-media/codeorg2019_social.png"
			/>
			<Post
				profilePic="https://images.unsplash.com/photo-1603320045158-61d0dc0fbb33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				message="{message}"
				timestamp="{timestamp}"
				username="kimyong"
				image="https://code.org/shared/images/social-media/codeorg2019_social.png"
			/>
			<Post /> */
			}
		</div>
	);
}

export default Feed;
