import { Link } from "@remix-run/react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        {/* Error Icon/Image */}
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-muted mx-auto">
          <AlertTriangle className="h-12 w-12 text-muted-foreground" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          Page Not Found
        </h1>

        <p className="text-muted-foreground mb-6 text-center">
          The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* Navigation Options */}
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="w-full sm:w-auto rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
          >
            Visit Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}