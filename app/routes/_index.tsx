import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { useState } from "react";
import { getPosts, getAllTags } from "@/lib/posts.server";
import { PostCard } from "@/components/blog/post-card";
import { TagFilter } from "@/components/blog/tag-filter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-serif">TechBlog</h1>
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(navigationMenuTriggerStyle(), "text-foreground")}>
                    For you
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button className="text-sm rounded-full">
              Write
            </Button>
          </div>
        </div>
      </header>

      {/* Tags Navigation */}
      <nav className="border-b sticky top-0 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <TagFilter
            tags={tags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4">
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
