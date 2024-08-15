import React from "react";
import installVid from "../assets/video/Installation.mp4"


const InstalationPage = () => {

  return (
    <div className="installation">
      <video controls>
        <source src={installVid} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};

export default InstalationPage;
