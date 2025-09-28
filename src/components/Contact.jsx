'use client'

import {ArrowRight, Mail} from 'lucide-react'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false)
  const [succesfull, setSuccesFull] = useState(false)
  const [display, setDisplay] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsSending(true)
    try {
      const sendReq = await fetch('/api/email', {
      method: 'POST',
      headers: {"Content-Type" : "application/json; charset=UTF-8"},
      body: JSON.stringify(formData)
    })

    const response = await sendReq.json()
    if (sendReq.status === 201) {
      setFormData({
      name: '',
      email: '',
      message: ''  
    })
    setDisplay(true)
    setSuccesFull(true) 
    console.log(sendReq, response)
    } else {
      throw new Error('Something went wrong')
    }

    } catch (error) {
      setDisplay(true)
      setSuccesFull(false)
      console.log(error.message)
    } finally {
      setIsSending(false)
      setTimeout(() => {
        setDisplay(false)
      }, 9000)
    }

  }

  return (
    <div className="mx-auto my-10 lg:w-[65%]" id="contact">
       <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>Contact Me</h1>
         <div className='lg:w-[50%] mx-auto md:px-0 px-4'>
            <div className="text-[#3b82f6] font-poppins font-semibold text-lg mt-4">Get in Touch</div>
            <form>
            <div className='grid grid-cols-2 mt-4 gap-x-2'>
              <div className='flex flex-col gap-4'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" id="name" 
                className='bg-slate-950 px-3 py-2 rounded hover:ring-1 hover:ring-blue-500 transition-all duration-300 ease-in-out'
                value={formData.name}
                onChange={(e) => {
                  setFormData((previous) => {
                    return {...previous, name : e.target.value}
                  })
                }}
                />
              </div>

              <div className='flex flex-col gap-4'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" id="email" className='bg-slate-950 px-3 py-2 rounded hover:ring-1 hover:ring-blue-500 transition-all duration-300 ease-in-out'
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => {
                    return {...prev, email: e.target.value}
                  })
                }}
                />
              </div>

              <div className='col-span-2 flex flex-col gap-4 mt-4'>
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Your message" id="message" rows={4} className='bg-slate-950 px-3 py-2 rounded-xl resize-none hover:ring-1 hover:ring-blue-500 transition-all duration-300 ease-in-out2'
                value={formData.message}
                onChange={(e) => {
                  setFormData((prev) => {
                    return {...prev, message: e.target.value}
                  })
                }}
                ></textarea>
              </div>

              <button className='flex gap-2 items-center col-span-2 justify-center cursor-pointer mt-4 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all duration-300 py-2 px-4 rounded'
              onClick={handleSubmit}
              type='submit'
              disabled = {isSending}
              > {isSending ? 'Sending...' : <>Send Mail <ArrowRight /></>}</button>
            </div>
            </form>
            <div className={`display-message mt-4 bg-slate-800 text-sm p-2 rounded items-center ${succesfull === true ? 'text-green-500' : 'text-red-500'} ${display === true ? 'block' : 'hidden'}`}>{succesfull === true ? '✅Message Send Successfully, thanks for connecting, will reply asap' : '⚠️Something Went Wrong, Message Sending Unsuccessful , you can try again or send mail manually from the link below'}</div>
            <a href="mailto:rishabsiingh@outlook.com" className='flex gap-3 mt-4 bg-slate-800 text-sm p-2 rounded items-center'><Mail size={20} /> Email : rishabsiingh@outlook.com</a>
         </div>
    </div>
  )
}

export default Contact