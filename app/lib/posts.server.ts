import * as path from "path";
import matter from "gray-matter";

// Import all markdown files using Vite's import.meta.glob
const posts = import.meta.glob('/app/posts/*.(md|mdx)', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  image?: string;
}

export async function getPosts(): Promise<Post[]> {
  return Object.entries(posts).map(([filepath, content]) => {
    const { data, content: markdownContent } = matter(content as string);
    const filename = path.basename(filepath);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags,
      content: markdownContent,
      image: data.image || null
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}


