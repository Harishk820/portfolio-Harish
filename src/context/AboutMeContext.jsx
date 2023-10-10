import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { skillsHeading as skillsPageHeading } from '../data/skillsData';
import { skillsData as skillsDataJson } from '../data/skillsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	const [skillsData, setskillsData] = useState(skillsDataJson);
	const skillsHeading = skillsPageHeading;

	return (
		<AboutMeContext.Provider value={{ aboutMe, setAboutMe, skillsHeading, skillsData, setskillsData, }}>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
