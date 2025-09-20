import {ArrowRight, Mail} from 'lucide-react'
const Contact = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%]" id="contact">
       <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>Contact Me</h1>
         <div className='w-[50%] mx-auto'>
            <div className="text-[#3b82f6] font-poppins font-semibold text-lg mt-4">Get in Touch</div>

            <div className='grid grid-cols-2 mt-4 gap-x-2'>
              <div className='flex flex-col gap-4'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" id="name" className='bg-slate-950 px-3 py-2 rounded' />
              </div>

              <div className='flex flex-col gap-4'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" id="email" className='bg-slate-950 px-3 py-2 rounded' />
              </div>

              <div className='col-span-2 flex flex-col gap-4 mt-4'>
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Your message" id="message" rows={4} className='bg-slate-950 px-3 py-2 rounded-xl resize-none '></textarea>
              </div>

              <button className='flex gap-2 items-center col-span-2 justify-center cursor-pointer mt-4 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all duration-300 py-2 px-4 rounded'>Send Mail <ArrowRight /></button>
            </div>
            <a href="mailto:rishabsiingh@outlook.com" className='flex gap-3 mt-4 bg-slate-800 text-sm p-2 rounded items-center'><Mail size={20} /> Email : rishabsiingh@outlook.com</a>
         </div>
    </div>
  )
}

export default Contact