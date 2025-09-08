import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Clock, Search, ArrowRight } from 'lucide-react';
import { siteContent } from '@/data/content';
import Link from 'next/link';

export default function Blog() {
  const { blog } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            {blog.hero.subtitle}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-white border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge className="bg-blue-600 text-white mb-4">Featured Article</Badge>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square relative overflow-hidden">
                  <img 
                    src={blog.posts[0].image}
                    alt={blog.posts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="self-start mb-4">
                    {blog.posts[0].category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {blog.posts[0].title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blog.posts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{blog.posts[0].author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(blog.posts[0].date).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${blog.posts[0].slug}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Categories</option>
                <option>Web Development</option>
                <option>JavaScript</option>
                <option>CSS</option>
                <option>UX Design</option>
                <option>Mobile Development</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.posts.slice(1).map((post) => (
              <Card key={post.id} className="border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 text-gray-700"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-600 hover:bg-blue-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Sidebar */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Follow Along
              </CardTitle>
              <p className="text-gray-600">
                Subscribe to our newsletter for weekly coding tips, tutorials, and the latest tech news.
              </p>
            </CardHeader>
            <CardContent className="max-w-md mx-auto">
              <form className="flex space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 text-center mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}