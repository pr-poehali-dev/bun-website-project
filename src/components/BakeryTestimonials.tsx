
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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Булочки с корицей здесь просто потрясающие! Всегда свежие и невероятно ароматные. Теперь это мой любимый завтрак по выходным.",
    rating: 5
  },
  {
    id: 2,
    name: "Михаил Иванов",
    position: "Фуд-блогер",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Лучшие круассаны в городе! Хрустящие снаружи и невероятно слоистые внутри. Качество на высшем уровне, всегда рекомендую эту пекарню.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Сидорова",
    position: "Учитель",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Регулярно заказываю выпечку для школьных мероприятий. Дети в восторге от сладких булочек, а родители спрашивают, где я их заказываю!",
    rating: 4
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    position: "Директор компании",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Наша компания регулярно заказывает выпечку для корпоративных встреч. Всегда свежая, вкусная и доставляется точно в срок. Отличный сервис!",
    rating: 5
  }
];

const BakeryTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-bakery-cream/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-12">
          <span className="text-bakery-gold font-medium">Мнение клиентов</span>
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown">Что говорят о нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Отзывы наших любимых клиентов о выпечке и сервисе
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-bakery-gold"
                      />
                      <div>
                        <h4 className="font-semibold text-bakery-brown">{testimonial.name}</h4>
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
                    
                    <blockquote className="text-gray-600 flex-1 italic relative">
                      <Icon name="Quote" className="text-bakery-gold/20 h-8 w-8 absolute -top-1 -left-1 -z-10" />
                      <p className="pl-2 pt-2">{testimonial.quote}</p>
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-white text-bakery-brown border-bakery-cream hover:bg-bakery-gold hover:text-white -left-16" />
            <CarouselNext className="bg-white text-bakery-brown border-bakery-cream hover:bg-bakery-gold hover:text-white -right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BakeryTestimonials;
