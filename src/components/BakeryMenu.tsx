
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
    price: 100,
    description: "Классический французский багет с хрустящей корочкой",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "breads",
  },
  {
    id: 2,
    name: "Круассан классический",
    price: 120,
    description: "Воздушный слоеный круассан с маслом",
    image: "https://images.unsplash.com/photo-1592220858235-6901b8b5db38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pastries",
    isNew: true,
  },
  {
    id: 3,
    name: "Яблочный штрудель",
    price: 160,
    description: "Классический штрудель с яблоками и корицей",
    image: "https://images.unsplash.com/photo-1621743478914-cc1d2d15596e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "sweets",
  },
  {
    id: 4,
    name: "Булочка с корицей",
    price: 140,
    description: "Мягкая булочка с корицей и глазурью",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pastries",
    isPopular: true,
  },
  {
    id: 5,
    name: "Ржаной хлеб",
    price: 90,
    description: "Традиционный ржаной хлеб на закваске",
    image: "https://images.unsplash.com/photo-1522203452678-5a6e3bb7555e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "breads",
  },
  {
    id: 6,
    name: "Пирог с вишней",
    price: 190,
    description: "Сочный пирог с вишневой начинкой",
    image: "https://images.unsplash.com/photo-1621234359457-e9442b41882f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pies",
    isPopular: true,
  },
  {
    id: 7,
    name: "Шоколадный маффин",
    price: 150,
    description: "Нежный маффин с бельгийским шоколадом",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "sweets",
  },
  {
    id: 8,
    name: "Мясной пирог",
    price: 210,
    description: "Сытный пирог с мясной начинкой",
    image: "https://images.unsplash.com/photo-1662047102608-a6f046c3a8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Наше меню</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выбирайте из нашего разнообразного ассортимента свежей выпечки, приготовленной с любовью
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-bakery-cream/50 p-1">
              {menuCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-bakery-brown data-[state=active]:text-white"
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
                  <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {item.isNew && (
                        <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                          Новинка
                        </Badge>
                      )}
                      {item.isPopular && (
                        <Badge className="absolute top-3 right-3 bg-bakery-gold text-white">
                          Хит продаж
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg text-bakery-brown">{item.name}</h3>
                        <p className="font-bold text-bakery-brown">{item.price} ₽</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <Button 
                        className="w-full bg-bakery-cream text-bakery-brown hover:bg-bakery-gold hover:text-white transition-colors mt-2"
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
