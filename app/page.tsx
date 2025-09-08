import Hero from "@/components/shared/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Zap,
  Code,
  Globe,
  Smartphone,
  Database,
  Palette,
  Gamepad2,
} from "lucide-react";
import { siteContent } from "@/data/content";
import Link from "next/link";

export default function Home() {
  const { home } = siteContent;

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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-gray-600 font-medium">Active Students</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600 font-medium">Expert Courses</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-all duration-300 group-hover:scale-110">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
              <span className="text-sm font-medium text-blue-600">
                ✨ Premium Learning Experience
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              {home.coursesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {home.coursesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Web Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Master modern web technologies and build stunning, responsive
                  websites that stand out in today's digital landscape.
                </p>
                <div className="mt-6 flex items-center text-sm text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* JavaScript */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/25 group-hover:shadow-yellow-500/40 transition-all duration-300 group-hover:scale-110">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  JavaScript
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dive deep into the world's most popular programming language
                  and unlock the power of dynamic web applications.
                </p>
                <div className="mt-6 flex items-center text-sm text-yellow-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Python */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-white">Py</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Python
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From data science to web development, Python's versatility
                  makes it the perfect language for modern developers.
                </p>
                <div className="mt-6 flex items-center text-sm text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* UX Design */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  UX Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create intuitive, beautiful user experiences that delight
                  users and drive business success through thoughtful design.
                </p>
                <div className="mt-6 flex items-center text-sm text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Database Design */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  Database Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Master the art of data architecture and build robust, scalable
                  databases that power modern applications.
                </p>
                <div className="mt-6 flex items-center text-sm text-cyan-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Apps & Games */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-all duration-300 group-hover:scale-110">
                  <Gamepad2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  Apps & Games
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build engaging mobile applications and interactive games that
                  captivate users and showcase your creativity.
                </p>
                <div className="mt-6 flex items-center text-sm text-pink-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* HTML & CSS */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-white">H5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  HTML & CSS
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn the fundamental building blocks of web development and
                  create beautiful, responsive layouts from scratch.
                </p>
                <div className="mt-6 flex items-center text-sm text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Intro to Coding */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-white">{"{ }"}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  Intro to Coding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Perfect for beginners - start your coding journey with
                  confidence and build a solid foundation for future learning.
                </p>
                <div className="mt-6 flex items-center text-sm text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                VIEW ALL COURSES
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-sm font-medium text-white/90">
                🎯 Simple Learning Path
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {home.learningProcess.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {home.learningProcess.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Floating Decorative Elements */}
            <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-32">
              <div className="w-56 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-2xl transform rotate-12 backdrop-blur-sm border border-white/20"></div>
            </div>
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-32">
              <div className="w-56 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-2xl transform -rotate-12 backdrop-blur-sm border border-white/20"></div>
            </div>

            {/* Main Content Container */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {home.learningProcess.steps.map((step, index) => (
                  <div key={step.step} className="relative group">
                    <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:bg-white group-hover:scale-105">
                      <div className="p-8 text-center relative overflow-hidden">
                        {/* Card Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                            {step.step}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>

                    {/* Connection Arrow */}
                    {index < home.learningProcess.steps.length - 1 && (
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-100 group-hover:border-blue-200 transition-all duration-300">
                          <ArrowRight className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
              <span className="text-sm font-medium text-blue-600">
                💎 Choose Your Path
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting out or ready to go premium, we have
              the perfect plan for your learning goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">🆓</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {home.pricingPreview.freeSection.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {home.pricingPreview.freeSection.description}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 px-8 py-4 text-lg font-semibold"
                >
                  {home.pricingPreview.freeSection.cta}
                </Button>
              </div>
            </Card>

            {/* Premium Plan */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-12 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">👑</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {home.pricingPreview.premiumSection.title}
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  {home.pricingPreview.premiumSection.description}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold"
                >
                  {home.pricingPreview.premiumSection.cta}
                </Button>
              </div>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  No Credit Card Required
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cancel Anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
