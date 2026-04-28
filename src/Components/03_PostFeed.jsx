import PostCard from "./01_PostCard";

const PostFeed = ({ posts = [] }) => (
  <div className="flex flex-col gap-4">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostFeed;
