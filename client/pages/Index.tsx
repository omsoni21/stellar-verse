import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Package,
  Zap,
  Users,
  TrendingUp,
  MapPin,
  Award,
  Truck,
  CheckCircle2,
  ArrowRight,
  Globe,
  Shield,
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-primary text-sm font-semibold">✨ Transform Your Craft</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Turn Your Handmade Art Into <span className="text-primary">Income</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed max-w-lg">
                Sell directly to customers. Keep 90-95% of earnings. No middlemen taking your profit. No technical skills needed.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">Verified seller with government ID</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">Reach customers across India & globally</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">Secure payments via Razorpay & Paytm</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link to="/artisan">
                    Start Selling Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/browse">
                    Browse Products
                  </Link>
                </Button>
              </div>

              <div className="mt-10 flex gap-8 text-sm">
                <div>
                  <p className="text-2xl font-bold text-primary">5K+</p>
                  <p className="text-foreground/60">Artisans</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-foreground/60">Products</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">100K+</p>
                  <p className="text-foreground/60">Happy Buyers</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.pexels.com/photos/6892490/pexels-photo-6892490.jpeg"
                  alt="Artisan crafting pottery"
                  className="relative w-full rounded-2xl shadow-2xl object-cover h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why KarigarHub */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-artisan-cream to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Artisans Choose KarigarHub
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stop losing 40-50% of your earnings to middlemen. We've built the perfect platform for rural artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:border-primary/30">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Keep 90-95% Earnings</h3>
              <p className="text-foreground/70 leading-relaxed">
                We only take a small commission. No middlemen, no brokers, no exploitation. Your profit is your profit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:border-primary/30">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sell Globally</h3>
              <p className="text-foreground/70 leading-relaxed">
                Access thousands of buyers across India and the world. Expand beyond your local market instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:border-primary/30">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Super Easy Platform</h3>
              <p className="text-foreground/70 leading-relaxed">
                No technical skills needed. Upload photos, set prices, and start selling. Built for artisans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything Built for Your Success
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Professional tools to manage and grow your handcraft business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="group overflow-hidden rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden bg-secondary">
                <img
                  src="https://images.pexels.com/photos/5793645/pexels-photo-5793645.jpeg"
                  alt="Product listing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Easy Product Listing</h3>
                </div>
                <p className="text-foreground/70">
                  Upload photos, write descriptions, set prices. Manage inventory from your dashboard. No complexity.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group overflow-hidden rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden bg-secondary">
                <img
                  src="https://images.pexels.com/photos/14367748/pexels-photo-14367748.jpeg"
                  alt="Verified seller"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Verified Sellers</h3>
                </div>
                <p className="text-foreground/70">
                  Government ID verification ensures authenticity. Buyers trust your badge. Build your reputation.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group overflow-hidden rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden bg-secondary">
                <img
                  src="https://images.pexels.com/photos/7859600/pexels-photo-7859600.jpeg"
                  alt="Secure payments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Secure Payments</h3>
                </div>
                <p className="text-foreground/70">
                  Razorpay and Paytm integration. Money held safely until order delivered. Zero payment risk.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group overflow-hidden rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden bg-secondary">
                <img
                  src="https://images.pexels.com/photos/34562126/pexels-photo-34562126.jpeg"
                  alt="Order tracking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Truck className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Order Tracking</h3>
                </div>
                <p className="text-foreground/70">
                  Real-time order status updates. Automated notifications keep everyone informed. Professional workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-artisan-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From registration to first sale - it's easy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Register", desc: "Create account and upload ID for verification" },
              { num: "2", title: "List Products", desc: "Upload photos, add details, set prices" },
              { num: "3", title: "Get Orders", desc: "Start receiving orders from buyers" },
              { num: "4", title: "Ship & Earn", desc: "Ship product and receive payment" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">₹10Cr+</p>
              <p className="text-lg text-foreground/70">Revenue Generated</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">5K+</p>
              <p className="text-lg text-foreground/70">Artisans Earning</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">50K+</p>
              <p className="text-lg text-foreground/70">Products Listed</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">15+</p>
              <p className="text-lg text-foreground/70">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Craft Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of artisans earning fair income. No middlemen. No exploitation. Just your talent and our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/artisan">
                Get Started as Seller
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-foreground border-white hover:bg-white/20">
              <Link to="/browse">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
