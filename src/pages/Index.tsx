import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Классическое парение",
      price: "от 1500 ₽",
      description: "Традиционное парение с дубовым веником, включает массаж веником, контрастные процедуры",
      image: "https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/ab3f3bd5-7546-4f87-8a5c-393be7ae39b3.jpg"
    },
    {
      title: "Премиум парение",
      price: "от 2500 ₽",
      description: "Расширенная программа с использованием нескольких видов веников, медовым пилингом и ароматерапией",
      image: "https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/9f7ec388-ec98-4e03-90a2-a485259f3e9c.jpg"
    },
    {
      title: "VIP программа",
      price: "от 4000 ₽",
      description: "Индивидуальная программа в VIP кабине, включает авторские техники парения и расслабляющий массаж",
      image: "https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/8dd7c9dc-0c15-49d7-bd95-47e6c6f10f24.jpg"
    }
  ];

  const amenities = [
    { icon: "ParkingCircle", title: "Бесплатная парковка", description: "Вы можете без проблем припарковать ваш автомобиль" },
    { icon: "UtensilsCrossed", title: "Ресторанное обслуживание", description: "С разнообразным меню" },
    { icon: "Droplets", title: "Купель и обливные кадушки", description: "Охладиться после пара" },
    { icon: "ShoppingBag", title: "Аренда банных принадлежностей", description: "Веники, тазы, сланцы, халаты, полотенца" },
    { icon: "Tv", title: "Развлечения", description: "Телевизоры и разнообразные настольные игры" }
  ];

  const reviews = [
    { name: "Анна Петрова", text: "Замечательное место! Отличный сервис, качественный пар. Особенно понравилась купель с ледяной водой.", rating: 5 },
    { name: "Михаил Иванов", text: "Хожу сюда регулярно. Пар-мастер Иван - настоящий профессионал! После его парения чувствуешь себя заново родившимся.", rating: 5 },
    { name: "Елена Смирнова", text: "Очень уютная атмосфера, чистота и порядок. Ресторан тоже порадовал - вкусная еда и приятные цены.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/ab3f3bd5-7546-4f87-8a5c-393be7ae39b3.jpg')` }}
      >
        <div className="text-center text-white z-10 px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Королёвские бани</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Традиции русской бани с современным комфортом</p>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" className="mr-2" size={20} />
            Позвонить
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            ВОЗРОЖДАЯ ТРАДИЦИИ НАСТОЯЩЕГО ПАРА
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in">
            Наш банный комплекс — одно из лучших мест для комфортного отдыха с прекрасным обслуживанием
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              "https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/ab3f3bd5-7546-4f87-8a5c-393be7ae39b3.jpg",
              "https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/8dd7c9dc-0c15-49d7-bd95-47e6c6f10f24.jpg",
              "https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/9f7ec388-ec98-4e03-90a2-a485259f3e9c.jpg"
            ].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img src={img} alt={`Банный комплекс ${idx + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/9f7ec388-ec98-4e03-90a2-a485259f3e9c.jpg" 
                  alt="Пар-мастер Иван" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Пар-мастер Иван</h3>
                <p className="text-muted-foreground">Опыт работы более 15 лет. Владеет всеми традиционными техниками парения.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/9f7ec388-ec98-4e03-90a2-a485259f3e9c.jpg" 
                  alt="Пар-мастер" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Пар-мастер Дмитрий</h3>
                <p className="text-muted-foreground">Сертифицированный специалист по банным процедурам и массажу.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Отличный способ отдохнуть от повседневной суеты</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Хотите согреться, отдохнуть от повседневной суеты, избавиться от усталости, снять стресс, 
            повысить иммунитет и зарядиться энергией?!
          </p>
          <p className="text-lg font-semibold mb-8">
            Королёвские бани работают для Вас ежедневно с понедельника по воскресенье. <br />
            <span className="text-primary">Вторник - женский день.</span>
          </p>
          <div className="bg-card p-8 rounded-lg shadow-lg text-left">
            <p className="text-base leading-relaxed mb-4">
              Мы предлагаем высокий уровень сервиса, который делает банный сеанс настоящим отдыхом для души и тела, 
              грамотную ценовую политику, качественный пар и банные процедуры.
            </p>
            <p className="text-base leading-relaxed">
              Кроме просторной парной, в нашем комплексе присутствуют душевые, обливные кадушки с ледяной водой, 
              купель, моечная комната, зал для отдыха с диванами на 66 посадочных мест, столами, ТВ и VIP кабинами. 
              На территории банного комплекса работает бар и ресторан, где вы можете после банных процедур насладиться 
              холодным пивом, квасом, лимонадами, горячим травяным чаем, а также попробовать нашу авторскую кухню 
              с разнообразным меню.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">УДОБСТВА НА ТЕРРИТОРИИ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center">
                      <Icon name={amenity.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Банные услуги</h2>
          <p className="text-center text-muted-foreground mb-12">Профессиональное парение от наших мастеров</p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button className="w-full mt-4">Забронировать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Попробуйте нашу новую программу</h2>
              <p className="text-lg mb-6 opacity-90">
                Авторская программа парения "Царский пар" - уникальная методика с использованием эксклюзивных 
                эфирных масел и специальных техник массажа вениками. Программа разработана нашими мастерами 
                специально для максимального расслабления и оздоровления.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1" size={20} />
                  <span>Продолжительность 90 минут</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1" size={20} />
                  <span>Использование 5 видов веников</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1" size={20} />
                  <span>Медовый пилинг и ароматерапия</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1" size={20} />
                  <span>Травяной чай в VIP зоне отдыха</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="text-lg">
                Узнать подробнее
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/97a8a943-80c0-4e16-9b03-3651987d9c35/files/9f7ec388-ec98-4e03-90a2-a485259f3e9c.jpg" 
                alt="Новая программа" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">В нашем банном комплексе есть ресторанное обслуживание</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            После банных процедур вы можете насладиться блюдами нашей авторской кухни и освежающими напитками
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "Beer", title: "Холодное пиво", desc: "Разливное и бутылочное" },
              { icon: "Coffee", title: "Травяные чаи", desc: "На основе целебных трав" },
              { icon: "Wine", title: "Квас и лимонады", desc: "Домашнего приготовления" },
              { icon: "UtensilsCrossed", title: "Авторская кухня", desc: "Разнообразное меню" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы наших гостей</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Icon name="MapPin" className="mr-2" />
                Адрес
              </h3>
              <p className="text-lg opacity-90 mb-6">г. Королёв, ул. Банная, д. 1</p>
              
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Icon name="Phone" className="mr-2" />
                Телефон
              </h3>
              <p className="text-lg opacity-90 mb-6">+7 (495) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Icon name="Clock" className="mr-2" />
                Режим работы
              </h3>
              <p className="text-lg opacity-90 mb-2">Ежедневно: 10:00 - 23:00</p>
              <p className="text-lg opacity-90 mb-6">Вторник - женский день</p>
              
              <Button size="lg" variant="secondary" className="text-lg w-full">
                <Icon name="Phone" className="mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">© 2024 Королёвские бани. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
