"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

function Provider({children}:any) {
    const [userDetail, setUserDetail] = useState()
  const { isSignedIn } = useUser();

  useEffect(()=>{
    if(isSignedIn){
      CreateNewUser();
    }
  }, [isSignedIn]);

  const CreateNewUser=async()=>{
    try{
      const result=await axios.post('/api/user',{}, { withCredentials: true });
      console.log('create user result', result.data);
    }catch(err:any){
      console.log('create user error', err?.response?.data ?? err.message);
    }
  }
  return (
    <div>{children}</div>
  )
}

export default Provider
