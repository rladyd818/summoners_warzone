import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

interface Props {
	image: string;
	profileSrc: string;
	title: string;
}

function Story({ image, profileSrc, title }: Props) {
	return (
		<div style={{ backgroundImage: `url(${image})` }} className="story">
			<Avatar className="story__avatar" src={profileSrc} />
			<h4>{title}</h4>
		</div>
	);
}

export default Story;
