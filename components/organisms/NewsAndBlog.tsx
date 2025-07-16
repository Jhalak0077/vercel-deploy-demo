import { Button } from '../atoms';
import Image from 'next/image';
import BlogCard from '../molecules/BlogCard';
import { Calendar } from '../atoms/icons/Calendar';
import { Clock } from '../atoms/icons/Clock';
import FeaturedBlogCard from '../molecules/FeaturedBlogCard';
const blogData = [
  {
    image: '/images/Thabhotechnology.png',
    category: 'Real-estate',
    title: 'Connecting You to Your Dream Property',
    description:
      'Thabho Real Estate simplifies property transactions with reliable, transparent, and commission-based services.',
    date: 'January 05, 2025',
    time: '3 min',
  },
  {
    image: '/images/Thabhoagritech.png',
    category: 'Agritech',
    title: 'Connecting You to Your Dream Farm',
    description:
      'Thabho Real Estate simplifies property transactions with reliable, transparent, and commission-based services.',
    date: 'January 05, 2025',
    time: '3 min',
  },
];

export default function NewsAndBlog() {
  return (
    <section className=" section py-12 pt-6  text-white px-6 md:px-8 md:py-20">
      <div className="flex justify-between items-center md:mb-4">
        <div>
          <p className="section-title">News & Blogs</p>
          <h2 className="section-heading">Updates on Thabho Group</h2>
        </div>

        <Button
          type="button"
          variant="secondary"
          className="hidden bg-black px-10 md:inline-block"
        >
          VIEW ALL
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-6 flex-1">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className={index === 1 ? 'hidden lg:block' : ''}
            >
              <BlogCard
                image={blog.image}
                category={blog.category}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                time={blog.time}
              />
            </div>
          ))}
        </div>

        <FeaturedBlogCard
          image="/images/News-right-bg.png"
          category="Information Technology"
          title={`Revolutionize your Site with\nAI, DeepSeek & It's Rise.`}
          date="January 05, 2025"
          time="3 min"
        />
      </div>

      {/* Mobile Button */}
      <div className="md:hidden text-start mt-6">
        <Button
          type="submit"
          variant="secondary"
          className="cursor px-10"
        >
          VIEW ALL
        </Button>
      </div>
    </section>
  );
}
