import PetProjectList from "./PetProject/PetProjectList";

const Projects = () => {
  return (
    <section
      className='portfolio'
      id='portfolio'
    >
      <h2
        data-aos='fade-down'
        className='heading'
      >
        Last <span>Projects</span>
      </h2>
      <div
        data-aos='fade-up'
        className='portfolio-container'
      >
        <PetProjectList />
      </div>
    </section>
  );
};

export default Projects;
