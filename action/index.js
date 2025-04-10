export const apiKey="AIzaSyDD6XUvNdRCV8LensbgEwxMw2zI5UHDSyA"

export const getInfoYtchanel=async(chanelHandle="nenocartoon")=>{
  try {
    const makeURl=`https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=id,snippet,statistics&forHandle=${chanelHandle}`
    const responce=await fetch(makeURl,{
      next:{
        revalidate:5000//
      }
    })
    const data=await responce.json();

     return responceHandle({
      items:data,
      status:200,
      message:"success"
     })
    
  } catch (error) {
    return responceHandle({
      message:"Invalid credentials",
      status:500,
      items:null
    })
  }
}


export const responceHandle=({message="Error",status=400,items})=>{
  return {
    message,
    status,
    items
  }
}