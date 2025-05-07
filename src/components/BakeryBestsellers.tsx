
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
    description: "Ароматная выпечка с корицей и ванилью",
    image: "https://images.unsplash.com/photo-1633958154878-6ead23122d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "Хит",
    rating: 4.9
  },
  {
    id: 2,
    name: "Круассан с шоколадом",
    price: 150,
    description: "Слоеное тесто с шоколадной начинкой",
    image: "https://images.unsplash.com/photo-1596915837643-3f38b74af8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7
  },
  {
    id: 3,
    name: "Ягодный пирог",
    price: 180,
    description: "Нежнейший пирог со свежими ягодами",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "Новинка",
    rating: 4.5
  },
  {
    id: 4,
    name: "Ватрушка с творогом",
    price: 135,
    description: "Традиционная выпечка с творожной начинкой",
    image: "https://images.unsplash.com/photo-1551403793-8b8aa6db5b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8
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
            <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className={`absolute top-3 right-3 ${product.badge === 'Хит' ? 'bg-bakery-gold' : 'bg-green-500'} text-white`}>
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
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
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
