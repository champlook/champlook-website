// components/SpecialityForm.js


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { db } from '@/app/Firebase-config';
import {doc,setDoc} from 'firebase/firestore'
import { useUserContext } from "@/app/Context/UserContext";



const SpecialityForm = () => {
    // Array to store the field data


    
    const fields = [
      'Front-end developer',
      'Full-stack developer',
      'Back-end developer',
      'Mobile developer',
      'Data Scientist',
      'Designer',
      'Product manager',
      'Business',
      'Other',
    ];

    const occupations = [
        'Student',
        'Professional/Post Grad',
    ];

    const study = [
        'College',
        'High School',
        'Middle School',
    ];

    const hackathonTypes = [
        'AR/VR',
        'Beginner Friendly',
        'Blockchain',
        'Communication',
        'Cybersecurity',
        'Databases',
        'Design',
        'DevOps',
        'E-commerce/Retail',
        'Education',
        'Enterprise',
        'Fintech',
        'Health',
        'IoT',
        'Lifehacks',
        'Low/No Code',
        'Machine Learning/AI',
        'Mobile',
        'Music/Art',
        'Open Ended',
        'Productivity',
        'Quantum',
        'Robotic Process Automation',
        'Social Good',
        'Voice skills',
        'Web',
      ];

      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
    
      // Array for year options
      const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);
    
     const [spe,setSpe]=useState("")
     const [hack,setHack]=useState([])
     const [text,setText]=useState("")
     
   

     const selectSpecification=(e)=>{
        setSpe(e.target.value);
     }


     
     const handleHack=(e)=>
     {
        let isSelected=e.target.checked;
        let value=e.target.value;
         if(isSelected)
         {
          setHack([...hack,value]);
         }         
         else{
          setHack((pd)=>{
           return pd.filter((type)=>{
            return type!==value
           })
          })
         }

     }


const texthandle=(e)=>{
setText(e.target.value)
}

const [loc,setLoc]=useState("")
const handleLocation=(e)=>{
setLoc(e.target.value);
}

const [occup,setOccup]=useState("")
const handleOccupation=(e)=>
{
  setOccup(e.target.value);
}
const [studys,setStudys]=useState("")
const handleStudy=(e)=>{
setStudys(e.target.value);
}

const [school,setSchool]=useState("")
const handleSchool=(e)=>{
setSchool(e.target.value);
}
const [gmonth,setGmonth]=useState("")
const [gyear,setGyear]=useState("")

const handlegmonth=(e)=>{
  setGmonth(e.target.value);
}
const handlegyear=(e)=>{
  setGyear(e.target.value);
}

const [bmonth,setBmonth]=useState("")
const [byear,setByear]=useState("")

const handlebmonth=(e)=>{
  setBmonth(e.target.value);
}
const handlebyear=(e)=>{
  setByear(e.target.value);
}

const user = useUserContext();
  const router = useRouter();

     const submit=async()=>{


      // console.log(spe)
      // console.log(text)
      // console.log(hack);
      // console.log(loc);
      // console.log(occup)
      // console.log(studys)
      // console.log(school)
      // console.log(gmonth);
      // console.log(gyear)
      // console.log(bmonth)
      // console.log(byear)

      
        await setDoc(doc(db, "preferences", user.uid), {
          uid: user.uid,
          Specality: spe,
          YourSkills: text,
          HackathonType: hack,
          Location: loc,
          Occupation: occup,
          StudyLevel: studys,
          SchoolName: school,
          GraduationMonth: gmonth,
          GraduationYear: gyear,
          BirthdayMonth: bmonth,
          BirthdayYear: byear
        });
       

      
      router.push("/home");
     }

  return (

    <div className="text-center flex items-start flex-col mt-6 font-avnext">
        <h1 className=" text-xl font-bold text-black mb-4 speciality-box whitespace-nowrap text-sm md:text-5xl">Preferences</h1>
      
      
      <h1 className="text-lg font-bold text-gray-600 mb-4 speciality-box whitespace-nowrap text-sm md:text-base">What's' your speciality?</h1>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 speciality-box whitespace-nowrap text-sm  sm:text-ss">   
  {fields.map((field, index) => (
    <label key={index} className="bg-white border border-customgray shadow px-3 rounded-md cursor-pointer text-customcolor speciality-box whitespace-nowrap text-xxs md:text-base mt-1 mb-1 py-1 flex items-start">
      <span><input type="radio" name="speciality"  value={field} required onChange={selectSpecification} /></span>
      <span className=" ml-1"> 
          {field}
        </span>
    </label> 
  ))}
</div>

      


      <div className="mt-6 flex items-start flex-col w-full peciality-box whitespace-normal ">
           <h2 className="text-lg font-bold text-gray-600 mb-2 speciality-box whitespace-nowrap text-sm md:text-base">
                  What are your skills?
            </h2>
          
              <textarea
                  onChange={texthandle}
                   name="skills"
                   placeholder="Languages, Databases, Framework, APIs, and Other tools"
                   required
                  className="border border-gray-300 pl-4 pr-7 pt-4 pb-3 rounded-md speciality-box w-full min-h-[auto] break-normal text-xs md:text-lg md:pb-0"
                  
                />
            
        </div>



        <div className="hidden md:grid md:grid-cols-1 gap-4 mt-6 w-full">
  <div className="md:mt-6 ">
    <h2 className="text-lg font-bold text-gray-600 mb-6 speciality-box whitespace-normal text-sm md:text-base  flex items-start">
      What types of hackathons are you interested in?
    </h2>
    
    <div className="grid gap-4 grid-cols-3 speciality-box whitespace-nowrap text-sm md:text-base">
  {hackathonTypes.map((type, index) => (
    
    <label key={index} className="bg-white border border-customgray shadow px-2 py-1 rounded-md cursor-pointer text-customcolor speciality-box whitespace-nowrap text-xs md:text-base mt-1 mb-1 flex items-start">
     <span><input type="checkbox" name="speciality" chacked={hack.includes(type)} value={type} required onChange={handleHack}  /></span> 
      
      <span className="ml-2">{type}</span>
    
    </label>
  ))}
</div>

  </div>
</div>


      
      <div className="md:hidden mt-6 flex items-start flex-col">
      <h2 className="text-lg font-bold text-gray-600 mb-0 speciality-box whitespace-normal text-sm md:text-base">
          What types of hackathons are you 
        </h2>
        <h2 className="text-lg font-bold text-gray-600 mb-2 speciality-box whitespace-normal text-sm md:text-base">
          intrested in?
        </h2>

        <select
          name="hackathonTypes"
          required
          className="border border-gray-300 p-2 rounded-md speciality-box text-sm md:text-base w-full text-customcolor"
          style={{ minWidth: '200px' }}
          placeholder="Select a field"
        >
          <option value="" disabled selected>
            Select a field
          </option>
          {hackathonTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>



      <div class="mb-3 mt-4 flex items-start flex-col w-full ">
      <h1 className="text-xl font-bold text-black mb-2 speciality-box text-xl">
          Eligibility 
        </h1>
    <h2 class="block mb-2 text-sm font-bold text-gray-600 ">Location</h2>
    
    <input type="text" id="default-input" required onChange={handleLocation} className="bg-white border border-gray-300 text-customcolor text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block min-w:264px max-w:400px p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ minWidth: '260px', maxWidth: '400px' }}/>

  </div>


  <div className="text-center flex items-start flex-col">
<h1 className="text-2xl font-bold text-gray-600 ml-0 mb-2 speciality-box whitespace-nowrap text-sm md:text-base">Occupation</h1>
<div className="grid gap-4 grid-cols-2 text-sm md:text-base">   
{occupations.map((field, index) => (
    <label key={index} name="occupations" className="bg-white border border-gray-300 px-1 py-1 rounded-md cursor-pointer text-customcolor speciality-box whitespace-nowrap text-xxs md:text-base mt-1 mb-1 flex items-start">
      <span><input type="radio" name="occupations" value={field} required onChange={handleOccupation} /></span>
      <span className="ml-1">{field}</span>
    </label>
  ))}
</div>
    </div>


    <div className="text-center flex items-start flex-col mt-4">
<h1 className="text-2xl font-bold text-gray-600 ml-0 mb-2 speciality-box whitespace-nowrap text-sm md:text-base">Current Level Of Study</h1>
<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 speciality-box whitespace-nowrap text-sm md:text-base">   
{study.map((field, index) => (
    <label key={index} name="study" className="bg-white border border-gray-300 px-3 py-1 rounded-md cursor-pointer text-customcolor speciality-box whitespace-nowrap text-xs md:text-base mt-1 mb-1 flex items-start">
      <span><input type="radio" name="study" required value={field} onChange={handleStudy} /></span>
      <span className="ml-2">{field}</span>
    </label>
  ))}
</div>
    </div>

  <div className="md:flex col-2 gap-4">
    <div className=" mt-6 flex items-start flex-col">
      <h2 className="text-lg font-bold text-gray-600 mb-0 speciality-box whitespace-normal text-sm md:text-base">
         School name
        </h2>
        
        <select
          name="school"
          required
          className="border border-gray-300 p-2 rounded-md speciality-box text-sm md:text-base w-full text-gray-400"
          style={{ minWidth: '200px' }}
          placeholder="Select a field" onChange={handleSchool} value={school}
        >
          <option value="" disabled selected>
            Select a school
          </option>
          {hackathonTypes.map((type, index) => (
            <option key={index} value={type} >
              {type}
            </option>
          ))}
        </select>
      </div>



    <div className="flex items-start flex-col mb-4 mt-6">
        <label htmlFor="graduation-month" className=" text-lg font-bold text-gray-600 mb-0 speciality-box whitespace-normal text-sm md:text-base">
          Graduation Month
        </label>
        <div className="flex flex-row">
          {/* Month Dropdown */}
          <select
            name="graduation-month"
            id="graduation-month"
            required
            className="border border-gray-300 p-2 rounded-md speciality-box text-sm md:text-base text-customblack" onChange={handlegmonth} value={gmonth}
          >
            <option value=""  selected >
              Month
            </option>
            {months.map((month, index) => (
              <option key={index} value={month} >
                {month}
              </option>
            ))}
          </select>
          {/* Year Dropdown */}
          <select
            name="graduation-year"
            id="graduation-year"
            required
            className="border border-gray-300 p-2 rounded-md speciality-box text-sm md:text-base ml-2 text-customblack" onChange={handlegyear} value={gyear}
          >
            <option value="" disabled selected>
              Year
            </option>
            {years.map((year, index) => (
              <option key={index} value={year} >
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      </div>

      <div className="flex items-start flex-col mb-4 mt-4">
        <label htmlFor="graduation-month" className="text-lg font-bold text-gray-600 mb-0 speciality-box whitespace-normal text-sm md:text-base">
          Birth Month
        </label>
        <div className="flex flex-row">
          {/* Month Dropdown */}
          <select
            name="graduation-month"
            id="graduation-month"
            required
            className="border border-gray-300 p-2 rounded-md speciality-box text-sm md:text-base text-customblack" onChange={handlebmonth} value={bmonth}
          >
            <option value="" disabled selected>
              Month
            </option>
            {months.map((month, index) => (
              <option key={index} value={month} >
                {month}
              </option>
            ))}
          </select>
          {/* Year Dropdown */}
          <select
            name="graduation-year"
            id="graduation-year"
            required
            className="border border-gray-300 p-2 rounded-md speciality-box text-sm md:text-base ml-2 text-customblack" onChange={handlebyear} value={byear}
          >
            <option value="" disabled selected>
              Year
            </option>
            {years.map((year, index) => (
              <option key={index} value={year} >
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      


<p className="mt-2 mb-6 speciality-box whitespace-nowrap text-sm md:text-base">Most hackathons have age requirements</p>



<button className=" mx-1 mb-20 bg-[#D81F1F] text-white p-2 pr-5 pl-5 hover:bg-red-600 " onClick={submit}>
  Continue
</button>




</div>
  );
          
}



  
  export default SpecialityForm;
  