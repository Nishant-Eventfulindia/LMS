import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { siteContent } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="font-bold text-xl">{siteContent.global.siteName}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of developers through interactive, hands-on coding education. 
              Start your coding journey today and build the future.
            </p>
            <div className="flex space-x-4">
              <Link href={siteContent.global.social.facebook} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={siteContent.global.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={siteContent.global.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={siteContent.global.social.instagram} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteContent.navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300 font-medium">Email:</p>
                <p className="text-gray-400">{siteContent.global.contact.email}</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Phone:</p>
                <p className="text-gray-400">{siteContent.global.contact.phone}</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Headquarters:</p>
                <p className="text-gray-400">{siteContent.global.contact.addresses.headquarters}</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest courses, tutorials, and coding tips.
            </p>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <form className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 {siteContent.global.siteName}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}