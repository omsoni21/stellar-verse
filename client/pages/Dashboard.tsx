import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  BarChart3,
  ShoppingCart,
  Package,
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const stats = [
    {
      title: "Total Earnings",
      value: "₹12,450",
      subtitle: "This month",
      icon: TrendingUp,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Orders",
      value: "24",
      subtitle: "This month",
      icon: ShoppingCart,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Products",
      value: "18",
      subtitle: "Total listed",
      icon: Package,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Views",
      value: "2.3K",
      subtitle: "This month",
      icon: Eye,
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  const orders = [
    {
      id: "#KGH-001",
      customer: "Priya Sharma",
      product: "Handwoven Basket",
      amount: "₹2,500",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "#KGH-002",
      customer: "Raj Kumar",
      product: "Ceramic Vase",
      amount: "₹3,200",
      status: "pending",
      date: "2024-01-14",
    },
    {
      id: "#KGH-003",
      customer: "Ananya Singh",
      product: "Wooden Sculpture",
      amount: "₹1,800",
      status: "shipped",
      date: "2024-01-13",
    },
    {
      id: "#KGH-004",
      customer: "Vikram Patel",
      product: "Embroidered Cloth",
      amount: "₹950",
      status: "completed",
      date: "2024-01-12",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Handwoven Basket",
      sku: "HWB-001",
      price: "₹2,500",
      stock: 12,
      sales: 24,
      status: "active",
    },
    {
      id: 2,
      name: "Ceramic Vase",
      sku: "CV-002",
      price: "₹3,200",
      stock: 5,
      sales: 18,
      status: "active",
    },
    {
      id: 3,
      name: "Wooden Sculpture",
      sku: "WS-003",
      price: "₹1,800",
      stock: 0,
      sales: 9,
      status: "out_of_stock",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "out_of_stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 size={16} className="inline mr-1" />;
      case "pending":
        return <Clock size={16} className="inline mr-1" />;
      case "shipped":
        return <Package size={16} className="inline mr-1" />;
      default:
        return <AlertCircle size={16} className="inline mr-1" />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-artisan-cream to-white py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Seller Dashboard
              </h1>
              <p className="text-foreground/70">
                Welcome back! Here's your business overview.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button asChild variant="outline">
                <Link to="#" className="gap-2">
                  <Settings size={18} />
                  Settings
                </Link>
              </Button>
              <Button asChild>
                <Link to="#" className="gap-2">
                  <Plus size={18} />
                  Add Product
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="border-primary/20 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                        <Icon size={24} />
                      </div>
                    </div>
                    <h3 className="text-sm text-foreground/70 font-medium mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-foreground/60">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="border-b border-primary/10 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === "overview"
                    ? "border-b-2 border-primary text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === "orders"
                    ? "border-b-2 border-primary text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Recent Orders
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === "products"
                    ? "border-b-2 border-primary text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Products
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Chart Section */}
              <Card className="lg:col-span-2 border-primary/20 shadow-md">
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>
                    Your monthly earnings performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-artisan-cream/30 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="text-primary/30 mx-auto mb-4" size={48} />
                      <p className="text-foreground/60">
                        Chart data visualization coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-primary/20 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="pb-6 border-b border-primary/10">
                    <p className="text-sm text-foreground/70 mb-2">
                      Average Order Value
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      ₹2,113
                    </p>
                  </div>
                  <div className="pb-6 border-b border-primary/10">
                    <p className="text-sm text-foreground/70 mb-2">
                      Conversion Rate
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      3.2%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-2">
                      Total Customers
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      156
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Orders Table */}
          {activeTab === "orders" && (
            <Card className="border-primary/20 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your latest customer orders</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-primary/10">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Order ID
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Customer
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Product
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Amount
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b border-primary/5 hover:bg-artisan-cream/30 transition-colors"
                        >
                          <td className="py-4 px-4 font-medium text-foreground">
                            {order.id}
                          </td>
                          <td className="py-4 px-4 text-foreground/80">
                            {order.customer}
                          </td>
                          <td className="py-4 px-4 text-foreground/80">
                            {order.product}
                          </td>
                          <td className="py-4 px-4 font-medium text-foreground">
                            {order.amount}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}
                            >
                              {getStatusIcon(order.status)}
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Products Table */}
          {activeTab === "products" && (
            <Card className="border-primary/20 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Your Products</CardTitle>
                  <CardDescription>Manage your product listings</CardDescription>
                </div>
                <Button asChild size="sm">
                  <Link to="#" className="gap-2">
                    <Plus size={16} />
                    Add Product
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-primary/10">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Product Name
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          SKU
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Price
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Stock
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Sales
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-primary/5 hover:bg-artisan-cream/30 transition-colors"
                        >
                          <td className="py-4 px-4 font-medium text-foreground">
                            {product.name}
                          </td>
                          <td className="py-4 px-4 text-foreground/80">
                            {product.sku}
                          </td>
                          <td className="py-4 px-4 font-medium text-foreground">
                            {product.price}
                          </td>
                          <td className="py-4 px-4 text-foreground/80">
                            {product.stock}
                          </td>
                          <td className="py-4 px-4 text-foreground/80">
                            {product.sales}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}
                            >
                              {product.status === "active"
                                ? "Active"
                                : "Out of Stock"}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-artisan-cream rounded transition-colors">
                                <Edit size={16} className="text-primary" />
                              </button>
                              <button className="p-2 hover:bg-artisan-cream rounded transition-colors">
                                <Trash2 size={16} className="text-red-500" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
