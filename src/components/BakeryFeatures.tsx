
import React from 'react';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: "Clock",
    title: "Свежая выпечка",
    description: "Мы печем наши изделия ежедневно, чтобы вы могли насладиться свежей выпечкой"
  },
  {
    icon: "Leaf",
    title: "Натуральные ингредиенты",
    description: "Мы используем только натуральные ингредиенты без искусственных добавок"
  },
  {
    icon: "HeartHandshake",
    title: "Забота о клиентах",
    description: "Мы ценим каждого клиента и стремимся предоставить лучший сервис"
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем свежую выпечку в течение 60 минут в любую точку города"
  }
];

const BakeryFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-bakery-cream/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наша пекарня – место, где традиции встречаются с инновациями, а качество всегда на первом месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center group">
              <div className="p-4 bg-white rounded-full shadow-md mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <Icon name={feature.icon} className="h-8 w-8 text-bakery-gold" />
              </div>
              <h3 className="text-xl font-bold text-bakery-brown mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-bakery-brown/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-bakery-brown mb-4">
                Наш процесс выпечки
              </h3>
              <p className="text-gray-600 mb-4">
                Мы придерживаемся строгих стандартов качества и использования только лучших ингредиентов. Каждое изделие проходит контроль качества перед тем, как попасть к вам на стол.
              </p>
              <ul className="space-y-3">
                {[
                  "Отбор натуральных ингредиентов",
                  "Ручное замешивание теста",
                  "Медленная ферментация для лучшего вкуса",
                  "Выпечка в традиционных печах"
                ].map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-bakery-gold text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620921568790-c1cf8984624c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Процесс выпечки хлеба" 
                className="rounded-xl shadow-lg object-cover h-80 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-bakery-gold p-4 rounded-lg shadow-lg">
                <p className="text-white font-playfair font-bold text-xl">15+ лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryFeatures;
