import Hero from '@/components/shared/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, Gamepad2, Code2, BarChart3, FileText, GraduationCap, Star } from 'lucide-react';
import { siteContent } from '@/data/content';
import Link from 'next/link';

const iconMap = {
  BookOpen,
  Gamepad2,
  Code2,
  BarChart3,
  FileText,
  GraduationCap
};

export default function Marketing() {
  const { marketing } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <Hero 
        headline={marketing.hero.headline}
        subheadline={marketing.hero.subheadline}
        primaryCTA={marketing.hero.primaryCTA}
        secondaryCTA={marketing.hero.secondaryCTA}
        heroImage={marketing.hero.heroImage}
        badge="🎓 For Educators"
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources designed to enhance computer science education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketing.features.map((feature) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={feature.id} className="border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses for Classrooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Courses specifically designed for classroom environments with lesson plans and teaching resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.courses.slice(0, 3).map((course) => (
              <Card key={course.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-20">
                      <Code2 />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white text-blue-600">
                    {course.courseCount} Lessons
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between pb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {course.level}
                    </Badge>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <Link href={`/course/${course.slug}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Course
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from educators and students who have transformed their classrooms with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketing.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-gray-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {marketing.finalCTA.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {marketing.finalCTA.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              {marketing.finalCTA.freeOption}
            </Button>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3">
                {marketing.finalCTA.premiumOption}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}