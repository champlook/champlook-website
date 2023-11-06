
"use client"
import Image from "next/image";
import logo from "../Components/CodeofConduct/images/logo.svg";
import { Storage } from "../Firebase-config";
import {ref,uploadBytes,getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import { db } from "../Firebase-config";
import { collection,addDoc } from "firebase/firestore";




const Admin = () => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const useref=useRef(null);
  const use2ref=useRef(null);
  // const [authorImage, setAuthorImage] = useState(null);
  const [imageurl,setImageUrl] =useState("");
  // const [authorurl,setAuthorUrl]=useState("");
  const [prog,setprog]=useState(0);
  const [isLoading,setIsLoading]=useState(false);

  const [items, setItems] = useState(null);

useEffect(() => {
  setIsLoading(true);
  
    const items =  JSON.parse(sessionStorage.getItem('Admin'));
  
  if (items) {
   setItems(items);
  }
  setIsLoading(false);
}, []);

  const router=useRouter();

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  // const handleAuthorImageUpload = (e) => {
  //   const selectedAuthorImage = e.target.files[0];
  //   setAuthorImage(selectedAuthorImage);
  // };




  const uploadimage= (e)=>{
    e.preventDefault();
    if(image!=null)
    {
    const imageref=ref(Storage, `images/${image.name}`);
    const uploadTask=  uploadBytesResumable(imageref,image);
   uploadTask.on
   (
     "state_changed",(snapshot)=>{
      const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100); 
  // console.log(progress);
  setprog(progress);
      },

      (err)=>{console.log(err)},

     ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(url=>{
            console.log(url);
            setImageUrl(url)
          })
         }
   )
   useref.current.classList.toggle("hidden");
   use2ref.current.classList.toggle("hidden");
        }
        else{
          alert('Please select an image');
        }
  }


  // const uploadauthorimage=async()=>{
  //   const imageref=ref(Storage, `author/${authorImage.name}`);
  //   const uploadtask= await uploadBytes(imageref,authorImage).then(
  //     getDownloadURL(imageref).then(url=>setAuthorUrl(url))
  //   );
   
   
  // }


  const AddDoc=()=>{
    const docref=collection(db,"blogs");
    // if(heading!=null && content!=null && date!=null && authorName!=null && imageurl!=null)
    // {

    
    const data={
      title: heading , 
       description : content, 
       date: date,
       authorName: authorName,
       imageUrl : imageurl, 
      //  authorUrl : "data not entered"
    }
    addDoc(docref, data)
.then(docRef => {
    // console.log("Document has been added successfully");
    alert("Data added Successfully");
})
    // }
    // else{
    //   alert('Please fill all the fields');
    // }

  }




  const handleSubmit =(e) => {
    e.preventDefault();

    
  
  
   AddDoc();

  };

  return (<>
  {items?
 
    
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      // backgroundImage: 'url(admincmsbg)', // Replace with your image path
      backgroundColor: 'gray',
      backgroundSize: 'cover', // Adjust to your preferences
      backgroundRepeat: 'no-repeat', // Adjust to your preferences
      backgroundPosition: 'center', // Adjust to your preferences
    }}
  >
         <div className="">
          <Image
            src={logo}
            height={49}
            width={162}
            alt="logo"
            className="pt-[1rem] pb-4 sm:center"
          ></Image>
        </div>
  
      <h1 className="font-sans text-[40px] text-blue-200">Admin Login</h1>
      <form
        style={{
          width: '60%',
          maxWidth: '600px',
          background: '#a088b8',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
        }}
        // onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="heading">Blog Heading:</label>
          <textarea
            // type="text"
            id="heading"
            value={heading}
            onChange={handleHeadingChange}
            
            
            required
            style={{ width: '100%', height:'80px', marginBottom: '10px' ,  borderRadius: '10px',  background: '#eee5e5',paddingTop:'6px',paddingLeft:'8px'}}
          />
        </div>
        <div>
          <label htmlFor="content">Blog Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            style={{ width: '100%', height: '200px', marginBottom: '10px',borderRadius: '10px',background: '#eee5e5' ,paddingTop:'6px',paddingLeft:'8px'}}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
            style={{ width: '80%', marginBottom: '10px' ,borderRadius: '10px',background: '#eee5e5',paddingTop:'6px',paddingLeft:'8px'}}
          />
        </div>
        <div>
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={handleAuthorNameChange}
            required
            style={{ width: '80%', marginBottom: '10px',borderRadius: '10px',background: '#eee5e5',paddingTop:'6px',paddingLeft:'8px' }}
          />
        </div>
       

<div>
  <label htmlFor="image">Upload Image:</label>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <label
      htmlFor="image"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#ccc"
          d="M0 0h48v48H0z"
        />
        <path
          fill="#757575"
          d="M30 4H18c-1.1 0-2 .9-2 2H4c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V22c0-1.1-.9-2-2-2h-8V6c0-1.1-.9-2-2-2zm-2 16v22H10V22H8c-1.1 0-2 .9-2 2v18c0 .6.4 1 1 1h32c.6 0 1-.4 1-1V24c0-1.1-.9-2-2-2h-2z"
        />
        <path
          fill="#9E9E9E"
          d="M36 32h2v10c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h10v10h14c1.1 0 2 .9 2 2v14zM12 40V24h16v18H12zm22 0V24h2v16H34z"
        />
      </svg>
      <p>Click to Upload Image</p>
    </label>
    <input
      type="file"
      id="image"
      accept="image/*"
      onChange={handleImageUpload}
      required
      style={{ display: 'none' }}
    />
  </div>
  {image && (
    <img
      src={URL.createObjectURL(image)}
      alt="Image Preview"
      style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }}
    />
  )}
</div>
<span className="text-black text-center ml-48 hidden" ref={useref}><progress value={prog} max="100"> {prog}</progress><span> {prog}%</span> </span>


        

{/* <div>
  <label htmlFor="authorImage">Author Image:</label>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <label
      htmlFor="authorImage"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#ccc"
          d="M0 0h48v48H0z"
        />
        <path
          fill="#757575"
          d="M30 4H18c-1.1 0-2 .9-2 2H4c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V22c0-1.1-.9-2-2-2h-8V6c0-1.1-.9-2-2-2zm-2 16v22H10V22H8c-1.1 0-2 .9-2 2v18c0 .6.4 1 1 1h32c.6 0 1-.4 1-1V24c0-1.1-.9-2-2-2h-2z"
        />
        <path
          fill="#9E9E9E"
          d="M36 32h2v10c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h10v10h14c1.1 0 2 .9 2 2v14zM12 40V24h16v18H12zm22 0V24h2v16H34z"
        />
      </svg>
      <p>Click to Upload Author Image</p>
    </label>
    <input
      type="file"
      id="authorImage"
      accept="image/*"
      onChange={handleAuthorImageUpload}
      required
      style={{ display: 'none' }}
    />
  </div>
  {authorImage && (
    <img
      src={URL.createObjectURL(authorImage)}
      alt="Author Image Preview"
      style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }}
    />
  )}
</div> */}

<button onClick={uploadimage}  className="text-lg  mt-6 px-12 w-auto p-2 bg-red text-white font-bold font-avnextb rounded-lg mr-5 ml-[5.5rem]">Upload</button>

        {/* <button type="submit" className="mr-auto flex flex-row justify-items-center text-[25px]">Submit</button> */}
        <button  onClick={handleSubmit} type="submit" className="text-lg hidden  mt-6 px-12 w-auto p-2 bg-red text-white font-bold rounded-lg" ref={use2ref}>
                Submit
        </button>
        {/* <span>{imageurl}</span> */}
      </form>
    </div>
     :isLoading?<div>Loading...</div>:<div className="text-center text-base border rounded-md w-1/3 h-80 ml-[32rem] mt-[10rem] bg-gray-200 pt-[9rem]"><h2>Please login as<a href="/admin" className="text-blue-400"> admin</a></h2></div> 
  }
  </>) ;
  };

export default Admin;
