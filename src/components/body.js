import React from "react";
import { useEffect, useState, useRef, useReducer } from "react";
import { InView } from "react-intersection-observer";
const Body = () => {
	const [fetched, setFetched] = useState(0);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	let videos = [
		"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4",
		"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4",
		"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4",
	];
	const idx = useRef([true, false, false]);
	let idx2;
	const b = useRef(0);
	const src1 = useRef();
	// "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
	// 	"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
	const [users, setUsers] = useState([]);
	console.log(users.texts);
	const fetchData = () => {
		fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data);
				setFetched(1);
			});
	};
	// const { ref, inView, entry } = useInView({
	// 	/* Optional options */
	// 	threshold: 0,
	// });
	const [a1, setA1] = useState(0);
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		document.getElementById("video1").load();
	});

	return (
		<div>
			<div id="video-container">
				<div id="adjustment"></div>

				<video loop autoPlay muted ref={src1.current} id="video1">
					<source src={src1.current} type="video/mp4"></source>
				</video>
			</div>
			{fetched > 0 &&
				users.texts.map((user, idx1) => {
					return (
						<div id="container">
							<h3 id="y">{user.heading}</h3>
							<InView
								as="div"
								onChange={(inView, entry) => {
									{
										idx.current.forEach((value, idx1) => {
											idx.current[idx1] = false;
										});
										console.log(inView);
										if (inView) {
											src1.current = [videos[idx1]];
											if (document.getElementById("video1") != null) {
												document.getElementById("video1").src = src1.current;
											}
										}
									}
								}}>
								<h1 id="q">{user.subHeading}</h1>
							</InView>
							<p>{user.description}</p>
						</div>
					);
				})}
		</div>
	);
};

export default Body;
