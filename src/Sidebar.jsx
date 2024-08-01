import React from 'react';
import Cards from './components/Cards';
import logo222 from './assets/logo222.png'

export const Sidebar = () => {
  return (
    <div>
      <div className=' relative'>
        <img src="src/assets/logo222.png" alt="" />
        {/* <img src="src/assets/homephoto.jpg" alt="home" className=' bg-center w-full' /> */}


        <div className='border-2  absolute top-1/2 bg-white  max-w-xl rounded-lg '>
          {/* <img src="src/assets/homephoto.jpg" alt="home" className='bg-cover	' /> */}
          <div className="max-w-2xl p-8 bg-blue shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Welcome to our community</h1>
            <h4 className="text-xl mb-2">Park your car with us !</h4>
            <p className="text-gray-600">تطبيق يساعدك في الحصول على مكان لركن سيارتك ب أمان</p>
          </div>
        </div>

      </div>
      <Cards />
      <div className='w-full'>

        <iframe   width="600"
    height="450"
    style={{
      border: 0,
      width: '100%'
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26697.155773990355!2d44.52794414132543!3d33.236518343525645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f007b249a27%3A0x193b85dc49e11c62!2sAL%20QALAB%20FOR%20GENERAL%20CONSTRUCTION%20COMPANY!5e0!3m2!1sen!2siq!4v1721250636295!5m2!1sen!2siq"  ></iframe>
      </div>


    </div>


  );

}
