import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA?: string;
  heroImage: string;
  badge?: string;
}

export default function Hero({ 
  headline, 
  subheadline, 
  primaryCTA, 
  secondaryCTA, 
  heroImage,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        
        {/* Medium circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-2xl"></div>
        
        {/* Small circle - top left */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl"></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/60 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400/60 rounded-full"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-blue-300/40 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-300/40 rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* {primaryCTA} */}
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Main laptop container with floating effect */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl scale-110"></div>
              
              {/* Laptop image container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <img 
                    src="/coding-isometric-01.png"
                    alt="Coding on laptop illustration"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Screen glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-400/10 rounded-xl"></div>
                </div>
                
                {/* Floating UI elements around laptop */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-xs font-medium text-gray-600">Online</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">JS</span>
                    </div>
                    <div className="text-xs font-medium text-gray-600">JavaScript</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-6 bg-white rounded-lg shadow-lg p-2 border border-gray-100">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-400 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute -top-8 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-200/60 to-orange-200/60 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 right-1/4 w-12 h-12 bg-gradient-to-br from-green-200/60 to-teal-200/60 rounded-full blur-sm animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}