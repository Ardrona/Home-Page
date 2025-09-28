/**
 * AI-Powered Features Section - Interactive and Engaging
 */
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Zap, 
  Target, 
  Shield, 
  Cpu, 
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Gauge
} from 'lucide-react';

const aiFeatures = [
  {
    icon: Brain,
    title: "Smart Route Optimization",
    description: "AI-powered flight paths that adapt to weather, traffic, and airspace in real-time",
    metric: "40% faster delivery",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Target,
    title: "Precision Landing",
    description: "Computer vision ensures safe, accurate delivery to exact locations",
    metric: "99.9% accuracy",
    color: "from-primary to-green-400"
  },
  {
    icon: Shield,
    title: "Predictive Safety",
    description: "Machine learning prevents issues before they happen with real-time monitoring",
    metric: "Zero incidents",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Gauge,
    title: "Demand Forecasting",
    description: "AI predicts delivery patterns to optimize fleet positioning and availability",
    metric: "2x efficiency",
    color: "from-orange-500 to-red-400"
  }
];

const liveMetrics = [
  { label: "Active Drones", value: 42, icon: Clock },
  { label: "Cities Served", value: 3, icon: MapPin },
  { label: "Avg Delivery Time", value: 3.2, suffix: "min", icon: Zap }
];

export const AISection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [metrics, setMetrics] = useState(liveMetrics);

  // Simulate live metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map((metric, index) => {
        if (index === 0) {
          return { ...metric, value: Math.floor(Math.random() * 10) + 40 };
        }
        if (index === 2) {
          return { ...metric, value: Math.round((Math.random() * 2 + 2.5) * 10) / 10 };
        }
        return metric;
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % aiFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container-ardrona">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary/20 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Intelligence
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            The Future of{' '}
            <span className="text-gradient-primary">Smart Delivery</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI doesn't just deliver packages—it learns, adapts, and evolves to make every flight safer, faster, and smarter.
          </p>
        </div>

        {/* Live Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="card-premium">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-heading font-bold text-slate-900 mb-2">
                    {metric.value}{metric.suffix || ''}
                  </div>
                  <div className="text-slate-600">{metric.label}</div>
                  <div className="w-full h-1 bg-slate-200 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(Number(metric.value) / 50 * 100, 100)}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive AI Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-4">
            {aiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'card-premium border-primary/20 shadow-colored' 
                      : 'hover:shadow-card border-slate-200'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-heading font-semibold text-slate-900">
                            {feature.title}
                          </h3>
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {feature.metric}
                          </Badge>
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {isActive && (
                          <div className="mt-4 flex items-center text-primary font-medium animate-fade-in">
                            <span className="text-sm">Learn more about this technology</span>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Visual Display */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-primary font-semibold">AI Mission Control</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Neural Network Status</span>
                    <span className="text-primary font-semibold">Active</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Processing Power</span>
                    <span className="text-primary font-semibold">847 TOPS</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Real-time Decisions</span>
                    <span className="text-primary font-semibold">1,200/sec</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-heading font-bold text-primary mb-2">
                        99.94%
                      </div>
                      <div className="text-slate-300 text-sm">
                        Mission Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-primary group">
            Experience AI-Powered Delivery
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;