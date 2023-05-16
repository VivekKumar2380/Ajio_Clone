import axios from "axios"
import { GETUSERLOGIN, GETUSERLOGINFAIL, GETUSERLOGINSUCCESS, POSTREQFAIL, POSTREQSUCESS, POSTUSERREQ,GETUSERLOGOUT } from "./actiontype"
export const getLoginReq = ({email, password}) =>(dispatch)=> {
     dispatch({type:GETUSERLOGIN})
return  axios.get(`https://outfiter.onrender.com/users?email=${email}&password=${password}`)
    .then((res) => {
        // console.log(res.data[0], "action");
       return  dispatch({type:GETUSERLOGINSUCCESS , payload:res.data[0]})
    })
    .catch(() => dispatch({type:GETUSERLOGINFAIL}))
}



export const postReqUser = (data)=>(dispatch)=> {
    dispatch({type:POSTUSERREQ})
  return  axios.post(`https://outfiter.onrender.com/users`, data)
    .then((res) => dispatch({type:POSTREQSUCESS}))
    .catch(() => dispatch({type:POSTREQFAIL}))
}

export const getLogoutReq = ()=>(dispatch)=> {
    dispatch({type:GETUSERLOGOUT})
}



