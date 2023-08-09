import React from "react";

const Discrimination = () => {
  return (
    <>
      <div className=" font-avnext text-[#D81F1F] font-bold text-3xl mt-[2rem]">
        No discrimination
      </div>
      <hr className="mb-2 border border-t-2 border-gray-200" />
      <div className="leading-8 mt-[2rem]">
        Champlook-hosted hackathons are committed to providing a safe and
        inclusive environment, free from discrimination. The following factors
        shall not be the basis for any form of discrimination:
      </div>
      <ul className="list-disc ml-[2rem] font-avnextb leading-8">
        <li> Gender</li>
        <li>Gender identity and expression</li>
        <li>Age</li>
        <li>Sexual orientation</li>
        <li>Disability</li>
        <li>Physical appearance</li>
        <li>Body size</li>
        <li>Race</li>
        <li>Ethnicity</li>
        <li>Nationality</li>
        <li>Religion</li>
        <li>Political views</li>
        <li>Previous hackathon attendance or lack thereof</li>
        <li>Computing experience or lack thereof</li>
        <li>Chosen programming language or tech stack</li>
      </ul>
    </>
  );
};

export default Discrimination;
