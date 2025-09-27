import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Shield, 
  Users, 
  TrendingUp, 
  Zap, 
  Lock, 
  Globe, 
  Target,
  BarChart3,
  Rocket,
  Eye,
  Network
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Pitch Intelligence Engine",
    description: "Advanced machine learning analyzes pitch patterns, market viability, and success probability in real-time.",
    gradient: "bg-gradient-primary",
    glow: "glow-primary",
    stats: [
      { label: "Success Prediction Accuracy", value: 95 },
      { label: "Pitch Analysis Speed", value: 98 },
      { label: "Market Validation Score", value: 89 }
    ],
    features: ["Real-time feedback", "Market analysis", "Success scoring", "Competitive insights"]
  },
  {
    icon: Shield,
    title: "Blockchain Verification",
    description: "Immutable verification of startup metrics, revenue claims, and investor credentials through smart contracts.",
    gradient: "bg-gradient-success",
    glow: "glow-tech",
    stats: [
      { label: "Data Integrity", value: 100 },
      { label: "Fraud Prevention", value: 97 },
      { label: "Transparency Score", value: 99 }
    ],
    features: ["Smart contracts", "Immutable records", "Fraud prevention", "Transparent metrics"]
  },
  {
    icon: Users,
    title: "Dynamic Matching Platform",
    description: "AI-powered connections between startups, investors, and mentors based on compatibility and success potential.",
    gradient: "bg-gradient-tech",
    glow: "glow-accent",
    stats: [
      { label: "Match Accuracy", value: 92 },
      { label: "Network Growth", value: 156 },
      { label: "Success Rate", value: 87 }
    ],
    features: ["AI matching", "Global network", "Success tracking", "Milestone-based funding"]
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-tech/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="bg-gradient-tech text-primary-foreground mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary Technology
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">Three Pillars</span>
            <br />
            <span className="text-foreground">of Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform combines cutting-edge AI, blockchain security, and intelligent networking 
            to revolutionize the startup ecosystem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative p-8 bg-gradient-card border-card-border hover:scale-105 transition-all duration-500 group overflow-hidden">
              {/* Background Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${feature.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center ${feature.glow} mb-6 relative z-10`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 relative z-10">{feature.title}</h3>
              <p className="text-muted-foreground mb-8 relative z-10">{feature.description}</p>

              {/* Stats */}
              <div className="space-y-4 mb-8 relative z-10">
                {feature.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-semibold">{stat.value}%</span>
                    </div>
                    <Progress value={stat.value} className="h-2" />
                  </div>
                ))}
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-2 mb-8 relative z-10">
                {feature.features.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full relative z-10 group-hover:bg-card group-hover:border-primary/30">
                Learn More
                <TrendingUp className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-12">
            <span className="text-gradient-primary">Seamlessly Integrated</span> Ecosystem
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              {/* <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center glow-primary animate-pulse-glow">
                <Rocket className="w-12 h-12 text-primary-foreground" />
              </div> */}
              {/* <div className="text-center mt-4">
                <div className="text-lg font-bold text-gradient-hero">PioneerX</div>
                <div className="text-sm text-muted-foreground">Core Platform</div>
              </div> */}
            </div>

            {/* Surrounding Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative">
              {[
                { icon: Brain, label: "AI Engine", color: "text-primary" },
                { icon: Shield, label: "Blockchain", color: "text-success" },
                { icon: Network, label: "Matching", color: "text-tech" },
                { icon: BarChart3, label: "Analytics", color: "text-accent" },
                { icon: Globe, label: "Global Network", color: "text-primary-glow" },
                { icon: Eye, label: "Transparency", color: "text-success" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-6">
                  <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center border border-card-border mb-4 hover:scale-110 transition-transform">
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}