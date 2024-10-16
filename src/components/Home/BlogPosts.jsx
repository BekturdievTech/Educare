import BlogCard from "../Card/blogCard";
import { posts } from "@/data/postsdata";

export default async function BlogPosts() {
  const blog = await getBlogPosts();  
  const blogposts = posts.slice(0, 3);
  return (
    <div className="mt-10 flex gap-8">
      {blogposts.map((post) => (
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