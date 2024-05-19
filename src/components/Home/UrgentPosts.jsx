import { posts } from "@/data/constants";
import UrgentCard from "../Card/urgentCard";

export default async function UrgentPosts() {
  const blog = await getBlogPosts();
  return (
    <div className="grid grid-cols-3 pt-8">
      {posts.map((post) => (
        <UrgentCard post={post} key={post.id} />
      ))}
    </div>
  );
}

async function getBlogPosts() {
  await delay(13000);
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }

  return res.json();
}

function delay(n) {
  return new Promise((r) => setTimeout(r, n));
}
