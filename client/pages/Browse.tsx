import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Heart, Star, Filter } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  artisan: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Hand-Painted Ceramic Vase",
    artisan: "Maya Pottery Studio",
    price: 899,
    rating: 4.8,
    reviews: 142,
    image: "https://images.pexels.com/photos/5793645/pexels-photo-5793645.jpeg",
    category: "Pottery",
    inStock: true,
  },
  {
    id: 2,
    name: "Bamboo Woven Basket",
    artisan: "Bamboo Crafts Collective",
    price: 599,
    rating: 4.7,
    reviews: 89,
    image: "https://images.pexels.com/photos/14367748/pexels-photo-14367748.jpeg",
    category: "Bamboo",
    inStock: true,
  },
  {
    id: 3,
    name: "Embroidered Silk Scarf",
    artisan: "Threadcraft Designs",
    price: 1199,
    rating: 4.9,
    reviews: 234,
    image: "https://images.pexels.com/photos/8712881/pexels-photo-8712881.jpeg",
    category: "Textiles",
    inStock: true,
  },
  {
    id: 4,
    name: "Wooden Hand Carving",
    artisan: "Village Wood Works",
    price: 1499,
    rating: 4.6,
    reviews: 67,
    image: "https://images.pexels.com/photos/3512199/pexels-photo-3512199.jpeg",
    category: "Wood",
    inStock: true,
  },
  {
    id: 5,
    name: "Traditional Rajasthani Painting",
    artisan: "Desert Art Studio",
    price: 2499,
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/7859600/pexels-photo-7859600.jpeg",
    category: "Paintings",
    inStock: true,
  },
  {
    id: 6,
    name: "Handwoven Dhurrie Rug",
    artisan: "Rug Masters India",
    price: 3499,
    rating: 4.8,
    reviews: 98,
    image: "https://images.pexels.com/photos/34562126/pexels-photo-34562126.jpeg",
    category: "Textiles",
    inStock: true,
  },
  {
    id: 7,
    name: "Clay Terracotta Pots Set",
    artisan: "Heritage Pottery",
    price: 749,
    rating: 4.7,
    reviews: 112,
    image: "https://images.pexels.com/photos/7276941/pexels-photo-7276941.jpeg",
    category: "Pottery",
    inStock: false,
  },
  {
    id: 8,
    name: "Macramé Wall Hanging",
    artisan: "Fiber Arts Studio",
    price: 899,
    rating: 4.5,
    reviews: 73,
    image: "https://images.pexels.com/photos/6892490/pexels-photo-6892490.jpeg",
    category: "Textiles",
    inStock: true,
  },
];

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Pottery", "Bamboo", "Paintings", "Textiles", "Wood"];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCart = (productId: number) => {
    setCartItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartValue = filteredProducts
    .filter((p) => cartItems.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  return (
    <Layout>
      <div className="bg-white min-h-screen py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">🛍️ Shop Handmade</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover Authentic Handmade Products
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Browse unique, authentic products from verified artisans across India. Each item tells a story of craftsmanship.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar - Filters */}
            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h2 className="font-semibold text-foreground">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="text-foreground/60">
                    ✕
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      Under ₹500
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      ₹500 - ₹1000
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      ₹1000 - ₹2000
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      Above ₹2000
                    </label>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Rating</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    {[5, 4, 3].map((stars) => (
                      <label key={stars} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>★ {stars}+ Stars</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Controls */}
              <div className="mb-8 space-y-4">
                <div className="flex gap-3 flex-col sm:flex-row">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-foreground/50" size={20} />
                    <Input
                      type="text"
                      placeholder="Search products or artisans..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter size={20} />
                    Filters
                  </Button>
                </div>

                {/* Results Info */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-foreground/70">
                    Showing {filteredProducts.length} products
                  </p>
                  {cartItems.length > 0 && (
                    <div className="bg-primary text-white px-4 py-2 rounded-lg">
                      Cart: {cartItems.length} items - ₹{totalCartValue.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative overflow-hidden bg-secondary h-48">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <button
                          onClick={() => toggleCart(product.id)}
                          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                            cartItems.includes(product.id)
                              ? "bg-primary text-white"
                              : "bg-white text-primary hover:bg-primary/10"
                          }`}
                        >
                          <Heart
                            size={18}
                            fill={cartItems.includes(product.id) ? "currentColor" : "none"}
                          />
                        </button>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-semibold">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-xs text-primary font-semibold mb-2">
                          {product.category}
                        </p>
                        <h3 className="font-semibold text-foreground mb-2 text-sm line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-xs text-foreground/60 mb-3">{product.artisan}</p>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < Math.floor(product.rating)
                                    ? "fill-accent text-accent"
                                    : "text-foreground/20"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-foreground/60">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-primary">
                            ₹{product.price.toLocaleString()}
                          </p>
                          <Button
                            size="sm"
                            onClick={() => toggleCart(product.id)}
                            variant={
                              cartItems.includes(product.id) ? "default" : "outline"
                            }
                            disabled={!product.inStock}
                          >
                            <ShoppingCart size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-foreground/70">
                    No products found matching your search.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Checkout Section */}
              {cartItems.length > 0 && (
                <div className="mt-12 bg-white p-6 rounded-lg border border-border sticky bottom-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground/70 text-sm">Total</p>
                      <p className="text-3xl font-bold text-primary">
                        ₹{totalCartValue.toLocaleString()}
                      </p>
                    </div>
                    <Button size="lg">
                      Proceed to Checkout ({cartItems.length} items)
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
