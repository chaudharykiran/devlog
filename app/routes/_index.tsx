import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getPosts, getAllTags } from "@/lib/posts.server";
import { PostCard } from "@/components/blog/post-card";
import { TagFilter } from "@/components/blog/tag-filter";
import { TopNavigation } from "@/components/blog/top-navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Tech Blog - Latest Posts" },
    {
      name: "description",
      content: "Explore the latest articles about web development, programming, and technology."
    },
  ];
};

export async function loader() {
  const posts = await getPosts();
  const tags = getAllTags(posts);
  return json({ posts, tags });
}

export default function Index() {
  const { posts, tags } = useLoaderData<typeof loader>();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="min-h-screen">
      <TopNavigation />

      {/* Tags Navigation */}
      <nav className="border-b sticky top-14 bg-background/80 backdrop-blur-sm relative z-50">
        <div className="container mx-auto px-4">
          <TagFilter
            tags={tags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-4">
        {/* Featured Post */}
        <div className="flex flex-col gap-4">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              tags={post.tags}
              image={post.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
