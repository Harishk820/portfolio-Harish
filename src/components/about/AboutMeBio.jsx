import profileImage from '../../images/profile.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">

			<div className="w-full shadow-lg sm:w-1/4 mb-7 sm:mb-0">
				<img className="rounded-xl  w-44" src={profileImage} alt={profileImage} />
			</div>

			<div className="font-general-regular w-full sm:w-2/3 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
