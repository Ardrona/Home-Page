import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDescriptions } from '@/hooks/use-descriptions';

const MarketplacePreview = () => {
  const descriptions = useDescriptions();
  
  const products = [
    {
      id: 1,
      name: descriptions.marketplace.products[0].name,
      seller: descriptions.marketplace.products[0].seller,
      price: descriptions.marketplace.products[0].price,
      rating: descriptions.marketplace.products[0].rating,
      deliveryTime: descriptions.marketplace.products[0].deliveryTime,
      distance: descriptions.marketplace.products[0].distance,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-amber-500/20 to-amber-600/10',
    },
    {
      id: 2,
      name: descriptions.marketplace.products[1].name,
      seller: descriptions.marketplace.products[1].seller,
      price: descriptions.marketplace.products[1].price,
      rating: descriptions.marketplace.products[1].rating,
      deliveryTime: descriptions.marketplace.products[1].deliveryTime,
      distance: descriptions.marketplace.products[1].distance,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-green-500/20 to-green-600/10',
    },
    {
      id: 3,
      name: descriptions.marketplace.products[2].name,
      seller: descriptions.marketplace.products[2].seller,
      price: descriptions.marketplace.products[2].price,
      rating: descriptions.marketplace.products[2].rating,
      deliveryTime: descriptions.marketplace.products[2].deliveryTime,
      distance: descriptions.marketplace.products[2].distance,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-blue-500/20 to-blue-600/10',
    },
  ];

  return (
    <section className="section-padding gradient-hero text-white relative overflow-hidden" id="marketplace">
      {/* Rich background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-ardrona relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            {descriptions.marketplace.title.split(' ').map((word, index) => 
              word === 'Preview' ? (
                <span key={index} className="text-gradient-primary">{word}</span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {descriptions.marketplace.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card-glass group hover:bg-white/20 text-white animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Floating price tag */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-sm animate-bounce-subtle">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg text-white group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  by {product.seller}
                </p>

                {/* Enhanced Rating and Details */}
                <div className="flex items-center justify-between text-sm text-slate-400 mb-6 space-x-4">
                  <div className="flex items-center bg-white/10 rounded-full px-2 py-1 backdrop-blur-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-yellow-300 font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center bg-white/10 rounded-full px-2 py-1 backdrop-blur-sm">
                    <Clock className="w-4 h-4 text-primary mr-1" />
                    <span className="text-primary font-medium">{product.deliveryTime}</span>
                  </div>
                  <div className="flex items-center bg-white/10 rounded-full px-2 py-1 backdrop-blur-sm">
                    <MapPin className="w-4 h-4 text-slate-300 mr-1" />
                    <span>{product.distance}</span>
                  </div>
                </div>

                {/* Enhanced Order Button */}
                <Button className="w-full btn-primary group/btn animate-shimmer bg-gradient-to-r from-primary via-primary-hover to-primary bg-[length:200%_100%]">
                  🚁 Order via Drone
                  <div className="ml-2 w-4 h-4 rounded-full bg-white/20 animate-pulse group-hover/btn:bg-white/40 transition-colors duration-300"></div>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Browse More CTA */}
        <div className="text-center">
          <Button className="btn-hero-ghost group animate-float">
            {descriptions.marketplace.cta}
            <div className="ml-2 flex space-x-1">
              <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;