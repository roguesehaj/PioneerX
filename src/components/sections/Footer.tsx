import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Zap,
  Shield,
  Users,
  TrendingUp
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-card-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center glow-primary">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-hero">PioneerX</h3>
                <p className="text-sm text-muted-foreground">Startup Ecosystem</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Revolutionizing the startup ecosystem with AI-powered intelligence, 
              blockchain verification, and dynamic networking.
            </p>
            <div className="flex gap-3">
              <Badge className="bg-gradient-primary text-primary-foreground">
                <Zap className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
              <Badge className="bg-gradient-success text-primary-foreground">
                <Shield className="w-3 h-3 mr-1" />
                Blockchain
              </Badge>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              {[
                "AI Pitch Analysis",
                "Blockchain Verification",
                "Smart Matching",
                "Success Analytics",
                "Global Network",
                "VR Pitch Rooms"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Users</h4>
            <ul className="space-y-3">
              {[
                "Startups",
                "Investors", 
                "Mentors",
                "Accelerators",
                "Enterprise",
                "API Access"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 mb-6">
              {[
                "About Us",
                "Careers",
                "Press",
                "Blog",
                "Privacy Policy",
                "Terms of Service"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-card-border"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-card-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-primary mb-1">$2.4B+</div>
            <div className="text-sm text-muted-foreground">Total Funding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-tech mb-1">15,000+</div>
            <div className="text-sm text-muted-foreground">Startups</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-success mb-1">850+</div>
            <div className="text-sm text-muted-foreground">Active Investors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-accent mb-1">97%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} PioneerX. All rights reserved. Built with 💜 for the future of startups.
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              99.9% Uptime
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Users className="w-3 h-3 mr-1" />
              24/7 Support
            </Badge>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}