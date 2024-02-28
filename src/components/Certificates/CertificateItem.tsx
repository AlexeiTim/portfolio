import React from "react";
import {Certificate} from "../../types/Certificate";
interface Props {
  certificate: Certificate;
}

const CertificateItem: React.FC<Props> = ({certificate}) => {
  const {title, description, image, link} = certificate;
  return (
    <div className='services-box'>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        target='_blank'
        href={link}
        className='btn'
      >
        Show
      </a>
    </div>
  );
};

export default CertificateItem;
