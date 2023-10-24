// pages/blog.js
'use client';
import { Navbar } from '../Components/Home/Navbar';
import banner from '../Components/Home/images/banner.jpg';

import Image from 'next/image';


import React from 'react';

const Blog = () => {
    return (
        <div className="mt-20 blog-container">
            <header className="blog-header">
                {/* <h1>Blog Title</h1> */}
                <Navbar title="Blog Page" />

            </header>
            <div className="flex justify-center mx-24 align-middle blog-content bg-slate-500">
                <Image
                    src={banner}
                    alt="Blog Image"
                    className="blog-image justify-between align-middle h-[70vh] w-[45vw] bg-slate-300  block"
                />
            </div>
            <div className="mx-24 font-serif text-black blog-text bg-slate-300 border-lime-950">
                <h1 className='text-2xl text-red bold'>The Heading of the Blog is ------ .....</h1>
                <p className='px-16 border-4 border-blue-100'>Text content of your blog goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt eos aperiam voluptatum libero quidem voluptatibus! Aut nobis sed maiores, rerum veritatis inventore id porro. Soluta maiores quis itaque delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic laborum, dicta reiciendis distinctio quibusdam in tenetur porro sed, animi iusto tempora maiores aut nostrum fuga id, placeat pariatur perferendis facilis.
                    Dicta, id. Pariatur cum iste nesciunt voluptatibus, quasi a in laboriosam quod assumenda maiores ipsum repudiandae cumque minus consequatur facere recusandae tempora velit? Officiis blanditiis asperiores, accusantium itaque aspernatur deleniti.</p>
                <div className="author-info">
                    <p>Author :  BragTech</p>
                    <p>Date: October 24, 2023</p>
                </div>
            </div>


            <style jsx>{`

      .blog-container {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.blog-header h1 {
  font-size: 24px;
  margin: 0;
}

.blog-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
}

.blog-image {
  max-width: 100%;
  border-radius: 8px;
  margin-right: 20px;
}

.blog-text p {
  font-size: 16px;
  line-height: 1.5;
}

.author-info {
  margin-top: 10px;
}


      `}</style>


        </div>
    );
};

export default Blog;
