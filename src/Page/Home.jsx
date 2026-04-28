import StartPost from "../Components/StartPost.jsx";
import Post01 from "../Components/01_PostCard.jsx";
import { postsData } from "../data/mockData.js";

export default function Home() {
  return (
    // CHANGE: Added flex-col and max-w to keep the feed centered and correctly sized
    <div className="flex flex-col gap-4 w-full max-w-[550px] mx-auto">
      <StartPost />

      {/* Posts Feed */}
      {postsData.map((post) => (
        <Post01 key={post.id} post={post} />
      ))}
    </div>
  );
}