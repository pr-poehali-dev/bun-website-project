
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  {
    icon: "Croissant",
    title: "Круассаны",
    description: "Хрустящие и слоеные",
    color: "bg-yellow-50",
    iconColor: "text-bakery-gold",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: "Candy",
    title: "Сладкие булочки",
    description: "Нежные и ароматные",
    color: "bg-red-50",
    iconColor: "text-red-400",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: "Cookie",
    title: "Хлеб",
    description: "Домашний и полезный",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: "Cake",
    title: "Пироги",
    description: "Сытные и аппетитные",
    color: "bg-green-50",
    iconColor: "text-green-500",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
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
            <Card key={category.title} className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden hover-scale">
              <div className="relative h-40">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-semibold text-lg text-white">{category.title}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </div>
              <CardContent className={`p-4 ${category.color}`}>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-full ${category.color}`}>
                    <Icon name={category.icon} className={`h-5 w-5 ${category.iconColor}`} />
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <Icon name="ChevronRight" className="h-5 w-5 text-bakery-brown" />
                  </Button>
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
