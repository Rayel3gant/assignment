import React from 'react'

const Container = (props) => {
    const data=props.data;
  return (
    <div className='w-[400px] py-8 rounded-md px-5 flex flex-col gap-y-3 border-2 items-start border-blue-400'>
        <div>Message : {data.message_text} </div>
        <div>Sender : {data.sender_name}</div>
        <div>Date : {data.message_date}</div>
        <div>Platform : {data.platform}</div>
    </div>
  )
}

export default Container