import {projects} from "../../../data/projects";
import PetProject from "./PetProject";

const PetProjectList = () => {
  return (
    <>
      {projects.map((project) => (
        <PetProject
          key={project.id}
          project={project}
        />
      ))}
    </>
  );
};

export default PetProjectList;
