import { Link, useNavigate } from "@remix-run/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  image?: string | null;
}

export function PostCard({ title, excerpt, date, tags, slug, image }: PostCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    return navigate(`/posts/${slug}`);
  };

  return (
    <Card
      className="group relative hover:border-foreground transition-all cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex flex-col h-full p-6">
        {image && (
          <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 space-y-4">
          <div>
            <Link
              to={`/posts/${slug}`}
              className="text-xl font-bold tracking-tight hover:underline decoration-1 block"
              onClick={(e) => e.stopPropagation()}
            >
              {title}
            </Link>
            <p className="mt-2 line-clamp-2 text-muted-foreground">
              {excerpt}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="hover:bg-secondary/80 cursor-pointer badge"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}