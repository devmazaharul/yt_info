"use client"
import { getInfoYtchanel } from '@/action';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosTrendingUp } from 'react-icons/io';
import { LiaFileVideoSolid } from 'react-icons/lia';
import { MdManageAccounts } from 'react-icons/md';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import { TbSettingsSearch } from 'react-icons/tb';
import toast from 'react-hot-toast';
import { TbMoodEmpty } from "react-icons/tb";

const Dashboard =  () => {
  const [data,setData]=useState(null)
  const [state,setState]=useState("")

  useEffect(()=>{
     const getInfo=async()=>{
     try {
      const responce=await getInfoYtchanel(state==""?"nenocartoon":state);
      console.log(responce);
      if(responce.status==200){
        setData(responce.items)
      }
     } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
     }
     }
     getInfo()
  },[state])







  const items=data?.items && data?.items[0];

  return (
  <div className='backdrop-blur-3xl'>


  <div className='h-[180px]'>
  {!items && <div className="flex items-center justify-center relative top-10  bg-gray-100  ">
      <h1 className='text-red-500 flex items-center gap-1'> No chanel found <TbMoodEmpty/></h1>
      </div>}

    {items &&   <div className="flex  items-center justify-center relative top-10  bg-gray-100  ">
      <div className={` bg-white p-3 w-[90%]  md:w-[40%] mx-auto rounded-md shadow-3xl border border-gray-200`}>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={items?.snippet?.thumbnails?.default.url}
              width={500}
              height={500}
              className="w-[50px] h-[50px] rounded-full"
              alt="yt img"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1>{items?.snippet?.title} </h1>
              <Link
                target="_blank"
                href={`https://www.youtube.com/${items?.snippet?.customUrl}`}
              >
                <small className="text-gray-500 flex items-center">
                  {items?.snippet?.customUrl} <GoArrowUpRight />
                </small>
              </Link>
            </div>
            <small>
              {items?.snippet?.description.length > 60
                ? items?.snippet.description.slice(0, 60) + ' ...'
                : items?.snippet?.description}
            </small>
          </div>
        </div>

        <div className="py-2 px-4">
          <div className="leading-8">
            <p className="flex items-center gap-2">
              <IoIosTrendingUp />
              {items?.statistics?.viewCount} views
            </p>
            <p className="flex items-center gap-2">
              {' '}
              <IoInformationCircleOutline /> Joined,
              {new Date(items?.snippet?.publishedAt).toLocaleDateString()}
            </p>
            <p className="flex items-center gap-2">
              {' '}
              <MdManageAccounts /> {items?.statistics?.subscriberCount} subscribers
            </p>
            <p className="flex items-center gap-2">
              {' '}
              <LiaFileVideoSolid /> {items?.statistics?.videoCount} videos
            </p>
          </div>
        </div>
      </div>
    </div>}
  </div>

    <form  className='md:w-[40%] mx-auto w-[90%] relative top-30'>
      <div tabIndex={0} className='w-full flex items-center gap-2 rounded-md shadow-2xl border border-white focus:shadow-4xl hover:scale-105 bg-white  px-3 duration-300 ease-in-out'>
        <TbSettingsSearch className={`${state?"animate-spin":""}`}/>
        <input  type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder='youtube chanel Handle' className='py-2 px-1 outline-none  w-full lowercase ' />
      </div>
    </form>
  </div>
  );
};

export default Dashboard;
