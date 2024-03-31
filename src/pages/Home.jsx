import React, { useEffect, useState } from 'react'
import Container from '../components/Container';

const Home = () => {
    const [data,setData]=useState()

    const getData=async()=>{
        try{
            const tempData=await fetch("http://www.app.readychatai.com/data");
            const myData=await tempData.json()
            setData(myData)
        } catch(error){
            console.log("error in getting data:",data)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='w-full min-h-screen flex flex-wrap place-content-center gap-8 py-8 px-5 bg-gradient-to-r from-indigo-500'>
        {
            data?.map((item)=>{
               return  <Container key={item.id} data={item}/>
            })
        }

    </div>
  )
}

export default Home