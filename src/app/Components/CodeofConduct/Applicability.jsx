import React from "react";

const Applicability = () => {
  return (
    <>
      <div className=" font-avnext text-[#D81F1F] font-bold text-3xl pt-8">
        Applicability
      </div>
      <hr className="mb-2 border border-t-2 border-gray-200" />

      <div className=" mt-[2rem]">
        This policy applies to all areas associated with Champlook, including
        the following and their online equivalents (if applicable):
      </div>
      <ul className="list-disc ml-[2rem]">
        <li>Hackathons</li>
        <li>Talks, presentations, or demonstrations</li>
        <li>Workshops</li>
        <li>Parties and social events</li>
        <li>Social media channels, etc.</li>
      </ul>

      <h3 className="mt-[2rem]">
        This Code of Conduct also extends to sponsors, partners, and all
        projects created during the hackathon
      </h3>
    </>
  );
};

export default Applicability;
