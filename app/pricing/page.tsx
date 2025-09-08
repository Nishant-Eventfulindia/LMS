import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, X, BookOpen, Video, Zap, Calendar, Smartphone, Users } from 'lucide-react';
import { siteContent } from '@/data/content';

const iconMap = {
  BookOpen,
  Video,
  Zap,
  Calendar,
  Smartphone,
  Users
};

export default function Pricing() {
  const { pricing, faqs } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {pricing.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {pricing.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`border-2 hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className={`text-center ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    {plan.price === 0 ? (
                      <div className="text-4xl font-bold text-green-600">
                        FREE
                        {plan.trialDays && (
                          <div className="text-sm font-normal text-gray-500 mt-1">
                            {plan.trialDays} day trial
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">
                        ${plan.price}
                        <span className="text-base font-normal text-gray-500 ml-1">
                          /{plan.duration}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className={`h-4 w-4 mt-0.5 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-blue-500' : 'text-green-500'
                        }`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                        : plan.price === 0
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    size="lg"
                  >
                    {plan.price === 0 ? 'Start Free Trial' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Get with Premium
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of your coding education with our comprehensive feature set
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <Card key={benefit.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our courses and pricing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}