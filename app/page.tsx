import Hero from "@/components/shared/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <code className="text-2xl text-blue-600">&lt;/&gt;</code>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* JavaScript */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-yellow-600">JS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* Python */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-green-600">Py</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Python</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* HTML & CSS */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-red-600">H5</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">HTML & CSS</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* UX Design */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-purple-600">UX</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">UX Design</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* Intro to Coding */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-indigo-600">{"{ }"}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Intro to Coding</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* Database Design */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-600">DB</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>

            {/* Apps & Games */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-pink-600">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Apps & Games</h3>
                <p className="text-gray-600 text-sm">
                  Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et
                  leo eget, viverra pretium nulla.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                VIEW ALL COURSES
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {home.learningProcess.title}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {home.learningProcess.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Floating Images */}
            <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-24">
              <div className="w-48 h-64 bg-white rounded-lg shadow-xl transform rotate-6"></div>
            </div>
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24">
              <div className="w-48 h-64 bg-white rounded-lg shadow-xl transform -rotate-6"></div>
            </div>

            {/* Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {home.learningProcess.steps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-xl hover:bg-white transition-all duration-300">
                      <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
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
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex-1 text-center py-12 px-8">
              <h3 className="text-2xl font-bold mb-4">
                {home.pricingPreview.freeSection.title}
              </h3>
              <p className="text-gray-600 mb-8">
                {home.pricingPreview.freeSection.description}
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
              >
                {home.pricingPreview.freeSection.cta}
              </Button>
            </div>

            <div className="flex-1 text-center py-12 px-8">
              <h3 className="text-2xl font-bold mb-4">
                {home.pricingPreview.premiumSection.title}
              </h3>
              <p className="text-gray-600 mb-8">
                {home.pricingPreview.premiumSection.description}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                {home.pricingPreview.premiumSection.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
