import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <img 
        src={blog.imageUrl || '/placeholder-image.jpg'}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      
      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.content.slice(0, 100)}...</p>
        
        {/* Read More Link */}
        <Link 
          href={`/blog/${blog.id}`} 
          className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
      
      {/* Footer Section */}
      <div className="bg-gray-100 px-6 py-3">
        <span className="text-gray-500 text-sm">Published on: {new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default BlogCard;
