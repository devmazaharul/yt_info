'use client';

import { searchaVideoonyoutube } from '@/action';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import { TbSettingsSearch } from 'react-icons/tb';

const Page = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState();
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    const getResult = async () => {
      try {
        const responce = await searchaVideoonyoutube(query!==""?query:"cartoon");
        if (responce.status == 200) {
     
          setData(responce.items);
        }
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    getResult();
  }, [query]);

  return (
    <div>
      <form className="md:w-[40%] mx-auto w-[90%] my-8 ">
        <div
          tabIndex={0}
          className="w-full flex items-center gap-2 rounded-md shadow-2xl border border-white focus:shadow-4xl hover:scale-105 bg-white  px-3 duration-300 ease-in-out"
        >
          <TbSettingsSearch className={`${loading ? 'animate-spin' : ''}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your video"
            className="py-2 px-1 outline-none  w-full lowercase "
          />
        </div>
      </form>

      {!data && <p className='text-center text-red-400 py-2'>No video found or wait few moments</p>}

      {data && (
        <div>
          {data?.items.map((item) => (
            <div key={Math.random()} className="leading-8  bg-white m-2">
              <div className="flex items-center gap-3  ">
                <div className="w-[400px] h-[200px]">
                  <iframe
                    className="w-full h-full"
                    title="YouTube video player"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    src={`https://www.youtube.com/embed/${item?.id?.videoId}?autoplay=0&rel=0&start=60`}
                  ></iframe>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    {item?.snippet?.title}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <p className="flex items-center gap-1">
                      {item?.snippet?.channelTitle}{' '}
                      <MdVerified className="text-blue-500" />
                    </p>
                    <small>
                      {new Date(
                        item?.snippet?.publishTime
                      ).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="py-2">
                    <p>{item?.snippet?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
