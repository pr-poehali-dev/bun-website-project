
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
    iconColor: "text-bakery-gold"
  },
  {
    icon: "Candy",
    title: "Сладкие булочки",
    description: "Нежные и ароматные",
    color: "bg-red-50",
    iconColor: "text-red-400"
  },
  {
    icon: "Cookie",
    title: "Хлеб",
    description: "Домашний и полезный",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: "Cake",
    title: "Пироги",
    description: "Сытные и аппетитные",
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
            <Card key={category.title} className={`${category.color} border-none shadow-sm hover:shadow-md transition-shadow`}>
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className={`p-3 rounded-full ${category.color}`}>
                  <Icon name={category.icon} className={`h-8 w-8 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-bakery-brown">{category.title}</h3>
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
