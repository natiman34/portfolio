import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: Page not found for path", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="surface-card p-8 max-w-md w-full text-center space-y-4">
        <p className="font-mono text-xs text-primary">404</p>
        <h1 className="font-display text-3xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="text-sm text-muted-foreground">
          The page you requested does not exist or may have moved.
        </p>
        <div className="pt-2">
          <Button asChild className="hero-primary-btn h-10 px-5">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              Return to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
