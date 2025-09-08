import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Users, Mountain, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/content';
import Link from 'next/link';

const iconMap = {
  User,
  Users,
  Mountain
};

export default function About() {
  const { about } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {about.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in flexible, accessible education that adapts to different learning styles and environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.learningMethods.map((method) => {
              const IconComponent = iconMap[method.icon as keyof typeof iconMap];
              return (
                <Card key={method.id} className="border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                {about.story.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                {about.story.content}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                  <div className="text-gray-600">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">127</div>
                  <div className="text-gray-600">Courses Created</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Instructors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced educators and industry professionals who create and deliver our courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.team.map((member) => (
              <Card key={member.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about our courses or want to discuss partnership opportunities? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>
                    <span className="block font-medium text-gray-200">Sales:</span>
                    sales@codingwithdivi.com
                  </div>
                  <div>
                    <span className="block font-medium text-gray-200">Support:</span>
                    support@codingwithdivi.com
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <div className="text-sm text-gray-300">
                  <div className="font-medium text-gray-200">
                    {siteContent.global.contact.phone}
                  </div>
                  <div className="text-xs mt-1">
                    Monday - Friday, 9 AM - 6 PM PST
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office */}
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>
                    <span className="block font-medium text-gray-200">HQ:</span>
                    {siteContent.global.contact.addresses.headquarters}
                  </div>
                  <div>
                    <span className="block font-medium text-gray-200">NY Office:</span>
                    {siteContent.global.contact.addresses.newYork}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}