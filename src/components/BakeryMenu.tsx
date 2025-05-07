
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const menuCategories = [
  { id: "all", label: "Все" },
  { id: "breads", label: "Хлеб" },
  { id: "pastries", label: "Выпечка" },
  { id: "sweets", label: "Сладости" },
  { id: "pies", label: "Пироги" },
];

const menuItems = [
  {
    id: 1,
    name: "Французский багет",
    price: 120,
    description: "Классический французский багет с хрустящей корочкой",
    image: "https://images.unsplash.com/photo-1568471173242-461f0a730452?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "breads",
  },
  {
    id: 2,
    name: "Круассан классический",
    price: 160,
    description: "Воздушный слоеный круассан с маслом",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pastries",
    isNew: true,
  },
  {
    id: 3,
    name: "Яблочный штрудель",
    price: 180,
    description: "Классический штрудель с яблоками и корицей",
    image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "sweets",
  },
  {
    id: 4,
    name: "Булочка с корицей",
    price: 150,
    description: "Мягкая булочка с корицей и глазурью",
    image: "https://images.unsplash.com/photo-1509365390695-33acd7879ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pastries",
    isPopular: true,
  },
  {
    id: 5,
    name: "Ржаной хлеб",
    price: 110,
    description: "Традиционный ржаной хлеб на закваске",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "breads",
  },
  {
    id: 6,
    name: "Вишневый пирог",
    price: 220,
    description: "Сочный пирог с вишневой начинкой",
    image: "https://images.unsplash.com/photo-1652788058783-be623192ab6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pies",
    isPopular: true,
  },
  {
    id: 7,
    name: "Шоколадный маффин",
    price: 140,
    description: "Нежный маффин с бельгийским шоколадом",
    image: "https://images.unsplash.com/photo-1586985290301-8db40143d525?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "sweets",
  },
  {
    id: 8,
    name: "Киш с овощами",
    price: 240,
    description: "Французский открытый пирог с овощами",
    image: "https://images.unsplash.com/photo-1619994121345-b61cd21b9777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pies",
    isNew: true,
  },
];

const BakeryMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-bakery-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <span className="text-bakery-gold font-medium">Свежая выпечка</span>
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Наше меню</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Выбирайте из нашего разнообразного ассортимента свежей выпечки, приготовленной с любовью
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white shadow-md rounded-full p-1">
              {menuCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-bakery-brown data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.isNew && (
                        <Badge className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold">
                          Новинка
                        </Badge>
                      )}
                      {item.isPopular && (
                        <Badge className="absolute top-3 right-3 bg-bakery-gold text-white px-3 py-1 text-xs font-semibold">
                          Хит продаж
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-bakery-brown">{item.name}</h3>
                        <p className="font-bold text-bakery-gold text-lg">{item.price} ₽</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <Button 
                        className="w-full bg-bakery-cream text-bakery-brown hover:bg-bakery-gold hover:text-white transition-colors"
                        size="sm"
                      >
                        В корзину
                        <Icon name="ShoppingCart" className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BakeryMenu;
