import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image"; // Import Image component

const BlogDetailPage = async ({ params }) => {
  const { id } = params; // Extract the blog ID from the URL params

  // Fetch blog data based on the ID
  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);

  // Check if the document exists
  if (!docSnap.exists()) {
    return (
      <div className='container mx-auto py-10'>
        <h1 className='text-4xl font-bold text-red-600'>Blog Not Found</h1>
        <Link href='/blog' className='text-blue-500 hover:underline'>
          &larr; Back to Blogs
        </Link>
      </div>
    );
  }

  const blog = {
    id: docSnap.id,
    ...docSnap.data(),
  };

  return (
    <div className='container mx-auto py-10 px-4'>
      {/* Blog Title */}
      <h1 className='text-4xl font-bold mb-6 text-gray-900'>{blog.title}</h1>

      {/* Blog Image */}
      <Image
        src={blog.imageUrl || "/placeholder-image.jpg"}
        alt={blog.title}
        width={1200} // You can adjust the width as needed
        height={530} // You can adjust the height as needed
        className='w-full h-[530px] object-cover rounded-lg mb-6'
        placeholder='blur' // Optional: Adds a blur placeholder while loading
        blurDataURL='/placeholder-image.jpg' // Optional: Placeholder image while the main image loads
      />

      {/* Blog Content */}
      <div className='prose lg:prose-xl text-gray-700 mb-6'>
        <p>{blog.content}</p>
      </div>

      {/* Back to Blogs Link */}
      <Link
        href='/blog'
        className='inline-block text-blue-500 hover:underline mb-6'
      >
        &larr; Back to Blogs
      </Link>

      {/* Footer Section */}
      <footer className='mt-10 border-t pt-6'>
        <p className='text-gray-500'>
          Published on: {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <p className='text-gray-500'>Author: {blog.author || "Unknown"}</p>
      </footer>
    </div>
  );
};

export default BlogDetailPage;
