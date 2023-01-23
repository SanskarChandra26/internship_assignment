import React from "react";

const Start = ({ sample }) => {
	return (
		<video className="videoTag" autoPlay loop muted>
			<source src={sample} type="video/mp4" />
		</video>
	);
};

export default Start;
