import React, { useEffect, useRef } from "react";
import Body from "./components/body";
import Navbar1 from "./components/Navbar";
import { useInView } from "react-intersection-observer";
const App = () => {
	let text1 = document.querySelector("#text1");
	const videoRef = useRef(null);

	const videos = [
		"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4",
		"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4",
		"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4",
	];
	console.log(1);

	// useEffect(() => {
	//   let options = {
	//     rootMargin: "0px",
	//     threshold: [0.25],
	//   };
	// },
	// let handlePlay = (entries, observer) => {
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			videoRef.current.play();
	// 		} else {
	// 			videoRef.current.pause();
	// 		}
	// 	});
	// };
	// let handletext = (entry, observer) => {
	// 	if (entry.isIntersecting) {
	// 		videoRef.current.play();
	// 	} else {
	// 		videoRef.current.pause();
	// 	}
	// };

	// let observer = new IntersectionObserver(function (entries, observer) {
	//   entries.forEach(entry => {
	//     console.log(entry)
	//   })
	// },options);
	// observer.observe(text1);
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});

	return (
		<>
			<Navbar1></Navbar1>
			<Body></Body>
		</>
	);
};

export default App;
