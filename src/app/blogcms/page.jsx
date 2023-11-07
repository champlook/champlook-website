"use client"
import { useEffect, useState } from "react";
import { db } from "../Firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Image from 'next/image';

const Blogcms = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const blogsRef = collection(db, "blogs");
            const blogssnap = await getDocs(blogsRef);
            const blogList = blogssnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setBlogs(blogList);
        }

        getBlogs();
    }, []);

    return (
        <div className="ml-12 mt-12 mr-12 flex flex-wrap h-screen">
            {blogs.map((element) => (
                <div key={element.id} className="w-1/3 p-4" style={{ height: "69%" }}>
                    <div className="bg-gray-300 rounded border border-sm flex flex-col h-full">
                        
                        {element.imageUrl && (
                            <div className="image-container pt-2 pr-1 pl-1" style={{height:"50%"}}  >
                                <Image className="rounded-t-md max-h-56"
                                    src={element.imageUrl}
                                    alt={`Image for ${element.title}`}
                                    layout="responsive"
                                    width={300}
                                    height={50} // Set the image height to 50% of the card's height
                                />
                            </div>
                        )}
                        <h2 className="text-lg font-bold pl-2 pr-2 pt-3 text-center">{element.title}</h2>
                        <p className="pl-2 pr-2 pt-3 pb-2 text-center overflow-hidden text-ellipsis max-h-32" >{element.description}</p>
                        <div className="flex flex-row pl-3 pt-2 text-center">
                            <p className="text-gray-500"> {element.date} |</p>
                             <a href={`/blogcms/${element.id}`} className="text-red">&nbsp;read more...</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blogcms;
