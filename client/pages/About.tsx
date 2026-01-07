import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Heart,
  Globe,
  Users,
  TrendingUp,
  Award,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe every artisan deserves fair income and global market access without intermediaries.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Making e-commerce simple and accessible for rural artisans with minimal technical skills.",
    },
    {
      icon: Handshake,
      title: "Trust",
      description:
        "Built on transparency, verification, and secure transactions for both buyers and sellers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously improving our platform to solve real problems for our artisan community.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded",
      description: "KarigarHub was founded with a mission to empower rural artisans.",
    },
    {
      year: "2023",
      title: "First 1,000 Artisans",
      description: "Reached our first milestone of 1,000 registered artisans on the platform.",
    },
    {
      year: "2024",
      title: "50,000 Products Listed",
      description: "Successfully listed over 50,000 unique handmade products from across India.",
    },
    {
      year: "2024",
      title: "₹5 Crore+ Earnings",
      description: "Artisans earned over ₹5 crores in total earnings through our platform.",
    },
  ];

  const team = [
    {
      name: "Founder & CEO",
      role: "Visionary Leader",
      description: "With a passion for social impact and e-commerce, driving KarigarHub's mission forward.",
    },
    {
      name: "Operations Lead",
      role: "Artisan Liaison",
      description: "Ensures smooth operations and strong connections with our artisan community.",
    },
    {
      name: "Tech Lead",
      role: "Platform Development",
      description: "Building scalable, user-friendly technology for the marketplace.",
    },
    {
      name: "Customer Support",
      role: "24/7 Support Team",
      description: "Dedicated to resolving issues and ensuring customer satisfaction.",
    },
  ];

  const stats = [
    { number: "5K+", label: "Artisans" },
    { number: "50K+", label: "Products" },
    { number: "100K+", label: "Happy Buyers" },
    { number: "₹5L+", label: "Total Earnings" },
  ];

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/13757398/pexels-photo-13757398.jpeg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-primary/90 px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-semibold">📖 Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Rural Artisans <span className="text-yellow-400">Globally</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              KarigarHub is a digital marketplace connecting rural artisans directly with customers worldwide. We believe in fair trade, transparent pricing, and the power of handmade craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">The Problem</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertIcon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Limited Market Access</h3>
                    <p className="text-foreground/70">
                      Rural artisans lack access to online marketplaces and direct customer connections.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertIcon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Middlemen & Exploitation</h3>
                    <p className="text-foreground/70">
                      Middlemen take 30-50% of profits, leaving artisans with minimal earnings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertIcon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Technical Barriers</h3>
                    <p className="text-foreground/70">
                      Complex digital platforms and lack of technical skills prevent participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Direct Marketplace</h3>
                    <p className="text-foreground/70">
                      Connect directly with customers across India and globally. No middlemen involved.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fair Earnings</h3>
                    <p className="text-foreground/70">
                      Keep 90-95% of your earnings. We take a small commission for platform operations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Simple & Accessible</h3>
                    <p className="text-foreground/70">
                      User-friendly interface designed for artisans with minimal technical skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-artisan-cream to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              These principles guide every decision we make and shape our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From a vision to a thriving platform, here are our key milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((milestone, idx) => (
              <Card key={idx} className="border-primary/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <p className="font-bold text-primary text-lg">{milestone.year}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground/70">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-artisan-cream to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Passionate individuals dedicated to supporting artisans and building a better marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-foreground text-center mb-1 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-primary text-center font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-foreground/70 text-center text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Community Focus</h3>
              <p className="text-foreground/70">
                We prioritize the needs and success of our artisan community above all else.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Economic Growth</h3>
              <p className="text-foreground/70">
                Our artisans earn more and build sustainable livelihoods through our platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Quality Crafts</h3>
              <p className="text-foreground/70">
                We showcase authentic, high-quality handmade products from verified artisans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you're an artisan looking to sell or a buyer searching for authentic handmade treasures, KarigarHub is your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 group">
              <Link to="/artisan">
                Start Selling
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/browse">
                Browse Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Helper Alert Icon since it's not in lucide-react commonly used exports
function AlertIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
