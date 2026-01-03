/**
 * AI-Powered Features Section - Interactive and Engaging
 */
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useDescriptions } from '@/hooks/use-descriptions';
import { 
  Brain, 
  Target, 
  Shield, 
  Cpu, 
  Sparkles,
  ArrowRight,
  MapPin,
  Gauge
} from 'lucide-react';

type AIDescription = {
  ai: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    features: { title: string; description: string; metric?: string }[];
    liveMetrics: { label: string; value: number | string }[];
  };
};

const getAIFeatures = (descriptions: AIDescription) => [
  {
    icon: Brain,
    title: descriptions.ai.features[0].title,
    description: descriptions.ai.features[0].description,
    metric: descriptions.ai.features[0].metric,
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Target,
    title: descriptions.ai.features[1].title,
    description: descriptions.ai.features[1].description,
    metric: descriptions.ai.features[1].metric,
    color: "from-primary to-green-400"
  },
  {
    icon: Shield,
    title: descriptions.ai.features[2].title,
    description: descriptions.ai.features[2].description,
    metric: descriptions.ai.features[2].metric,
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Gauge,
    title: descriptions.ai.features[3].title,
    description: descriptions.ai.features[3].description,
    metric: descriptions.ai.features[3].metric,
    color: "from-orange-500 to-red-400"
  },
  {
    icon: MapPin,
    title: descriptions.ai.features[4].title,
    description: descriptions.ai.features[4].description,
    metric: descriptions.ai.features[4].metric,
    color: "from-emerald-500 to-teal-400"
  }
];

export const AISection: React.FC = () => {
  const descriptions = useDescriptions() as AIDescription;
  const [activeFeature, setActiveFeature] = useState(0);
  const aiFeatures = getAIFeatures(descriptions);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % aiFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [aiFeatures.length]);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container-ardrona">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary/20 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            {descriptions.ai.badge}
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            {descriptions.ai.title.split('Smart Delivery').map((part, index) => 
              index === 0 ? part : (
                <span key={index}>
                  <span className="text-gradient-primary">Smart Delivery</span>
                </span>
              )
            )}
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {descriptions.ai.subtitle}
          </p>
        </div>

        {/* Interactive AI Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Feature List - Spans 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-primary group">
            {descriptions.ai.cta}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;