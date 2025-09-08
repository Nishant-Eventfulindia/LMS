import Hero from '@/components/shared/Hero';
import CourseCard from '@/components/shared/CourseCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { siteContent } from '@/data/content';
import Link from 'next/link';

export default function Home() {
  const { home, courses } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <Hero 
        headline={home.hero.headline}
        subheadline={home.hero.subheadline}
        primaryCTA={home.hero.primaryCTA}
        secondaryCTA={home.hero.secondaryCTA}
        heroImage={home.hero.heroImage}
        badge="🚀 New: AI-Powered Learning Assistant"
      />

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {home.coursesSection.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {home.coursesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                showDescription={false}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
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
          
          {/* Additional floating elements for variety */}
          <div className="absolute top-1/4 left-1/2 w-20 h-20 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-lg"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {home.learningProcess.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {home.learningProcess.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {home.learningProcess.steps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full hover:bg-white/90 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
                {index < home.learningProcess.steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Free Courses */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors flex flex-col">
              <CardHeader className="text-center pb-8">
                <Badge variant="secondary" className="self-center bg-green-100 text-green-700 mb-4">
                  Free Forever
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {home.pricingPreview.freeSection.title}
                </CardTitle>
                <p className="text-gray-600">
                  {home.pricingPreview.freeSection.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Access to 5 free courses</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Basic project templates</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Community forum access</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  {home.pricingPreview.freeSection.cta}
                </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Courses */}
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50 hover:border-blue-400 transition-colors relative flex flex-col">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {home.pricingPreview.premiumSection.title}
                </CardTitle>
                <p className="text-gray-600">
                  {home.pricingPreview.premiumSection.description}
                </p>
                <div className="text-3xl font-bold text-blue-600 mt-4">
                  $29<span className="text-base font-normal text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Unlimited access to all courses</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>100+ guided projects</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Cloud IDE with premium features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  {home.pricingPreview.premiumSection.cta}
                </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                View All Pricing Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}