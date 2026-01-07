import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
                K
              </div>
              <span className="text-primary group-hover:text-primary/80 transition-colors">KarigarHub</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <Link
                to="/"
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm"
              >
                Home
              </Link>
              <Link
                to="/browse"
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm"
              >
                Browse Products
              </Link>
              <Link
                to="/artisan"
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm"
              >
                Sell with Us
              </Link>
              <Link
                to="/about"
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm"
              >
                About
              </Link>
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" asChild className="hover:bg-primary/10">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-border">
              <div className="flex flex-col gap-3 py-4">
                <Link
                  to="/"
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/browse"
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse Products
                </Link>
                <Link
                  to="/artisan"
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sell with Us
                </Link>
                <Link
                  to="/about"
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-white border-t border-border mt-20">
        <div className="container mx-auto px-4 max-w-6xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  K
                </div>
                <span className="font-bold text-lg text-white">KarigarHub</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Empowering rural artisans to sell handmade products directly to customers worldwide.
              </p>
            </div>

            {/* For Artisans */}
            <div>
              <h3 className="font-semibold mb-4 text-white">For Artisans</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/artisan" className="hover:text-primary transition-colors">
                    Start Selling
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing & Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Seller Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="font-semibold mb-4 text-white">For Buyers</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/browse" className="hover:text-primary transition-colors">
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About KarigarHub
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Career
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>&copy; 2025 KarigarHub. All rights reserved. | Developed by Om Soni</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
