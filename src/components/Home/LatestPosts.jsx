import PostCard from "../Card/postCard";
import { posts } from "@/data/constants";

export default async function LatestPosts() {
  const blog = await getBlogPosts();
  const latestPosts = posts.slice(0, 3);
  return (
    <div className="mt-10 flex flex-col gap-8">
      {latestPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

async function getBlogPosts(){
  await delay(9000)
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!res.ok) {
    throw new Error('Failed to fetch the data');    
  }

  return res.json();
}

function delay(n) {
  return new Promise(r => setTimeout(r, n))
}