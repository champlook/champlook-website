
"use client"
import Image from "next/image";
import logo from "../Components/CodeofConduct/images/logo.svg";


import { useState } from 'react';

const Admin = () => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);

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

  const handleAuthorImageUpload = (e) => {
    const selectedAuthorImage = e.target.files[0];
    setAuthorImage(selectedAuthorImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., send data to an API or save it to a database
    // You can use libraries like Axios or fetch to send data to a server.
    // Don't forget to handle image uploads as well.

    console.log('Heading:', heading);
    console.log('Content:', content);
    console.log('Date:', date);
    console.log('Author Name:', authorName);
    console.log('Image:', image);
    console.log('Author Image:', authorImage);
  };

  return (
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(to bottom, #f7f7f7, #e3e3e3)' }}>
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
        onSubmit={handleSubmit}
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



        

<div>
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
</div>



        {/* <button type="submit" className="mr-auto flex flex-row justify-items-center text-[25px]">Submit</button> */}
        <button type="submit" className="text-[1.5rem] leading-[125%] mt-6 px-12 w-auto p-2 bg-red text-white font-bold rounded-lg">
                Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
