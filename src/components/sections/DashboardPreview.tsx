import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Brain, 
  Shield, 
  Zap,
  ArrowUpRight,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const mockData = {
  startupMetrics: [
    { label: "Pitch Score", value: 87, trend: "+12%" },
    { label: "Market Fit", value: 92, trend: "+8%" },
    { label: "Success Probability", value: 78, trend: "+15%" },
    { label: "Investor Interest", value: 64, trend: "+22%" }
  ],
  recentMatches: [
    { name: "TechVentures Capital", type: "Investor", match: 94, status: "Active" },
    { name: "Sarah Chen", type: "Mentor", match: 89, status: "Connected" },
    { name: "Innovation Partners", type: "Investor", match: 82, status: "Pending" }
  ],
  aiInsights: [
    "Your pitch deck shows strong market validation metrics",
    "Consider highlighting your blockchain security features more prominently",
    "Revenue projections align well with market trends",
    "Team experience is a strong differentiator"
  ]
};

export function DashboardPreview() {
  return (
    <section id="platform" className="py-32 bg-background-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="bg-gradient-primary text-primary-foreground mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Live Platform Preview
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">Experience</span>
            <br />
            <span className="text-foreground">the Future Today</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get a glimpse of our revolutionary platform with real-time AI insights, 
            blockchain verification, and intelligent matching.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Dashboard */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Header Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: DollarSign, label: "Funding Goal", value: "$2.5M", color: "text-success" },
                  { icon: Users, label: "Investors", value: "24", color: "text-primary" },
                  { icon: Target, label: "Matches", value: "87%", color: "text-tech" },
                  { icon: TrendingUp, label: "Growth", value: "+34%", color: "text-accent" }
                ].map((stat, index) => (
                  <Card key={index} className="p-4 bg-card border-card-border">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 text-primary-foreground`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        <div className="text-lg font-bold">{stat.value}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* AI Pitch Analysis */}
              <Card className="p-6 bg-gradient-card border-card-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI Pitch Analysis</h3>
                    <p className="text-sm text-muted-foreground">Real-time intelligence and feedback</p>
                  </div>
                  <Badge className="ml-auto bg-gradient-tech text-primary-foreground">
                    Live
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockData.startupMetrics.map((metric, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">{metric.value}%</span>
                          <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                            {metric.trend}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Blockchain Verification */}
              <Card className="p-6 bg-gradient-card border-card-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center glow-tech">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Blockchain Verification</h3>
                    <p className="text-sm text-muted-foreground">Immutable transparency and trust</p>
                  </div>
                  <Badge className="ml-auto bg-gradient-success text-primary-foreground">
                    Verified
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Revenue Claims", status: "Verified", hash: "0x7d2a...f8b3" },
                    { label: "Team Credentials", status: "Verified", hash: "0x9c1e...a6d7" },
                    { label: "IP & Patents", status: "Verified", hash: "0x4f8b...c2e9" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-card/50 rounded-lg border border-card-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                        <span className="text-sm font-medium">{item.status}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="text-xs font-mono text-muted-foreground">{item.hash}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Recent Matches */}
              <Card className="p-6 bg-gradient-card border-card-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">Smart Matches</h3>
                </div>

                <div className="space-y-4">
                  {mockData.recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-card-border">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-foreground">
                          {match.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{match.name}</div>
                        <div className="text-xs text-muted-foreground">{match.type} • {match.match}% match</div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          match.status === 'Active' ? 'bg-success/10 text-success' :
                          match.status === 'Connected' ? 'bg-primary/10 text-primary' :
                          'bg-accent/10 text-accent'
                        }`}
                      >
                        {match.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Matches
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>

              {/* AI Insights */}
              <Card className="p-6 bg-gradient-card border-card-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Zap className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">AI Insights</h3>
                </div>

                <div className="space-y-3">
                  {mockData.aiInsights.map((insight, index) => (
                    <div key={index} className="flex gap-3 p-3 bg-card/30 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{insight}</span>
                    </div>
                  ))}
                </div>

                <Button variant="tech" className="w-full mt-4">
                  Get More Insights
                </Button>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button variant="hero" size="xl" className="mr-4">
              Try the Platform
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}