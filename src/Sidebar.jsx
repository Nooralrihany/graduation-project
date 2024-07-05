import React from 'react'
import home from './assets/home.png'

export const Sidebar = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <img src="src/assets/home.png" alt="home" />
          <div className="max-w-2xl p-8 bg-blue shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
            <p className="text-gray-600">تطبيق يساعدك في الحصول على مكان لركن سيارتك ب أمان</p>
          </div>
        </div>
      );
  
}
