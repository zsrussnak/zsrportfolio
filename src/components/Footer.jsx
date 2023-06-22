import React from "react";

import facebook from "../assets/social/facebook-96.png";
import twitter from "../assets/social/twitter-96.png";
import instagram from "../assets/social/instagram-96.png";
import linkedin from "../assets/social/linkedin-96.png";
import youtube from "../assets/social/youtube-96.png";
import github from "../assets/social/github-96.png";

const Footer = () => {
	return (
		<div className="w-full flex justify-between items-center md:flex-row flex-col p-8 border-t-[1px] border-t-[#3F3E45]">
			<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
				Copyright Ⓒ 2023. All Rights Reserved.
			</p>
			<div className="flex flex-row mt-6 md:mt-0">
				<a
					href="https://www.facebook.com/zsolt.russnak"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
						src={facebook}
						alt="facebook"
					/>
				</a>
				<a
					href="https://www.twitter.com/@ZsoltRussnak"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
						src={twitter}
						alt="twitter"
					/>
				</a>
				<a
					href="https://www.instagram.com/zsolt_russnak/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
						src={instagram}
						alt="instagram"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/zsolt-russnak-0a9451a8/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
						src={linkedin}
						alt="linkedin"
					/>
				</a>
				<a
					href="https://www.youtube.com/@aiforcreatives"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
						src={youtube}
						alt="youtube"
					/>
				</a>
				<a
					href="https://www.github.com/zsrussnak"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="w-[30px] h-[30px] object-contain cursor-pointer"
						src={github}
						alt="github"
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;


// import {
// 	FaFacebookSquare,
// 	FaTwitterSquare,
// 	FaInstagramSquare,
// 	FaLinkedin,
// 	FaYoutube,
// 	FaGithub,
// } from "react-icons/fa";

// export const socialMedia = [
// 	{
// 		id: "social-media-1",
// 		icon: FaFacebookSquare,
// 		link: "https://www.facebook.com/zsolt.russnak",
// 	},
// 	{
// 		id: "social-media-2",
// 		icon: FaTwitterSquare,
// 		link: "https://www.twitter.com/@ZsoltRussnak",
// 	},
// 	{
// 		id: "social-media-3",
// 		icon: FaInstagramSquare,
// 		link: "https://www.instagram.com/zsolt_russnak/",
// 	},
// 	{
// 		id: "social-media-4",
// 		icon: FaLinkedin,
// 		link: "https://www.linkedin.com/in/zsolt-russnak-0a9451a8/",
// 	},
// 	{
// 		id: "social-media-5",
// 		icon: FaYoutube,
// 		link: "https://www.youtube.com/@aiforcreatives",
// 	},
// 	{
// 		id: "social-media-6",
// 		icon: FaGithub,
// 		link: "https://www.github.com/zsrussnak",
// 	},
// ];
