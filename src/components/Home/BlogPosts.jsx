import BlogCard from "../Card/blogCard";
import { posts } from "@/data/constants";

export default async function BlogPosts() {
  const blog = await getBlogPosts();  
  return (
    <div className="mt-10 flex gap-8">
      {posts.map((post) => (
        <BlogCard post={post} key={post.id} />
      ))}
    </div>
  );
}

async function getBlogPosts(){
  await delay(17000)
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!res.ok) {
    throw new Error('Failed to fetch the data');    
  }

  return res.json();
}

function delay(n) {
  return new Promise(r => setTimeout(r, n))
}