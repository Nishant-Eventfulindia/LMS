"use client";
import CourseCard from "@/components/shared/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  BookOpen,
  Clock,
  Users,
  Code,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { useState, useMemo } from "react";
import type { Course } from "@/types";

export default function Courses() {
  const { courses } = siteContent;

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(courses.map((course) => course.category).filter(Boolean))
    );
    return uniqueCategories;
  }, [courses]);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      // Search filter
      const matchesSearch =
        searchTerm === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      // Level filter
      const matchesLevel =
        selectedLevel === "all" ||
        course.level?.toLowerCase() === selectedLevel;

      // Duration filter
      const matchesDuration =
        selectedDuration === "all" ||
        (() => {
          if (!course.duration) return false;
          const hours = parseInt(course.duration.replace(/\D/g, ""));
          switch (selectedDuration) {
            case "short":
              return hours < 20;
            case "medium":
              return hours >= 20 && hours <= 40;
            case "long":
              return hours > 40;
            default:
              return true;
          }
        })();

      return (
        matchesSearch && matchesCategory && matchesLevel && matchesDuration
      );
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.students || 0) - (a.students || 0);
        case "newest":
          return parseInt(b.id) - parseInt(a.id);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    courses,
    searchTerm,
    selectedCategory,
    selectedLevel,
    selectedDuration,
    sortBy,
  ]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSelectedDuration("all");
    setSortBy("popular");
  };

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "all" ||
    selectedLevel !== "all" ||
    selectedDuration !== "all" ||
    sortBy !== "popular";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Courses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Choose from our comprehensive library of coding courses designed
              for all skill levels. From complete beginners to advanced
              developers, we have the perfect learning path for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <BookOpen className="h-3 w-3 mr-1" />
                {courses.length} Total Courses
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                <Users className="h-3 w-3 mr-1" />
                50,000+ Students
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700"
              >
                <Clock className="h-3 w-3 mr-1" />
                300+ Hours Content
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gray-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Find Your Perfect Course
                </CardTitle>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="short">Under 20 hours</SelectItem>
                    <SelectItem value="medium">20-40 hours</SelectItem>
                    <SelectItem value="long">40+ hours</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Categories - Hidden when filters are active */}
      {!hasActiveFilters && (
        <section className="py-4 md:py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Explore our organized course categories to find exactly what
                you're looking for
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 ${
                    selectedCategory === "all"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Courses
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    className={`rounded-full px-6 py-2 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                    onClick={() => setSelectedCategory(category || "all")}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count - Always visible */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredCourses.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {courses.length}
              </span>{" "}
              courses
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative">
                    {/* Course Image */}
                    <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                      <Code className="h-8 w-8 text-blue-500 opacity-70" />
                      {course.level && (
                        <Badge className="absolute top-4 left-4 bg-white/90 text-blue-600 backdrop-blur-sm">
                          {course.level}
                        </Badge>
                      )}
                      {course.category && (
                        <Badge
                          variant="secondary"
                          className="absolute top-4 right-4 bg-white/90 text-purple-600 backdrop-blur-sm"
                        >
                          {course.category}
                        </Badge>
                      )}
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Course Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{course.courseCount} lessons</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>
                            {course.students?.toLocaleString()}+ students
                          </span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-gray-900">
                          {course.price === 0 ? "Free" : `$${course.price}`}
                        </div>
                        <Button
                          variant="outline"
                          className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                        >
                          View Course
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you're
                looking for.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Course Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Courses?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of students who have successfully launched their
                coding careers with our comprehensive programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Course Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Start Learning Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
