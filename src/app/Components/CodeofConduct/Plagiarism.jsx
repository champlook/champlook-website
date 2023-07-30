import React from 'react'

const Plagiarism = () => {
    return (
        <>
            <div className=" font-avnext text-[#D81F1F] font-bold text-3xl mt-[2rem]" >No plagiarism or re-using of past work</div>
            <hr className='mb-2 border border-t-2 border-gray-200'/>
            <div className='leading-8 mt-[2rem]'>We encourage participants to submit projects that have been developed exclusively during the   hackathon. However, if you choose to submit projects that contain reused code or resubmit a  project   previously submitted to another hackathon, you must disclose such previous use and its extent during   submission.
            </div>

            <div className='leading-8 mt-[2rem]'>
                If a project is found to contain undisclosed reused code upon inspection, the organizer may request  
                the participant to identify similarities and differences between the old and new work. Failure to comply  
                or the presence of undisclosed reused code may result in automatic disqualification from winning awards.  
            </div>

        </>
    )
}

export default Plagiarism