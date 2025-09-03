import React, { useState, useEffect } from 'react';

interface HeroText {
  title: string;
  description: string;
  color: string;
}

const RotatingHero: React.FC = () => {
  const heroTexts: HeroText[] = [
    {
      title: "Website Personal",
      description: "Mau buat website personal tapi gatau caranya? Minta sini aja!",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Foto Estetik", 
      description: "Mau foto-foto buat jadi bahan konten estetik? Beli disini aja!",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Kelas Online",
      description: "Mau belajar macam-macam? Beli kelas disini aja!",
      color: "from-green-600 to-blue-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
        setIsVisible(true);
      }, 500); // Half second for fade out, then fade in
      
    }, 20000); // 20 seconds interval

    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const currentText = heroTexts[currentIndex];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 md:p-20 text-center mb-16 relative overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div 
          className={`transition-all duration-500 ease-in-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentText.color}`}>
              {currentText.title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
            {currentText.description}
          </p>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroTexts.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? `bg-gradient-to-r ${currentText.color}` 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingHero;