import React from 'react';
import Cards from './components/Cards';

// Define coordinates for Aladhamyia and the Start Point
const Aladhamyia1 = [33.3695687449225, 44.36174133497602];
const StartPoint = [33.30123868162587, 44.4371813193429];

// Google Maps Embed URL with markers for both locations
const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10411.93194604092!2d${(Aladhamyia1[1] + StartPoint[1]) / 2}!3d${(Aladhamyia1[0] + StartPoint[0]) / 2}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f007b249a27%3A0x193b85dc49e11c62!2sAL%20QALAB%20FOR%20GENERAL%20CONSTRUCTION%20COMPANY!5e0!3m2!1sen!2siq!4v1721250636295!5m2!1sen!2siq&markers=color:red%7C${StartPoint[0]},${StartPoint[1]}&markers=color:blue%7C${Aladhamyia1[0]},${Aladhamyia1[1]}`;

// Sidebar component
export const Sidebar = () => {
  return (
    <div>
      <div className='relative'>
        <img src="src/assets/logo222.png" alt="" />
        <div className='border-2 absolute top-1/2 bg-white max-w-xl rounded-lg'>
          <div className="max-w-2xl p-8 bg-blue shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Welcome to our community</h1>
            <h4 className="text-xl mb-2">Park your car with us!</h4>
            <p className="text-gray-600">تطبيق يساعدك في الحصول على مكان لركن سيارتك ب أمان</p>
          </div>
        </div>
      </div>
      <Cards />
      <div className='w-full'>
        <iframe
          width="600"
          height="450"
          style={{ border: 0, width: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        ></iframe>
      </div>
    </div>
  );
};

export default Sidebar;
