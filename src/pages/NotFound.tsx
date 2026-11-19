import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn('404: Page not found for path', location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="panel w-full max-w-md space-y-4 p-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          404 / Not found
        </p>
        <h1 className="heading-sub text-2xl">Page not found</h1>
        <p className="text-sm text-muted-foreground">
          The page you requested does not exist or may have moved.
        </p>
        <div className="pt-2">
          <Button asChild className="h-10 rounded-lg px-5 text-sm font-medium">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Return to portfolio
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
