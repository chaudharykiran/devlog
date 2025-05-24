import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "@/lib/posts.server";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { TopNavigation } from "@/components/blog/top-navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = await getPost(params.slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ post });
}

const WORD_COUNT = 200; // Average words per minute for reading

export default function PostDetails() {
  const { post } = useLoaderData<typeof loader>();
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  const readingTime = Math.ceil(post.content.split(/\s+/).length / WORD_COUNT); // Approx. 200 words per minute

  return (
    <div className="min-h-screen">
      <TopNavigation />
      <article className="max-w-[800px] mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="hover:bg-secondary/80">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author and Meta Information */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback className="bg-primary/10 text-primary/40">
                {post.author[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="font-medium">{post.author}</div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none">
          Content
        </div>
      </article>
    </div>
  );
}
