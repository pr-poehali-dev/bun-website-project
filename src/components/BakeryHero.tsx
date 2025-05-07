
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BakeryHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bakery-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1 bg-bakery-gold/20 rounded-full">
              <p className="text-bakery-brown font-medium text-sm">Свежая выпечка каждый день</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bakery-brown leading-tight">
              Вкус, который <br className="hidden md:block" />
              <span className="text-bakery-gold">покоряет сердца</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Наши булочки и пирожные готовятся вручную из натуральных ингредиентов по семейным рецептам, передаваемым из поколения в поколение.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" className="bg-bakery-brown hover:bg-bakery-chocolate text-white shadow-lg">
                Заказать сейчас
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-cream/70">
                Наше меню
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <div className="bg-bakery-gold/20 p-1.5 rounded-full">
                  <Icon name="Wheat" className="h-4 w-4 text-bakery-brown" />
                </div>
                <span className="text-sm font-medium">Натуральные ингредиенты</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-bakery-gold/20 p-1.5 rounded-full">
                  <Icon name="Clock" className="h-4 w-4 text-bakery-brown" />
                </div>
                <span className="text-sm font-medium">Доставка за 60 минут</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-bakery-gold/20 absolute -top-10 -right-10 w-40 h-40 z-0"></div>
            <div className="aspect-square rounded-full bg-bakery-cream absolute -bottom-10 -left-10 w-32 h-32 z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593248982330-c1c163244034?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Свежая выпечка от нашей пекарни" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Icon name="ShieldCheck" className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-bakery-brown">100% Натуральные</p>
                <p className="text-xs text-gray-600">Ингредиенты высшего качества</p>
              </div>
            </div>

            <div className="absolute top-10 -right-6 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <Icon name="Clock4" className="h-5 w-5 text-bakery-gold" />
                <div>
                  <p className="font-bold text-bakery-brown">Свежая выпечка</p>
                  <p className="text-xs text-gray-600">Каждое утро в 6:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryHero;
