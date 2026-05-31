import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, MapPin, Wifi, Leaf, Lock, Zap, Coffee } from 'lucide-react';
import heroImg from './assets/hero.jpg';
import compactoImg from './assets/compacto.jpg';
import standartImg from './assets/standart.jpg';
import executiveImg from './assets/executive.jpg';
import telasImg from './assets/telas.jpg';
import aereaImg from './assets/aerea.jpg';

const RoadStopLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            <span className="text-white">Road</span>
            <span className="text-[#024CFB]">Stop</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm">
            {['Solução', 'Recursos', 'Quartos', 'Investidores'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#024CFB] hover:bg-[#024CFB]/80 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all">
            Reservar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {/* 🖼️ IMAGEM 1: Substitua /api/placeholder/hero.jpg pela sua imagem hero */}
          <img 
            src={heroImg} 
            alt="RoadStop Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              A Próxima Geração de Viagens nas Rodovias
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light">
              Conforto, tecnologia e segurança para as pessoas que movem o Brasil.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-[#024CFB] hover:bg-[#024CFB]/80 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#024CFB]/20 text-lg">
              Explorar RoadStop
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm text-lg">
              Ver Demonstração
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">O Desafio</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Motoristas de caminhão enfrentam desafios diários com áreas de descanso inadequadas, preocupações de segurança e qualidade de serviço ruim nas rodovias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚨', title: 'Preocupações de Segurança', desc: 'Áreas de descanso inseguras com segurança limitada' },
              { icon: '🏚️', title: 'Condições Precárias', desc: 'Instalações antigas com problemas de higiene' },
              { icon: '🛏️', title: 'Opções Limitadas', desc: 'Poucas alternativas de hospedagem adequadas' },
              { icon: '📱', title: 'Sem Tecnologia', desc: 'Falta de serviços digitais e conectividade' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solução" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa Solução</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Um ecossistema completo projetado especificamente para viagens modernas nas rodovias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Lock className="w-6 h-6" />, title: 'Hotel Inteligente', desc: 'Cápsulas modernas e suítes com controle climático inteligente' },
              { icon: <Coffee className="w-6 h-6" />, title: 'Restaurante 24/7', desc: 'Comida de qualidade disponível o tempo todo' },
              { icon: <MapPin className="w-6 h-6" />, title: 'Estacionamento Seguro', desc: 'Estacionamento de caminhões monitorado com disponibilidade em tempo real' },
              { icon: <Wifi className="w-6 h-6" />, title: 'App Mobile', desc: 'Reservar quartos, encontrar estacionamento, gerenciar tudo digitalmente' },
              { icon: <Leaf className="w-6 h-6" />, title: 'Energia Solar', desc: 'Operações sustentáveis com energia renovável' },
              { icon: <Zap className="w-6 h-6" />, title: 'Check-in Automático', desc: 'Entrada sem chave e processo de reserva automatizado' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-8 hover:border-[#024CFB]/50 hover:bg-gradient-to-br hover:from-[#024CFB]/10 hover:to-white/0 transition-all duration-300 group"
              >
                <div className="text-[#024CFB] mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="quartos" className="py-24 px-6 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Opções de Hospedagem</h2>
            <p className="text-white/60 text-lg">Três categorias de quartos projetadas para diferentes necessidades e orçamentos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cápsula Compacta',
                subtitle: 'Pod de dormir moderno para descanso rápido',
                price: 'R$49',
                imgSrc: compactoImg, // 🖼️ IMAGEM 2
                features: ['Cama solteiro', 'WiFi rápido', 'Iluminação inteligente', 'Chuveiro']
              },
              {
                title: 'Quarto Padrão',
                subtitle: 'Quarto privado confortável',
                price: 'R$79',
                imgSrc: standartImg, // 🖼️ IMAGEM 3
                features: ['Cama queen', 'Mesa de trabalho', 'Banheiro', 'WiFi Premium', 'Smart TV'],
                featured: true
              },
              {
                title: 'Suíte Executiva',
                subtitle: 'Suíte espaçosa com comodidades premium',
                price: 'R$149',
                imgSrc: executiveImg, // 🖼️ IMAGEM 4
                features: ['Cama king', 'Sala de estar', 'Banheiro premium', 'Espaço de trabalho', 'Minibar', 'Acesso ao lounge']
              }
            ].map((room, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  room.featured ? 'ring-2 ring-[#024CFB] md:scale-105 md:-mt-8' : ''
                }`}
              >
                <div className="relative h-64 md:h-80 bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                  {/* 🖼️ ADICIONE A IMAGEM AQUI - Substitua /api/placeholder pelo caminho da imagem */}
                  <img 
                    src={room.imgSrc}
                    alt={room.title}
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                <div className="bg-black/80 backdrop-blur border border-white/10 p-8">
                  <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                  <p className="text-white/60 text-sm mb-6">{room.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{room.price}</span>
                    <span className="text-white/60 text-sm">/noite</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-[#024CFB]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    room.featured 
                      ? 'bg-[#024CFB] hover:bg-[#024CFB]/80 text-white'
                      : 'border border-white/20 text-white hover:border-white/60'
                  }`}>
                    Reservar Quarto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Experiência do App Mobile</h2>
                <p className="text-white/60 text-lg mb-8">
                  Controle completo na palma da sua mão. Reserve quartos, encontre estacionamento, gerencie pagamentos e ganhe pontos de fidelidade - tudo em um único app.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Disponibilidade de quartos em tempo real',
                  'Reservas de estacionamento seguro',
                  'Mapa interativo de localização',
                  'Processamento de pagamento digital',
                  'Programa de recompensas fidelidade',
                  'Gerenciamento de reservas'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#024CFB] rounded-full" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#024CFB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#024CFB]/80 transition-all inline-flex items-center gap-2 group">
                Baixar App
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex justify-center">
              {/* 🖼️ IMAGEM 5: Substitua /api/placeholder/telas.jpg pela imagem do app */}
              <img 
                src={telasImg}
                alt="App RoadStop"
                className="max-w-sm w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Green Operations */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Operações Sustentáveis</h2>
            <p className="text-white/60 text-lg">RoadStop está comprometida com a responsabilidade ambiental</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { title: 'Energia Solar', desc: 'Todas as instalações alimentadas por sistemas de energia renovável' },
                { title: 'Conservação de Água', desc: 'Coleta de água da chuva e tratamento de água residual' },
                { title: 'Iluminação Inteligente', desc: 'Sistemas LED inteligentes com detecção de movimento' },
                { title: 'Eficiência Energética', desc: 'Tecnologias avançadas de HVAC e isolamento' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#024CFB]/20 border border-[#024CFB]/40 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#024CFB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              {/* 🖼️ IMAGEM 6: Substitua /api/placeholder/aerea.jpg pela imagem aérea */}
              <img 
                src={aereaImg}
                alt="Vista Aérea RoadStop"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Por Que Escolher RoadStop?</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 font-semibold text-white/80">Recurso</th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="text-[#024CFB]">RoadStop</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-white/60">Postos de Gasolina</th>
                  <th className="text-center py-4 px-6 font-semibold text-white/60">Hotéis Convencionais</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Hospedagem', roadstop: true, gas: false, hotel: true },
                  { feature: 'App Mobile', roadstop: true, gas: false, hotel: false },
                  { feature: 'Reservas Antecipadas', roadstop: true, gas: false, hotel: true },
                  { feature: 'Energia Solar', roadstop: true, gas: false, hotel: false },
                  { feature: 'Programa de Fidelidade', roadstop: true, gas: false, hotel: false },
                  { feature: 'Tecnologia Autoatendimento', roadstop: true, gas: false, hotel: false },
                  { feature: 'Segurança 24/7', roadstop: true, gas: false, hotel: true },
                  { feature: 'Experiência Integrada', roadstop: true, gas: false, hotel: false },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-6 text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.roadstop ? (
                        <Check className="w-5 h-5 text-[#024CFB] mx-auto" />
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.gas ? (
                        <Check className="w-5 h-5 text-white/40 mx-auto" />
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.hotel ? (
                        <Check className="w-5 h-5 text-white/40 mx-auto" />
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Modelo de Receita</h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Múltiplos fluxos de receita criam crescimento sustentável e escalável
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Hospedagem', value: '45%', desc: 'Reservas de quartos e serviços ao hóspede' },
              { title: 'Restaurante & Café', value: '25%', desc: 'Vendas de alimentos e bebidas 24/7' },
              { title: 'Estacionamento', value: '15%', desc: 'Taxas de estacionamento de caminhões' },
              { title: 'Loja de Conveniência', value: '8%', desc: 'Produtos de varejo e mercadorias' },
              { title: 'Parcerias', value: '5%', desc: 'Colaborações de marca e patrocínios' },
              { title: 'Serviços App', value: '2%', desc: 'Recursos premium e assinaturas' },
            ].map((stream, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#024CFB]/10 to-white/0 border border-white/10 rounded-xl p-8">
                <div className="text-4xl font-bold text-[#024CFB] mb-3">{stream.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stream.title}</h3>
                <p className="text-white/60 text-sm">{stream.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investidores" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">O Futuro das Viagens nas Rodovias Começa Aqui</h2>
          <p className="text-xl text-white/60 leading-relaxed">
            RoadStop representa uma oportunidade de bilhões em reais para transformar viagens nas rodovias no Brasil. Com expansão estratégica para corredores de caminhões principais, estamos posicionados para crescimento rápido e retornos significativos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 my-12">
            {[
              { stat: '500+', label: 'Locais planejados' },
              { stat: '50M+', label: 'Viagens de caminhão anuais' },
              { stat: '3x', label: 'Meta de crescimento de receita' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl font-bold text-[#024CFB]">{item.stat}</div>
                <div className="text-white/60">{item.label}</div>
              </div>
            ))}
          </div>

          <button className="bg-[#024CFB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#024CFB]/80 transition-all text-lg inline-flex items-center gap-2 group">
            Tornar-se Investidor
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-black/95 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Pronto para Experimentar RoadStop?</h2>
          <p className="text-xl text-white/60">Faça sua reserva em um dos nossos locais de crescimento na rede hoje mesmo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#024CFB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#024CFB]/80 transition-all text-lg">
              Reservar Agora
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-white/60 transition-all text-lg">
              Falar com Vendas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="text-lg font-semibold">
                <span className="text-white">Road</span>
                <span className="text-[#024CFB]">Stop</span>
              </div>
              <p className="text-white/60 text-sm">A próxima geração de viagens nas rodovias.</p>
            </div>
            
            {[
              {
                title: 'Produto',
                links: ['Recursos', 'Preços', 'App Mobile', 'Segurança']
              },
              {
                title: 'Empresa',
                links: ['Sobre', 'Carreiras', 'Blog', 'Imprensa']
              },
              {
                title: 'Legal',
                links: ['Privacidade', 'Termos', 'Contato', 'Parcerias']
              }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/40 text-sm">© 2024 RoadStop. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sohne:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Sohne', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        ::selection {
          background-color: #024CFB;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default RoadStopLanding;