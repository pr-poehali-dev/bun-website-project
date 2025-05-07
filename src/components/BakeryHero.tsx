
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BakeryHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bakery-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex gap-2">
              <span className="px-3 py-1 bg-bakery-gold/20 text-bakery-gold rounded-full text-sm font-medium">✨ Натуральная выпечка</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bakery-brown leading-tight">
              Свежая выпечка <wbr />с&nbsp;любовью каждый&nbsp;день
            </h1>
            <p className="text-lg text-gray-700 md:pr-12">
              Наши булочки и выпечка готовятся вручную из натуральных ингредиентов по традиционным рецептам. Каждый кусочек — это маленькое наслаждение.
            </p>
            <div className="flex gap-4 mt-4">
              <Button className="bg-bakery-brown hover:bg-bakery-chocolate text-white">
                Заказать сейчас
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-cream">
                Смотреть меню
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <Icon name="Wheat" className="h-5 w-5 text-bakery-gold" />
                <span className="text-sm font-medium">Натуральные ингредиенты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5 text-bakery-gold" />
                <span className="text-sm font-medium">Свежая выпечка</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-bakery-gold/20 absolute -top-10 -right-10 w-40 h-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1613929231151-2cb92c6ce9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Свежие булочки с корицей" 
              className="rounded-2xl shadow-xl relative z-10"
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 hover-scale">
              <div className="bg-bakery-gold/20 rounded-full p-2">
                <Icon name="ThumbsUp" className="h-5 w-5 text-bakery-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-bakery-brown">Более 1000</p>
                <p className="text-xs text-gray-500">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryHero;
