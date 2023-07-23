import React from 'react'
import homeicon from "./images/homeicon.svg"
import mailicon from "./images/mailicon.svg"
import Image from 'next/image'

const Footer = (props) => {
    return (
        <>
            <div className=" font-avnext text-[#00005C] font-bold text-3xl mt-[2rem]" >Contact Us</div>

            <div className="flex flex-row justify-evenly  mb-[4rem]">
                <div className='w-[50%] p-4 bg-[#D81F1F] text-white h-auto shadow-lg rounded'>
                   {props.content}
                </div>
                <div className='w-[50%] bg-white ml-8 h-auto shadow-lg rounded'>

                    <div className="ml-6 font-avnext text-[#00005C] font-bold text-3xl mt-[1rem]" >Champlook</div>
                    <div className='flex justify-start'>
                        <Image src={mailicon}
                            height={13.333}
                            width={16.667}
                            alt="mailicon"
                            className="inline ml-6 "
                        >
                        </Image>
                        <div className='text-[#3770FF]  ml-8 '>support@champlook.com</div>
                    </div>


                    <div className='flex justify-start'>
                    <Image src={homeicon}
                        height={13.333}
                        width={16.667}
                        alt="homeicon"
                        className="inline ml-6"
                    >
                    </Image>
                    <div className='ml-8 text-black mb-[2rem]'>35-3-87A, Devudu Cheruvu, Ongole, Prakasam, Andhra Pradesh,India - 523001</div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer