import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MarketplacePreview = () => {
  const products = [
    {
      id: 1,
      name: 'Artisan Coffee Beans',
      seller: 'Brooklyn Roasters',
      price: '$24.99',
      rating: 4.9,
      deliveryTime: '3-5 min',
      distance: '0.8 mi',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 2,
      name: 'Fresh Organic Produce',
      seller: 'Green Market NYC',
      price: '$18.50',
      rating: 4.8,
      deliveryTime: '2-4 min',
      distance: '0.5 mi',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 3,
      name: 'Tech Accessories',
      seller: 'Manhattan Electronics',
      price: '$45.99',
      rating: 4.7,
      deliveryTime: '4-6 min',
      distance: '1.2 mi',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&crop=center',
    },
  ];

  return (
    <section className="section-padding bg-slate-900 text-white" id="marketplace">
      <div className="container-ardrona">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Marketplace <span className="text-gradient-primary">Preview</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Browse products from local businesses and get them delivered by drone in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden group hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg text-white group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-4">
                  by {product.seller}
                </p>

                {/* Rating and Details */}
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{product.deliveryTime}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{product.distance}</span>
                  </div>
                </div>

                {/* Order Button */}
                <Button className="w-full btn-primary">
                  🚁 Order via Drone
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More CTA */}
        <div className="text-center">
          <Button className="btn-hero-ghost">
            Browse Full Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;