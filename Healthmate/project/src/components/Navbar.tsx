import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-lg shadow-md">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-gray-900">HealthMate</span>
            <span className="hidden sm:inline text-sm text-emerald-600 font-medium ml-2">
              Sehat ka Smart Dost
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Use Cases
            </a>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
              Login
            </button><button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
              signin
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium">
                How It Works
              </a>
              <a href="#use-cases" className="text-gray-700 hover:text-emerald-600 font-medium">
                Use Cases
              </a>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
