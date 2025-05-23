import * as path from "path";
import * as fs from "fs/promises";
import matter from "gray-matter";

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
  const postsPath = path.join(process.cwd(), "app", "posts");
  const dir = await fs.readdir(postsPath);

  const posts = await Promise.all(
    dir.map(async (filename) => {
      const filePath = path.join(postsPath, filename);
      const file = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(file);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        tags: data.tags,
        content,
        image: data.image || null
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
