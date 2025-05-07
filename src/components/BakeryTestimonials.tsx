
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    position: "Постоянный клиент",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Булочки здесь просто потрясающие! Корица с булочками - моя любимая комбинация. Всегда беру их по пути на работу.",
    rating: 5
  },
  {
    id: 2,
    name: "Михаил Иванов",
    position: "Фуд-блогер",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Лучшие круассаны в городе! Хрустящие снаружи и мягкие внутри. Качество на высшем уровне, всегда рекомендую своим подписчикам.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Сидорова",
    position: "Учитель",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Часто заказываю выпечку для школьных мероприятий. Дети в восторге от ваших булочек, а родители спрашивают, где я их заказываю!",
    rating: 4
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    position: "Менеджер",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Наша компания регулярно заказывает выпечку для офисных встреч. Всегда свежая, вкусная и доставляется вовремя. Спасибо за профессионализм!",
    rating: 5
  }
];

const BakeryTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Отзывы клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Что говорят наши клиенты о нашей выпечке и сервисе
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-md h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-bakery-brown">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-bakery-gold' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-600 flex-1 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <Icon name="Quote" className="text-bakery-gold/20 h-8 w-8 mt-4 self-end" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-white text-bakery-brown border-bakery-cream hover:bg-bakery-cream hover:text-bakery-brown -left-16" />
            <CarouselNext className="bg-white text-bakery-brown border-bakery-cream hover:bg-bakery-cream hover:text-bakery-brown -right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BakeryTestimonials;
