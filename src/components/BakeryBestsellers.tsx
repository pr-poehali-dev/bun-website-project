
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "Булочка с корицей",
    price: 120,
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "Хит",
    rating: 4.9,
    description: "Нежная булочка с ароматной корицей"
  },
  {
    id: 2,
    name: "Круассан с шоколадом",
    price: 150,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    description: "Слоеный круассан с шоколадной начинкой"
  },
  {
    id: 3,
    name: "Выпечка на заказ",
    price: 110,
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "Новинка",
    rating: 4.5,
    description: "Индивидуальные заказы по вашим пожеланиям"
  },
  {
    id: 4,
    name: "Ватрушка с творогом",
    price: 135,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    description: "Традиционная ватрушка со сладким творогом"
  }
];

const BakeryBestsellers: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Хиты продаж</h2>
            <p className="text-gray-600 mt-2">Самые популярные позиции нашей пекарни</p>
          </div>
          <Button variant="outline" className="hidden md:flex border-bakery-brown text-bakery-brown hover:bg-bakery-cream">
            Все товары
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow hover-scale">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-3 right-3 bg-bakery-gold text-white font-medium">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg text-bakery-brown">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="h-4 w-4 text-bakery-gold" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1 h-10">{product.description}</p>
                <p className="text-bakery-brown font-semibold mt-2">{product.price} ₽</p>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                <Button className="w-full bg-bakery-cream text-bakery-brown hover:bg-bakery-gold hover:text-white transition-colors">
                  В корзину
                  <Icon name="ShoppingCart" className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-cream">
            Все товары
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BakeryBestsellers;
