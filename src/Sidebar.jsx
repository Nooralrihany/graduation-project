import React from 'react';
import homephoto from "../src/assets/homephoto.jpg"


export const Sidebar = () => {
    return (
      <div>
        <img src="src/assets/homephoto.jpg" alt="home" className=' bg-center' />
        <div className="bg-gray-100 min-h-screen px-8 py-16" >
          
          <div className='border-2 border-red-400 max-w-xl rounded-lg'>
           {/* <img src="src/assets/homephoto.jpg" alt="home" className='bg-cover	' /> */}
           <div className="max-w-2xl p-8 bg-blue shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Welcome to our community</h1>
            <h4 className="text-xl mb-2">Park your car with us !</h4>
            <p className="text-gray-600">تطبيق يساعدك في الحصول على مكان لركن سيارتك ب أمان</p>
           </div>
          </div>
        </div>
      </div>
        
      );
  
}
