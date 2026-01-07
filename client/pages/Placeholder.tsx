import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen bg-artisan-cream flex items-center justify-center py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="text-primary" size={40} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>

            <p className="text-xl text-foreground/70 mb-8 max-w-lg mx-auto">
              {description}
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-blue-700">
                <strong>This page is ready to be built out!</strong> Continue prompting to fill in the content and functionality for this page.
              </p>
            </div>

            <Button asChild size="lg">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
