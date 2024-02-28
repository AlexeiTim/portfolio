import { Project } from "../../../types/Project";
interface Props {
  project: Project;
}
const PetProject: React.FC<Props> = ({ project }) => {
  const { title, description, link, image } = project;
  return (
    <div className="portfolio-box">
      <img src={image} alt="photo1" />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link} target="_blank">
          <i className="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
};

export default PetProject;
