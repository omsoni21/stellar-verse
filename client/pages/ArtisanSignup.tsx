import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ArtisanSignup() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    craftType: "",
    experience: "",
    aadharFile: null as File | null,
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, aadharFile: e.target.files![0] }));
    }
  };

  const handleNext = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const handlePrevious = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormStep(4);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-artisan-cream to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-primary text-sm font-semibold">✨ Start Your Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join as an Artisan Seller
            </h1>
            <p className="text-lg text-foreground/70 max-w-lg mx-auto">
              Get verified and start earning fair income. Simple process, powerful tools, global customers.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12 flex justify-between">
            {[
              { step: 1, label: "Account" },
              { step: 2, label: "Craft" },
              { step: 3, label: "Verify" },
              { step: 4, label: "Done" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all ${
                    formStep >= item.step
                      ? "bg-primary text-white shadow-lg"
                      : "bg-border text-foreground/50"
                  }`}
                >
                  {formStep > item.step ? <CheckCircle2 size={20} /> : item.step}
                </div>
                <p className={`text-xs text-center ${
                  formStep >= item.step ? "text-primary font-semibold" : "text-foreground/50"
                }`}>
                  {item.label}
                </p>
                {item.step < 4 && (
                  <div
                    className={`h-1 w-full mx-2 mt-3 transition-colors ${
                      formStep > item.step ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          {formStep < 4 ? (
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="text-2xl">
                  {formStep === 1 && "Basic Information"}
                  {formStep === 2 && "Your Craft"}
                  {formStep === 3 && "Verification"}
                </CardTitle>
                <CardDescription className="text-base">
                  {formStep === 1 && "Tell us about yourself"}
                  {formStep === 2 && "Share your expertise"}
                  {formStep === 3 && "Verify your identity"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1 */}
                  {formStep === 1 && (
                    <>
                      <div>
                        <Label htmlFor="fullName" className="text-foreground font-semibold">
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-semibold">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          required
                          className="mt-2"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 2 */}
                  {formStep === 2 && (
                    <>
                      <div>
                        <Label htmlFor="craftType" className="text-foreground font-semibold">
                          Type of Craft
                        </Label>
                        <select
                          id="craftType"
                          name="craftType"
                          value={formData.craftType}
                          onChange={handleChange}
                          required
                          className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select your craft</option>
                          <option value="pottery">Pottery & Ceramics</option>
                          <option value="bamboo">Bamboo Crafts</option>
                          <option value="painting">Hand Paintings</option>
                          <option value="textiles">Embroidered Textiles</option>
                          <option value="wood">Wooden Carvings</option>
                          <option value="jewelry">Jewelry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="experience" className="text-foreground font-semibold">
                          Years of Experience
                        </Label>
                        <Input
                          id="experience"
                          name="experience"
                          type="number"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="e.g., 5"
                          min="0"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bio" className="text-foreground font-semibold">
                          Tell About Your Craft
                        </Label>
                        <Textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          placeholder="Share your story, passion, and what makes your craft special..."
                          className="mt-2 min-h-32"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 3 */}
                  {formStep === 3 && (
                    <>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <p className="text-sm text-blue-700 font-medium">
                          <strong>Verification Required:</strong> Upload a clear photo of your government-issued ID (Aadhaar, Passport, or PAN card).
                        </p>
                        <p className="text-xs text-blue-600 mt-2">
                          Your details will be kept secure and used only for verification purposes.
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="aadharFile" className="text-foreground font-semibold">
                          Upload Government ID
                        </Label>
                        <Input
                          id="aadharFile"
                          name="aadharFile"
                          type="file"
                          onChange={handleFileChange}
                          accept="image/*,application/pdf"
                          required
                          className="mt-2"
                        />
                        <p className="text-xs text-foreground/60 mt-2">
                          Accepted: JPG, PNG, PDF (Max 5MB)
                        </p>
                        {formData.aadharFile && (
                          <p className="text-sm text-green-600 mt-3 font-medium">
                            ✓ {formData.aadharFile.name}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {/* Navigation */}
                  <div className="flex gap-4 pt-6">
                    {formStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex-1"
                      >
                        Back
                      </Button>
                    )}
                    {formStep < 3 ? (
                      <Button type="button" onClick={handleNext} className="flex-1 group">
                        Next <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button type="submit" className="flex-1 group">
                        Create Account <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            /* Success Screen */
            <Card className="border-green-200 bg-gradient-to-b from-green-50 to-white">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="text-white" size={32} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-green-700 mb-3">
                  Welcome to KarigarHub! 🎉
                </h2>
                <p className="text-green-700/80 mb-8 max-w-md mx-auto leading-relaxed">
                  Your account has been created successfully. Our verification team will review your ID within 24 hours.
                </p>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
                  <p className="text-sm font-semibold text-green-700 mb-4">Next Steps:</p>
                  <ul className="text-sm text-green-700/80 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-600" />
                      <span>ID verification within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-600" />
                      <span>Complete your seller profile</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-600" />
                      <span>Upload your first products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-600" />
                      <span>Start receiving orders</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-foreground/60 mb-6">
                  Check your email for the verification link and seller guidelines.
                </p>

                <Button asChild size="lg">
                  <Link to="/">Back to Home</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Login Link */}
          {formStep < 4 && (
            <p className="text-center mt-8 text-foreground/70">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Login here
              </Link>
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
