
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const BakeryHeader: React.FC = () => {
  const isMobile = useIsMobile();

  const menuItems = [
    { text: "Главная", href: "/" },
    { text: "Меню", href: "/menu" },
    { text: "О нас", href: "/about" },
    { text: "Контакты", href: "/contact" },
  ];

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="h-6 w-6" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-bakery-cream w-64">
        <div className="flex flex-col gap-6 pt-10">
          <div className="font-playfair text-2xl font-bold text-bakery-brown">
            Вкусняшка
          </div>
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link 
                key={item.text} 
                to={item.href}
                className="text-bakery-brown hover:text-bakery-gold transition-colors py-2 font-medium"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {isMobile && <MobileMenu />}
        
        <div className="font-playfair text-2xl md:text-3xl font-bold text-bakery-brown">
          <Link to="/">Вкусняшка</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.text} 
              to={item.href}
              className="text-bakery-brown hover:text-bakery-gold transition-colors font-medium"
            >
              {item.text}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-bakery-brown">
            <Icon name="Search" className="h-5 w-5" />
            <span className="sr-only">Поиск</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-bakery-brown">
            <Icon name="ShoppingCart" className="h-5 w-5" />
            <span className="sr-only">Корзина</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BakeryHeader;
