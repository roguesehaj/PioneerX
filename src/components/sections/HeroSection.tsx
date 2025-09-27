import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  const [activeTypewriter, setActiveTypewriter] = useState<
    "first" | "second" | null
  >("first");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background-secondary/90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tech/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="mb-8 animate-slide-up">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium glow-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI + Blockchain + VR Platform
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            <span className="text-gradient-hero">PioneerX</span>
            <br />
            <TypewriterText
              text="The Future of"
              speed={120}
              delay={1000}
              className="text-foreground"
              showCursor={true}
              cursorChar="|"
              isActive={activeTypewriter === "first"}
              onComplete={() => setActiveTypewriter("second")}
            />
            <br />
            <TypewriterText
              text="Startup Success"
              speed={120}
              delay={2500}
              className="text-gradient-tech"
              showCursor={true}
              cursorChar="|"
              isActive={activeTypewriter === "second"}
              onComplete={() => setActiveTypewriter(null)}
            />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Transform your startup journey with AI-powered pitch intelligence,
            blockchain-verified transparency, and dynamic investor matching.{" "}
            <span className="text-gradient-primary font-semibold">
              Join the revolution.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Launch Your Startup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in">
            <Card className="p-6 bg-gradient-card border-card-border hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">AI Pitch Intelligence</h3>
              </div>
              <p className="text-muted-foreground">
                Get real-time feedback and success predictions for your pitch
                with our advanced AI engine.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  95% Accuracy
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Real-time
                </Badge>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-card-border hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center glow-tech">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">
                  Blockchain Verification
                </h3>
              </div>
              <p className="text-muted-foreground">
                Transparent, tamper-proof verification of startup metrics and
                investor credentials.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Immutable
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Transparent
                </Badge>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-card-border hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center glow-accent">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Smart Matching</h3>
              </div>
              <p className="text-muted-foreground">
                AI-powered connections between startups, investors, and mentors
                based on deep compatibility analysis.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Global Network
                </Badge>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-card-border">
            <div className="text-center">
              <AnimatedCounter
                value={2.4}
                prefix="$"
                suffix="B+"
                duration={2500}
                decimals={1}
                className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2"
              />
              <div className="text-sm text-muted-foreground">
                Funding Raised
              </div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={15}
                suffix="K+"
                duration={2000}
                className="text-3xl md:text-4xl font-bold text-gradient-tech mb-2"
              />
              <div className="text-sm text-muted-foreground">Startups</div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={850}
                suffix="+"
                duration={1800}
                className="text-3xl md:text-4xl font-bold text-gradient-success mb-2"
              />
              <div className="text-sm text-muted-foreground">Investors</div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={97}
                suffix="%"
                duration={2200}
                className="text-3xl md:text-4xl font-bold text-gradient-hero mb-2"
              />
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
