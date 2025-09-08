import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Users,
  BookOpen,
  Star,
  Play,
  CheckCircle,
  Award,
  Globe,
  Code2,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { notFound } from "next/navigation";

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return siteContent.courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = siteContent.courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  // Sample curriculum data for UX Design course
  const sampleChapters = [
    {
      id: "1",
      title: "An Introduction to the Basics",
      duration: "45min",
      lessons: [
        {
          id: "1",
          title: "What is UX Design?",
          duration: "12min",
          completed: true,
        },
        {
          id: "2",
          title: "Design Thinking Process",
          duration: "15min",
          completed: true,
        },
        {
          id: "3",
          title: "User Research Fundamentals",
          duration: "18min",
          completed: false,
        },
      ],
    },
    {
      id: "2",
      title: "Information Architecture",
      duration: "1hr 10min",
      lessons: [
        {
          id: "1",
          title: "Site Maps and User Flows",
          duration: "22min",
          completed: false,
        },
        {
          id: "2",
          title: "Content Strategy",
          duration: "28min",
          completed: false,
        },
        {
          id: "3",
          title: "Navigation Design",
          duration: "20min",
          completed: false,
        },
      ],
    },
    {
      id: "3",
      title: "Responsive Design",
      duration: "2hrs 27min",
      lessons: [
        {
          id: "1",
          title: "Mobile-First Approach",
          duration: "35min",
          completed: false,
        },
        { id: "2", title: "Grid Systems", duration: "42min", completed: false },
        {
          id: "3",
          title: "Breakpoints and Media Queries",
          duration: "38min",
          completed: false,
        },
        {
          id: "4",
          title: "Touch Interfaces",
          duration: "32min",
          completed: false,
        },
      ],
    },
    {
      id: "4",
      title: "Interaction and Motion",
      duration: "2hrs 1min",
      lessons: [
        {
          id: "1",
          title: "Micro-interactions",
          duration: "28min",
          completed: false,
        },
        {
          id: "2",
          title: "Animation Principles",
          duration: "31min",
          completed: false,
        },
        {
          id: "3",
          title: "Prototyping Tools",
          duration: "35min",
          completed: false,
        },
        { id: "4", title: "User Testing", duration: "27min", completed: false },
      ],
    },
    {
      id: "5",
      title: "Designing for Machine Learning",
      duration: "1hr 35min",
      lessons: [
        {
          id: "1",
          title: "AI/ML Design Patterns",
          duration: "25min",
          completed: false,
        },
        {
          id: "2",
          title: "Data Visualization",
          duration: "30min",
          completed: false,
        },
        {
          id: "3",
          title: "Ethical Design Considerations",
          duration: "23min",
          completed: false,
        },
        { id: "4", title: "Future of UX", duration: "17min", completed: false },
      ],
    },
  ];

  const totalLessons = sampleChapters.reduce(
    (total, chapter) => total + chapter.lessons.length,
    0
  );
  const completedLessons = sampleChapters.reduce(
    (total, chapter) =>
      total + chapter.lessons.filter((lesson) => lesson.completed).length,
    0
  );
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <>
      {/* Course Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
                  {course.level}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-300 text-purple-700"
                >
                  {course.courseCount} Lessons
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {course.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  2,847 students
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.9 (234 reviews)
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Start Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  Preview Course
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Button
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-blue-600"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">
                        Course Progress
                      </span>
                      <span className="text-sm text-gray-600">
                        {completedLessons}/{totalLessons} lessons
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {Math.round(progressPercentage)}% Complete
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Curriculum */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Course Curriculum
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {sampleChapters.map((chapter) => (
                    <AccordionItem
                      key={chapter.id}
                      value={chapter.id}
                      className="border border-gray-200 rounded-lg"
                    >
                      <AccordionTrigger className="px-6 hover:no-underline">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-4">
                            <h3 className="font-semibold text-gray-900 text-left">
                              {chapter.title}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{chapter.lessons.length} lessons</span>
                            <span>{chapter.duration}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="space-y-3">
                          {chapter.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                {lesson.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                )}
                                <span className="font-medium text-gray-900">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  {lesson.duration}
                                </span>
                                <Play className="h-4 w-4 text-blue-600" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Master fundamental UX design principles",
                    "Create user personas and journey maps",
                    "Design wireframes and prototypes",
                    "Conduct user research and testing",
                    "Build responsive and accessible interfaces",
                    "Use industry-standard design tools",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Course Requirements
                </h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">
                        Reliable internet connection
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Code2 className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">
                        Basic computer skills
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">
                        No prior design experience required
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor */}
              {course.instructor && (
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Your Instructor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={course.instructor.image}
                          alt={course.instructor.name}
                        />
                        <AvatarFallback>
                          {course.instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {course.instructor.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed mt-2">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.instructor.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Course Stats */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Course Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students Enrolled</span>
                    <span className="font-semibold text-gray-900">2,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Course Length</span>
                    <span className="font-semibold text-gray-900">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Skill Level</span>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">Yes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                    Get Full Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                  {course.price && (
                    <div className="text-3xl font-bold text-gray-900">
                      ${course.price}
                      <span className="text-base font-normal text-gray-500 block">
                        one-time payment
                      </span>
                    </div>
                  )}
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Enroll Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      7-Day Free Trial
                    </Button>
                  </div>
                  <div className="text-xs text-gray-600">
                    30-day money-back guarantee
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
