
import React from 'react';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: "Utensils",
    title: "Свежая выпечка",
    description: "Выпекаем каждый день, чтобы вы могли насладиться свежей выпечкой"
  },
  {
    icon: "Leaf",
    title: "Натуральные ингредиенты",
    description: "Используем только натуральные ингредиенты без искусственных добавок"
  },
  {
    icon: "Award",
    title: "Мастерство пекарей",
    description: "Наши пекари - настоящие профессионалы с многолетним опытом"
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем свежую выпечку за 60 минут по всему городу"
  }
];

const BakeryFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <span className="text-bakery-gold font-medium">Почему нас выбирают</span>
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Наши преимущества</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            В нашей пекарне традиции встречаются с инновациями, а качество всегда на первом месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center group">
              <div className="p-4 bg-bakery-cream rounded-full shadow-md mb-5 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-bakery-gold group-hover:text-white">
                <Icon name={feature.icon} className="h-8 w-8 text-bakery-brown group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-bakery-brown mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-bakery-light rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-bakery-gold font-medium">Традиции выпечки</span>
              <h3 className="text-2xl md:text-3xl font-bold text-bakery-brown mb-4 mt-1">
                Наш процесс приготовления
              </h3>
              <p className="text-gray-600 mb-6">
                Мы следуем старинным рецептам и используем современные технологии, чтобы создавать неповторимый вкус нашей выпечки. Каждое изделие проходит строгий контроль качества.
              </p>
              <ul className="space-y-4">
                {[
                  "Тщательный отбор натуральных ингредиентов",
                  "Ручное замешивание теста по традиционным рецептам",
                  "Длительная ферментация теста для лучшего вкуса",
                  "Выпечка в специальных печах с правильной температурой"
                ].map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-bakery-gold text-white text-xs font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Процесс приготовления выпечки" 
                className="rounded-xl shadow-lg object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-bakery-gold p-5 rounded-lg shadow-lg">
                <p className="text-white font-playfair font-bold text-xl">20+ лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryFeatures;
