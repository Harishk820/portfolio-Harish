// Import images
import Image1 from '../images/P-1.png';
import Image2 from '../images/P-2.jpg';
import Image3 from '../images/P-3.png';
import Image4 from '../images/P-4.png';
import Image5 from '../images/P-5.png';
import Image6 from '../images/P-6.png';
// Import icons
import { FiGithub, FiGlobe } from 'react-icons/fi';


export const singleProjectData3 = {

	ProjectHeader: {
		title: 'Some of my works',
		publishDate: 'Jul 26, 2023',
		tags: 'UI / Frontend',
	},

	projectsInfo: [

		{
			id: 1,
			projectName: 'Password Generator',
			projectImage: Image1,
			projectDescription: 'Generate Password as per your requirement!',
			projectTechHeading: 'Tools & Technologies',
			projectTech: ["HTML", "CSS", "JavaScript", "Reactjs", "TailwindCSS", "AdobeXD"],
			projectLinks: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/Harishk820/passwordGenerator',
				},
				{
					id: 2,
					name: 'ExternalLink',
					icon: <FiGlobe />,
					url: 'https://password-generator-hk.netlify.app/',
				},
			]
		},

		{
			id: 2,
			projectName: 'Movie GPT',
			projectImage: Image2,
			projectDescription: 'Movie recommendation app, search movies with AI ! ',
			projectTechHeading: 'Tools & Technologies',
			projectTech: ["HTML", "CSS", "JavaScript", "Reactjs", "TailwindCSS", "AdobeXD"],
			projectLinks: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/Harishk820/movie-gpt',
				},
				{
					id: 2,
					name: 'ExternalLink',
					icon: <FiGlobe />,
					url: 'https://movie-gpt-6ad1b.web.app/',
				},
			]
		},

		{
			id: 3,
			projectName: 'Weather App',
			projectImage: Image3,
			projectDescription: 'Weather Info App as per Location or searched city !!  ',
			projectTechHeading: 'Tools & Technologies',
			projectTech: ["HTML", "CSS", "JavaScript", "Reactjs", "TailwindCSS"],
			projectLinks: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/Harishk820/weatherAppProject',
				},
				{
					id: 2,
					name: 'ExternalLink',
					icon: <FiGlobe />,
					url: 'https://hk-weather.netlify.app/',
				},
			]
		},

		{
			id: 4,
			projectName: 'Indigenous Kursi',
			projectImage: Image4,
			projectDescription: 'Play with motion cum multiple colored Kursi built using javaScript functionalities !  ',
			projectTechHeading: 'Tools & Technologies',
			projectTech: ["HTML", "CSS", "JavaScript"],
			projectLinks: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/Harishk820/modern-chair',
				},
				{
					id: 2,
					name: 'ExternalLink',
					icon: <FiGlobe />,
					url: 'https://indigenous-chair.netlify.app/',
				},
			]
		},

		{
			id: 5,
			projectName: 'Dictationary App',
			projectImage: Image5,
			projectDescription: 'Create your own Dictionary by feeding words from text file !! ',
			projectTechHeading: 'Tools & Technologies',
			projectTech: ["C++", "File Handling", "Trie Data Structure"],
			projectLinks: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/Harishk820/dictionary',
				},
				{
					id: 2,
					name: 'ExternalLink',
					icon: <FiGlobe />,
					url: 'https://www.github.com/',
				},
			]
		},

		{
			id: 6,
			projectName: 'Porfilio Website',
			projectImage: Image6,
			projectDescription: 'Practice portfolio Website built using React !! ',
			projectTechHeading: 'Tools & Technologies',
			projectTech: ["HTML", "CSS", "JavaScript", "Reactjs", "TailwindCSS"],
			projectLinks: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/Harishk820/my_portfolio',
				},
				{
					id: 2,
					name: 'ExternalLink',
					icon: <FiGlobe />,
					url: '#',
				},
			]
		},
	],

	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Mobile App UI',
				img: Image3,
			},
		],
	},

}



