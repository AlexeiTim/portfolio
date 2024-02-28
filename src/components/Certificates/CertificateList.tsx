import React from "react";
import {certificates} from "../../data/certificates";
import CertificateItem from "./CertificateItem";

const CertificateList = () => {
  return (
    <>
      {certificates.map((certificate) => (
        <CertificateItem certificate={certificate} />
      ))}
    </>
  );
};

export default CertificateList;
