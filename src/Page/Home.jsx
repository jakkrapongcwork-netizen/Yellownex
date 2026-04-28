import StartPost from "../Components/StartPost.jsx";
import { postsData } from "../data/mockData.js";
import PostFeed from "../Components/03_PostFeed.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[550px] mx-auto">
      <StartPost />

      {/* Posts Feed */}
      <PostFeed posts={postsData} />
    </div>
  );
}
