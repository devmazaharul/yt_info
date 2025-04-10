'use client';
import { Righteous } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const fonrCon = Righteous({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const Header =  () => {
  const pathName = usePathname();

  return (
    <div>
      <div className="flex items-center justify-between w-[90%] mx-auto py-2 ">
        <div className={fonrCon.className}>
          <Link
            href={'/'}
            className={` text-2xl font-semibold text-gray-700 `}
          >
          Getter
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className={`${pathName == '/search' ? 'text-purple-600' : ''}`}
            href={'/search'}
          >
            Search
          </Link>
          <Link
            className={`${pathName == '/chanel_info' ? 'text-purple-600' : ''}`}
            href={'/chanel_info'}
          >
            Chanel
          </Link>
          <Link
            className={`${pathName == '/video_info' ? 'text-purple-600' : ''}`}
            href={'/video_info'}
          >
            Video
          </Link>
          <Link
            className={`${
              pathName == '/playlist_info' ? 'text-purple-600' : ''
            }`}
            href={'/playlist_info'}
          >
            Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
