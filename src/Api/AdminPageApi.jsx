import axios from "axios"

export const getuserData = ()=> {
  return  axios.get("https://outfiter.onrender.com/users")
    
}
export const getmensData = ()=> {
    return  axios.get("https://outfiter.onrender.com/mens")
      
  }
  export const getWomensData = ()=> {
    return  axios.get("https://outfiter.onrender.com/women")
      
  }
  export const getData = (e)=> {
    return  axios.get(`https://outfiter.onrender.com/${e}`)
      
  }