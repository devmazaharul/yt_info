"use client"
import { Pacifico } from "next/font/google";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const fonrCon=Pacifico({
  weight:"400",
  style:"normal",
  subsets:["vietnamese"]
})

const Header =async () => {
  const pathName=usePathname()

  return (
    <div>
      <div className='flex items-center justify-between w-[90%] mx-auto py-2 '>
      <div className={fonrCon.className}>
        <Link href={"/"} className={` text-2xl font-semibold text-purple-500 `}>Finder</Link>
      </div>
      <div className='flex items-center gap-4'>
        <Link className={`${pathName=="/chanel_info"?'text-purple-600':""}`} href={"/chanel_info"}>Chanel</Link>
        <Link className={`${pathName=="/video_info"?'text-purple-600':""}`} href={"/video_info"}>Video</Link>
        <Link className={`${pathName=="/playlist_info"?'text-purple-600':""}`} href={"/playlist_info"}>Playlist</Link>
      </div>
    </div>
    </div>
  );
}

export default Header;
