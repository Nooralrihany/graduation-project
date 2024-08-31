import React from 'react'

export const UserProfile = () => {
  return (
<div className="min-h-100vh bg-gray-100 p-4">
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center p-4">
        <img
          className="w-32 h-32 md:w-24 md:h-24 rounded-full border-2 border-gray-300"
          src="userphoto.png"
          alt="User Avatar"
        />
        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Zeyad Ali</h2>
          <p className="text-gray-600">zeyadalrihany@gmail.com</p>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Bio</h3>
        <p className="mt-2 text-gray-600">
         مرحبًا، أنا زياد! أستخدم هذا التطبيق للعثور على أماكن وقوف مريحة وموثوقة في المدينة. أنا مستخدم متكرر وأفضل مواقع وقوف آمنة . دائمًا أبحث عن حلول وقوف سهلة وفعّالة!


        </p>
      </div>
    </div>
  </div>
  )
}
