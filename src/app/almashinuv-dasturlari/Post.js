import PostCard from "@/components/Card/postCard";
import { posts } from "@/data/constants";
import Pagination from "@/components/Pagination";

export default function Posts({ parameters }) {
  const bosqich = parameters.bosqich;
  const soha = parameters.soha;

  const filteredPosts = posts.filter((post) => {
    const matchesBosqich = bosqich ? post.level === bosqich : true;
    const matchesSoha = soha ? post.soha === soha : true;

    return matchesBosqich && matchesSoha;
  });

  const postsPerPage = 4;
  const page = parameters.page ? Number(parameters.page) : 1; // Get current page from parameters, default to 1

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Slice the filtered posts based on the current page
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);


  return (
    <>
      <div className="mt-20 flex flex-col gap-8">
        {paginatedPosts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      {filteredPosts.length > postsPerPage && (
        <Pagination parameters={parameters} dataLength={filteredPosts.length}/>
      )}
    </>
  );
}
