import { defaultValues } from '@/default/defaultValue';
import { responceHandle } from '@/utils';

export const getInfoYtchanel = async (chanelHandle = 'nenocartoon') => {
  try {
    const makeURl = `https://www.googleapis.com/youtube/v3/channels?key=${process.env.NEXT_PUBLIC_API}&part=id,snippet,statistics&forHandle=${chanelHandle}`;
    const responce = await fetch(makeURl, {
      next: {
        revalidate: defaultValues.revalidateTime, //
      },
    });
    const data = await responce.json();

    if(responce.status==200){
      return responceHandle({
        items: data,
        status: 200,
        message: 'success',
      });
    }else{
      throw new Error()
    }
  } catch (error) {
    return responceHandle({
      message: 'Invalid credentials',
      status: 500,
      items: null,
    });
  }
};

export const getVideoInfo = async (videoID ='') => {
  try {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_API}&part=id,snippet,statistics&id=${videoID}`;
    const res = await fetch(videoUrl, {
      next: {
        revalidate: defaultValues.revalidateTime,
      },
    });
    const data = await res.json();
    if(res.status==200){
      return responceHandle({
        message: 'Success',
        status: 200,
        items: data,
      })
    }else{
      throw new Error()
    }
 
  } catch (error) {
    return responceHandle({
      message: 'faild',
      status: 500,
      items: null,
    });
  }
};

export const searchaVideoonyoutube = async (
  query = 'cartoon',
  max = 20
) => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=${max}&key=${process.env.NEXT_PUBLIC_API2}`;

    const res = await fetch(url, {
      next: {
        revalidate: defaultValues.revalidateTime,
      },
    });
    const data = await res.json();
    if(res.status==200){
      return responceHandle({
        message: 'Success',
        status: 200,
        items: data,
      })
    }else{
      throw new Error()
    }
  } catch (error) {
    return responceHandle({
      message: 'Faild',
      status: 500,
      items: null,
    });
  }
};
