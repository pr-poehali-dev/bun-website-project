
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  {
    icon: "Croissant",
    title: "Круассаны",
    description: "Хрустящие и слоеные",
    image: "https://images.unsplash.com/photo-1586439702132-28d8dd3759d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-yellow-50",
    iconColor: "text-bakery-gold"
  },
  {
    icon: "Candy",
    title: "Сладкие булочки",
    description: "Нежные и ароматные",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-red-50",
    iconColor: "text-red-400"
  },
  {
    icon: "Cookie",
    title: "Хлеб",
    description: "Домашний и полезный",
    image: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: "Cake",
    title: "Пироги",
    description: "Сытные и аппетитные",
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722969?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-green-50",
    iconColor: "text-green-500"
  },
];

const BakeryCategories: React.FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Наши категории</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите из широкого ассортимента нашей свежей выпечки, приготовленной с любовью
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="font-semibold text-lg text-white">{category.title}</h3>
                </div>
              </div>
              <CardContent className={`p-4 flex flex-col items-center text-center gap-2 ${category.color}`}>
                <div className="flex items-center gap-2">
                  <Icon name={category.icon} className={`h-5 w-5 ${category.iconColor}`} />
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-bakery-brown hover:bg-bakery-chocolate text-white">
            Все категории
            <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BakeryCategories;
