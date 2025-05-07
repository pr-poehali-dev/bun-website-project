
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BakeryFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bakery-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-2xl font-bold text-bakery-gold">Вкусняшка</h3>
            <p className="text-white/80">
              Наша пекарня предлагает свежую выпечку из натуральных ингредиентов, приготовленную с любовью.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-white hover:text-bakery-gold transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-bakery-gold transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-bakery-gold transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-bakery-gold">Меню</h4>
            <ul className="space-y-3">
              {["Булочки", "Круассаны", "Хлеб", "Пироги", "Десерты"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/80 hover:text-bakery-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-bakery-gold">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-bakery-gold shrink-0 mt-0.5" />
                <span className="text-white/80">ул. Пекарская, 123, Москва, Россия</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 text-bakery-gold" />
                <span className="text-white/80">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-bakery-gold" />
                <span className="text-white/80">info@vkusnyashka.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" className="h-5 w-5 text-bakery-gold" />
                <span className="text-white/80">Пн-Вс: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-bakery-gold">Рассылка</h4>
            <p className="text-white/80 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости и специальные предложения
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-bakery-brown/50 border-bakery-gold/30 text-white placeholder:text-white/50 focus-visible:ring-bakery-gold" 
              />
              <Button className="bg-bakery-gold hover:bg-bakery-gold/80 text-bakery-brown">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {currentYear} Вкусняшка. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default BakeryFooter;
