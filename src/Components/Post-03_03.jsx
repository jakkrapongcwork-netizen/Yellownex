// PostFeed.jsx — ใช้งาน PostCard กับ data
const posts = [
  {
    id: 1,
    author: { name: "Siriporn T.", headline: "Senior Engineer · Agoda", avatar: "..." },
    content: "เพิ่งเปิด Pull Request แรกของปีนี้...",
    image: null,
    likeCount: 184,
    isLiked: true,
    commentCount: 23,
    comments: [],
    createdAt: "2 ชั่วโมงที่แล้ว",
  },
];

const PostFeed = () => (
  <div className="feed">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);