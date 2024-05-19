import PostCard from "@/components/Card/postCard";
import { posts } from "@/data/constants";
import Pagination from "@/components/Pagination";
export default function Posts({parameters}) {
  return (
    <>
      <div className="mt-20 flex flex-col gap-8">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      <Pagination parameters={parameters} />
    </>
  );
}
