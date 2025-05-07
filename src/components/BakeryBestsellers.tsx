
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "Булочки с корицей",
    price: 140,
    description: "Ароматные булочки с корицей и сахарной глазурью",
    image: "https://images.unsplash.com/photo-1509365390695-33acd7879ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "Хит",
    rating: 4.9
  },
  {
    id: 2,
    name: "Круассан с шоколадом",
    price: 160,
    description: "Слоеный круассан с начинкой из бельгийского шоколада",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7
  },
  {
    id: 3,
    name: "Черничный пирог",
    price: 180,
    description: "Домашний пирог с черникой и хрустящей корочкой",
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "Новинка",
    rating: 4.5
  },
  {
    id: 4,
    name: "Французский багет",
    price: 120,
    description: "Хрустящий багет по традиционному французскому рецепту",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8
  }
];

const BakeryBestsellers: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-bakery-gold font-medium">Самые популярные</span>
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mt-1">Наши хиты продаж</h2>
            <p className="text-gray-600 mt-2 max-w-xl">Попробуйте нашу лучшую выпечку, которую выбирают наши постоянные клиенты</p>
          </div>
          <Button variant="outline" className="hidden md:flex border-bakery-brown text-bakery-brown hover:bg-bakery-cream">
            Все товары
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-[240px]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className={`absolute top-3 right-3 ${product.badge === 'Хит' ? 'bg-bakery-gold' : 'bg-green-500'} text-white px-3 py-1 text-xs font-semibold`}>
                    {product.badge}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-bakery-brown">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="h-4 w-4 text-bakery-gold" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
                <p className="text-bakery-brown font-bold text-lg mt-2">{product.price} ₽</p>
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
