import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Store, ShoppingBag, ArrowRight, CheckCircle2, Zap, Users, Award } from "lucide-react";

export default function Signup() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-artisan-cream to-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">🚀 Join KarigarHub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Choose Your Role
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Are you an artisan looking to sell your handmade treasures, or a buyer discovering unique crafts?
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Artisan Card */}
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/60 group-hover:h-3 transition-all"></div>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Store className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl text-foreground">Sell Your Crafts</CardTitle>
                <CardDescription className="text-base">
                  Turn your handmade art into income
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Benefits */}
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Reach customers across India & globally</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Keep 90-95% of your earnings</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Easy listing with verified badge</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Secure payments & order management</span>
                  </li>
                </ul>

                {/* Stats */}
                <div className="pt-4 border-t border-primary/10 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-lg font-bold text-primary">5K+</p>
                    <p className="text-xs text-foreground/60">Artisans</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">50K+</p>
                    <p className="text-xs text-foreground/60">Products</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">₹50L+</p>
                    <p className="text-xs text-foreground/60">Earnings</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button asChild size="lg" className="w-full group/btn">
                  <Link to="/artisan">
                    Start Selling
                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Buyer Card */}
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="h-2 bg-gradient-to-r from-primary/60 to-primary group-hover:h-3 transition-all"></div>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ShoppingBag className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl text-foreground">Discover Products</CardTitle>
                <CardDescription className="text-base">
                  Find authentic handmade treasures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Benefits */}
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Verified artisans & authentic crafts</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Fair prices directly from makers</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Secure checkout & fast delivery</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground/80">Support local & rural artisans</span>
                  </li>
                </ul>

                {/* Stats */}
                <div className="pt-4 border-t border-primary/10 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-lg font-bold text-primary">100K+</p>
                    <p className="text-xs text-foreground/60">Buyers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">10+</p>
                    <p className="text-xs text-foreground/60">Categories</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">⭐ 4.8</p>
                    <p className="text-xs text-foreground/60">Rating</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button asChild size="lg" variant="outline" className="w-full group/btn border-primary/20">
                  <Link to="/browse">
                    Browse Now
                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Section */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 py-12 border-t border-primary/10">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Setup</h3>
              <p className="text-sm text-foreground/60">
                Get started in minutes with our easy registration process
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community</h3>
              <p className="text-sm text-foreground/60">
                Join thousands of artisans and buyers in our growing community
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Support</h3>
              <p className="text-sm text-foreground/60">
                24/7 customer support to help you succeed on our platform
              </p>
            </div>
          </div>

          {/* Already have account */}
          <div className="text-center pt-8 border-t border-primary/10">
            <p className="text-foreground/70 mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary/80 font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
