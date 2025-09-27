import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, Zap, Shield } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-card-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* <img src="'/Users/sbsxngh/Developer/MARK 85/PioneerX/src/components/layout/logoPioneerX.png'" className="w-10 h-10" /> */}
              {/* <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center glow-primary">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div> */}
              <div className="absolute -top-1 -right-1">
                {/* <Badge variant="secondary" className="text-xs bg-gradient-accent text-accent-foreground px-2 py-0.5">
                  AI
                </Badge> */}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-hero">PioneerX</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#platform" className="text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-tech" />
              <span className="text-sm font-medium text-tech">AI Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Blockchain Verified</span>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-card-border pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#platform" className="text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <div className="flex items-center gap-2 pt-2">
                <Zap className="w-4 h-4 text-tech" />
                <span className="text-sm font-medium text-tech">AI Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">Blockchain Verified</span>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="hero" className="justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}