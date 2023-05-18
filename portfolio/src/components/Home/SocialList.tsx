import React from "react";
import {SocialLink} from "../../types/SocialLinks";
interface Props {
  links: SocialLink[];
}
const SocialList: React.FC<Props> = ({links}) => {
  return (
    <>
      {links.map((link) => (
        <a
          target='_blank'
          key={link.id}
          href={link.link}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialList;
