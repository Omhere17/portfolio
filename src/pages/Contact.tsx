import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Download, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    // Clear errors if validation passes
    setErrors({});
    
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Section - Contact Info */}
          <div className="space-y-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary">
              Reach out to me.
            </h1>
            
            <div className="space-y-10">
              {/* Email */}
              <a 
                href="mailto:omtiwari.pune@gmail.com"
                className="flex items-center gap-4 text-lg hover:opacity-80 transition-opacity group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 640 640" fill="currentColor">
                    <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                  </svg>
                </div>
                <span>omtiwari.pune@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/om-tiwari-6b100627b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:opacity-80 transition-opacity group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 640 640" fill="currentColor">
                    <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" className="text-primary"/>
                  </svg>
                </div>
                <span>Om_tiwari</span>
              </a>

              {/* Behance */}
              <a 
                href="https://www.behance.net/omtiwari2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:opacity-80 transition-opacity group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 640 640" fill="currentColor">
                    <path d="M251.3 382.4C268.5 382.4 282.5 376.3 282.5 357C282.5 337.3 270.8 329.6 252.2 329.5L206.2 329.5L206.2 382.4L251.3 382.4zM245.9 252.8L206.3 252.8L206.3 297.6L249 297.6C264.1 297.6 274.8 291 274.8 274.7C274.8 257 261.1 252.8 245.9 252.8zM375.4 327.6L437.6 327.6C435.9 309.1 426.3 297.9 407.1 297.9C388.8 297.9 376.6 309.3 375.4 327.6zM480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96zM445.5 249L367.7 249L367.7 230.1L445.5 230.1L445.5 249zM289.7 307.7C313.3 314.4 324.7 335.2 324.7 359.3C324.7 398.3 292 415 257.1 415.2L164 415.2L164 223.2L254.5 223.2C287.4 223.2 315.9 232.5 315.9 270.7C315.9 290 306.9 299.5 289.7 307.7zM408.4 269.1C451.9 269.1 476 303.4 476 344.5C476 346.1 475.9 347.8 475.8 349.5C475.8 350.3 475.7 351 475.7 351.7L375.5 351.7C375.5 373.9 387.2 387 409.6 387C421.2 387 436.1 380.8 439.8 368.9L473.5 368.9C463.1 400.8 441.6 415.7 408.4 415.7C364.6 415.7 337.3 386 337.3 342.7C337.3 300.9 366 269.1 408.4 269.1z" className="text-primary"/>
                  </svg>
                </div>
                <span>omtiwari2</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span>Pimpri, Pune</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base gap-2"
              asChild
            >
              <a href="/Resume_OmTiwari.pdf" download="Resume_OmTiwari.pdf">
                Resume
                <Download className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right Section - Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Got a project? Let's Talk.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-14 rounded-2xl text-base"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 rounded-2xl text-base"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[200px] rounded-2xl text-base resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full px-12 py-6 text-base gap-2"
                >
                  Submit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Contact;
