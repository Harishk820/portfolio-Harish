import React from 'react';
import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import ProjectInfo from './ProjectInfo';


const ProjectDetailCard = () => {

  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 mt-12">

      {
        singleProjectData.projectsInfo.map((project) => {
          return (
            <div className="absolute shadow-xl max-w-[18rem] rounded-lg bg-white 
                 dark:bg-secondary-dark dark:text-white" key={project.id}>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img className="rounded-t-xl"
                  src={project.projectImage}
                  alt="Project_image"
                  key={project.id}
                />
              </div>
              <ProjectInfo projectName={project.projectName} projectTechHeading={project.projectTechHeading}
                projectTech={project.projectTech} projectLinks={project.projectLinks}
                projectDescription={project.projectDescription}
              />
            </div>
          );
        })
      }






    </div>

  )
}

export default ProjectDetailCard;

