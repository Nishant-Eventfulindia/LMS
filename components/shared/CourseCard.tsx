import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen, Code, Globe, Palette, Database, Braces, FileCode, Play, Smartphone, Gamepad2 } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
  showPrice?: boolean;
  showDescription?: boolean;
}

const iconMap = {
  Globe,
  Code, 
  Palette,
  Database,
  Braces,
  FileCode,
  Play,
  Smartphone,
  BookOpen,
  Users,
  Gamepad2
};

export default function CourseCard({ course, showPrice = false, showDescription = true }: CourseCardProps) {
  const IconComponent = iconMap[course.icon as keyof typeof iconMap] || BookOpen;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300 h-full overflow-hidden">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
              <IconComponent className="h-6 w-6 text-blue-600" />
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {course.title}
              </CardTitle>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-gray-500 flex items-center">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {course.courseCount} Courses
                </span>
                {course.duration && (
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </span>
                )}
              </div>
            </div>
          </div>
          {course.level && (
            <div className="flex-shrink-0">
            <Badge 
              variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}
              className="text-xs whitespace-nowrap max-w-[80px] truncate"
            >
              {course.level}
            </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      {(showDescription || showPrice) && (
        <CardContent className="space-y-4">
          {showDescription && (
            <CardDescription className="text-gray-600 leading-relaxed">
              {course.description}
            </CardDescription>
          )}
          
          <div className="flex items-center justify-between">
            {showPrice && course.price && (
              <div className="text-2xl font-bold text-gray-900">
                ${course.price}
                <span className="text-sm font-normal text-gray-500 ml-1">one-time</span>
              </div>
            )}
            
            <Link href={`/course/${course.slug}`} className={showPrice ? '' : 'w-full'}>
              <Button 
                className={`bg-blue-600 hover:bg-blue-700 text-white ${showPrice ? '' : 'w-full'}`}
                size="sm"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      )}
    </Card>
  );
}