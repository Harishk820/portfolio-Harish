// import { useContext } from 'react';
// import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = ({ projectName, projectDescription, projectTechHeading, projectTech, projectLinks }) => {
	// const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex justify-center gap-0 sm:gap-10 mt-6 ">
			<div className="w-full sm:w-2/3 text-center">

				{/* Single project objectives */}
				<div className="mb-2">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectName}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{projectDescription}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectTechHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{/* {singleProjectData.ProjectInfo.Technologies[0].techs.join(', ')} */}

						{projectTech.join(', ')}
					</p>
				</div>

				{/* Single project social Links */}

				<div className=" flex justify-between  px-6 mt-3 mb-5">
					{
						projectLinks.map((social) => {
							return (
								<a key={social.id} href={social.url} target="__blank" aria-label="Share Project"
									className="bg-ternary-light dark:bg-ternary-dark text-gray-400
										 hover:text-primary-dark dark:hover:text-primary-light
										  p-2  rounded-lg shadow-sm duration-500"
								>
									<span className="text-lg  lg:text-2xl">
										{social.icon}
									</span>
								</a>
							);
						}
						)}
				</div>

			</div>




		</div>
	);
};

export default ProjectInfo;
