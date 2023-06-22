import {
  design,
  marketing,
  print,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  amazon,
  prints,
  warehouse,
  publicis,
  aicollection,
  bankui,
  logos,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Design & Branding",
		icon: design,
	},
	{
		title: "Marketing & Advertising",
		icon: marketing,
	},
	{
		title: "Print Production",
		icon: print,
	},
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
	{
		title: "Warehouse Worker",
		company_name: "Amazon",
		icon: amazon,
		iconBg: "#E6DEDD",
		date: "Nov 2016 – presents",
		points: [
			"I am working in an Amazon Fulfillment Centre as a warehouse operative.",
			"My duties include different types of tasks in the warehouse environment.",
		],
	},
	{
		title: "Warehouse Operative",
		company_name: "Various Warehouse jobs",
		icon: warehouse,
		iconBg: "#E6DEDD",
		date: "March 2014 - Nov 2016",
		points: [
			"Sept 2014 - Nov 2014 Worked as a slapper at Papa John’s Pizza in Chester.",
			"Jul 2014 - Sept 2014 Worked as an Order Picker, LLOP driver for Sainsbury’s warehouse.",
			"March 2014 - June 2014 Worked as an assembly worker for Pertemps Agency, Flextronics Warehouse.",
			"February 2013 - March 2014 I worked as a warehouse operative for Staffline plc.",
		],
	},

	{
		title: "Artworker/Graphic Designer",
		company_name: "Publicis Hungary Advertising Agency",
		icon: publicis,
		iconBg: "#E6DEDD",
		date: "Jul 2014 - Sept 2014",
		points: [
			"Worked as part of a team on various projects",
			"Collaborated on project briefs before working independently on the finished product",
			"Followed client direction throughout the project creation process",
		],
	},
	{
		title: "Artworker/Graphic Designer",
		company_name: "Graphic studios and prints",
		icon: prints,
		iconBg: "#E6DEDD",
		date: "1989 - October 2000",
		points: [
			"1996 – October 2000 Corvus Design Graphics Studio (Hungary)",
			"1992 – 1996 Repró Rózsa Ltd. (Hungary)",
			"1989 - 1992 Various Graphic studios and prints",
		],
	},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
	{
		name: "AI Collection",
		description:
			"AI Collection is the ultimate tool for the modern creative. Create amazing content whether it's writing, marketing, video editing or search engine optimization - AI Collection has you covered. Get ready to take your creativity and productivity to a whole new level!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "HTML",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: aicollection,
		source_code_link: "https://github.com/",
	},
	{
		name: "UI Design landing page",
		description:
			"Stop struggling with outdated and poorly designed UIs! Get ahead of the curve with beautiful, responsive, modern UIs that will make your customers fall in love with your product. With our UI design services, you can create a stunning first impression that will capture your customers' attention and keep them engaged. Let us help you show off your product in the best light and take it to the next level!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "HTML",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: bankui,
		source_code_link: "https://github.com/",
	},
	{
		name: "Logo Design",
		description:
			"Struggling to get your brand noticed? Get the winning logo you need to stand out and make an impact! Logo Design is here to make it happen for you, with a range of designs and colors to choose from. Boost your brand recognition with me, and make sure your business stands out from the rest!",
		tags: [
			{
				name: "Photoshop",
				color: "blue-text-gradient",
			},
			{
				name: "Illustrator",
				color: "green-text-gradient",
			},
			{
				name: "Blender",
				color: "pink-text-gradient",
			},
		],
		image: logos,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
	
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
