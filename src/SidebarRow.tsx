import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

interface Props {
	src?: string;
	Icon?: any;
	title?: string;
}
function SidebarRow({ src, Icon, title }: Props) {
	//중괄호를 지우면 props객체의 src, Icon, title로 접근할 수 있음
	return (
		<div className="sidebarRow">
			{src && <Avatar src={src} />}
			{Icon && <Icon />}

			<h4>{title}</h4>
		</div>
	);
}

export default SidebarRow;
