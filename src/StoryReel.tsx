import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="images/img5.jpg"
				profileSrc="./images/img1.jpg"
				title="사제"
			/>
			<Story
				image="./images/img4.jpg"
				profileSrc="./images/img2.png"
				title="극지"
			/>
			<Story
				image="./images/img2.png"
				profileSrc="./images/img3.jpg"
				title="하그"
			/>
			<Story
				image="./images/img3.jpg"
				profileSrc="./images/img4.jpg"
				title="호박"
			/>
			<Story
				image="./images/img1.jpg"
				profileSrc="./images/img5.jpg"
				title="프랑켄"
			/>
		</div>
	);
}

export default StoryReel;
