import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-artisan-cream to-white flex items-center py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            {/* 404 Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center">
                <AlertCircle className="text-red-500" size={56} />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              404
            </h1>

            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-xl text-foreground/70 max-w-lg mx-auto mb-8 leading-relaxed">
              Sorry! We couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="group">
                <Link to="/">
                  <Home size={18} className="mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/browse">
                  Browse Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="bg-artisan-cream/50 border border-primary/10 rounded-lg p-8 max-w-lg mx-auto">
              <h3 className="font-semibold text-foreground mb-4">
                Helpful Links
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Link to="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  → Home Page
                </Link>
                <Link to="/browse" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  → Browse Products
                </Link>
                <Link to="/artisan" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  → Become a Seller
                </Link>
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  → Sign In
                </Link>
              </div>
            </div>

            {/* Contact Support */}
            <p className="text-foreground/60 text-sm mt-8">
              Need help? <span className="text-primary font-semibold cursor-pointer">Contact our support team</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
