import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: 'Smartphone',
      title: 'Responsive Layout',
      description: 'Адаптивный дизайн для всех устройств'
    },
    {
      icon: 'AlertTriangle',
      title: 'Security First',
      description: 'Безопасность на первом месте'
    },
    {
      icon: 'AlignLeft',
      title: 'Clean Code',
      description: 'Чистый и понятный код'
    },
    {
      icon: 'Type',
      title: 'Typography',
      description: 'Качественная типографика'
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      description: 'Поддержка по email'
    },
    {
      icon: 'Zap',
      title: 'Fast Performance',
      description: 'Высокая производительность'
    }
  ];

  const NavLinks = () => (
    <>
      <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
      <a href="#about" className="hover:text-primary transition-colors">О нас</a>
      <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-muted sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <h1 className="text-2xl lg:text-3xl font-black text-secondary">PALTSY</h1>
            
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
              <NavLinks />
            </nav>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8 text-base">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="py-12 lg:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 lg:mb-6">
              SubHeading
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto">
              Medium Rototo Open Sans — создаём адаптивные и современные веб-решения для вашего бизнеса
            </p>
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-muted text-sm sm:text-base px-6 sm:px-8 h-10 sm:h-12"
            >
              Secołtre
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center mb-8 lg:mb-16 text-secondary">
            Service Card
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
              >
                <div className="mb-4 lg:mb-6">
                  <Icon name={service.icon} size={32} className="text-secondary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 lg:mb-3 text-secondary">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 lg:mt-6 w-full sm:w-auto text-sm"
                >
                  BUTON
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 lg:mb-6">
              Готовы начать?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-muted text-sm sm:text-base px-6 sm:px-8 h-10 sm:h-12"
            >
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 lg:py-12 border-t border-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm lg:text-base text-muted-foreground text-center sm:text-left">
              © 2024 PALTSY. Все права защищены.
            </p>
            <div className="flex gap-4 lg:gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
