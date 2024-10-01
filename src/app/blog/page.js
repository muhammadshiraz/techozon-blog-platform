import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  const blogsCollection = collection(db, 'blogs');
  const blogsSnapshot = await getDocs(blogsCollection);
  const blogs = blogsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}
