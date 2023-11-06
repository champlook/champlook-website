"use client"
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/Firebase-config";
import Image from "next/image";

const Blogdata = ({ params }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const docRef = doc(db, "blogs", params.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBlog(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getdata();
    }, [params.id]);

    return (
        <div>
            {/* <h1>Blog Data</h1> */}
            {blog ? (
                <div className="bg-slate-200  h-auto m-4">
                    <div className="text-center">

                    <h2 className="font-bold text-center text-2xl pt-6 pb-5 pl-4 pr-4" >{blog.title}</h2>
                   <Image src={blog.imageUrl} height={300} width={300} alt="blog image" className="block m-auto "/>
                    <p className="font-semibold text-center pt-4 pb-6 pl-4 pr-4">{blog.description}</p>
                  
                    <p className="text-gray-500">Author: {blog.authorName} | Date: {blog.date}</p>
                    
                
                </div>
                    </div>
            ) : (
                <p>Loading blog data...</p>
            )}
        </div>
    );
}

export default Blogdata;
