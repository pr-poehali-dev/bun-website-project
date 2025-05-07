
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  {
    icon: "Croissant",
    title: "Круассаны",
    description: "Хрустящие и слоеные",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-amber-50",
    iconColor: "text-bakery-gold"
  },
  {
    icon: "Candy",
    title: "Булочки и пончики",
    description: "Нежные и ароматные",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    icon: "Cookie",
    title: "Хлеб и багеты",
    description: "Домашние и хрустящие",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: "Cake",
    title: "Пироги и тарты",
    description: "Сочные и ароматные",
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    color: "bg-green-50",
    iconColor: "text-green-500"
  },
];

const BakeryCategories: React.FC = () => {
  return (
    <section className="py-16 bg-bakery-cream/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <span className="text-bakery-gold font-medium">Наш ассортимент</span>
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Категории выпечки</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Выберите из широкого ассортимента нашей свежей выпечки, приготовленной с любовью по традиционным рецептам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                  <h3 className="font-bold text-xl text-white">{category.title}</h3>
                </div>
              </div>
              <CardContent className={`p-4 flex items-center justify-between ${category.color} group-hover:bg-bakery-cream/50 transition-colors duration-300`}>
                <div className="flex items-center gap-2">
                  <Icon name={category.icon} className={`h-5 w-5 ${category.iconColor}`} />
                  <p className="text-gray-700 font-medium">{category.description}</p>
                </div>
                <Button size="sm" variant="outline" className="rounded-full p-2 h-8 w-8 border-bakery-brown">
                  <Icon name="ChevronRight" className="h-4 w-4 text-bakery-brown" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
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
