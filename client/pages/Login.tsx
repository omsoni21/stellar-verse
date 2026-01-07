import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempted with:", { email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-artisan-cream to-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Information */}
            <div className="hidden md:block">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                    Welcome Back to <span className="text-primary">KarigarHub</span>
                  </h2>
                  <p className="text-lg text-foreground/70">
                    Sign in to your account to access your dashboard, manage products, and track your sales.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Secure Login</h3>
                      <p className="text-sm text-foreground/60">
                        Your account is protected with encryption and two-factor authentication options.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Access</h3>
                      <p className="text-sm text-foreground/60">
                        Instantly access your dashboard, orders, and earnings from anywhere.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                      <p className="text-sm text-foreground/60">
                        Our support team is always ready to help you with any questions or issues.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/10">
                  <p className="text-sm text-foreground/60 mb-4">New to KarigarHub?</p>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link to="/signup">
                      Create an Account
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md border-primary/20 shadow-xl">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl">Sign In</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your KarigarHub account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-foreground/40" size={18} />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 border-primary/20 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password" className="text-foreground font-medium">
                          Password
                        </Label>
                        <Link
                          to="#"
                          className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Forgot?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-foreground/40" size={18} />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 border-primary/20 focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-foreground/40 hover:text-foreground/60 transition-colors"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 rounded border-primary/20 cursor-pointer"
                      />
                      <Label htmlFor="remember" className="text-sm text-foreground/60 cursor-pointer">
                        Remember me for 30 days
                      </Label>
                    </div>

                    {/* Sign In Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                      {!isLoading && <ArrowRight size={18} className="ml-2" />}
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-primary/10"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-foreground/60">Or continue with</span>
                      </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="border-primary/20">
                        Google
                      </Button>
                      <Button variant="outline" className="border-primary/20">
                        Phone
                      </Button>
                    </div>
                  </form>

                  {/* Footer Text */}
                  <p className="text-center text-sm text-foreground/60 mt-6">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary hover:text-primary/80 font-semibold">
                      Sign up
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
