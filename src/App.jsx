import React, { useState } from 'react';

// ===== THEME COLORS =====
const colors = {
  primary: '#024CFB',
  primaryLight: '#1E5FFF',
  darkBg: '#0A0E27',
  darkSurface: '#1A1F3A',
  darkSurfaceLight: '#242B4A',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B8D4',
  textTertiary: '#7A8299',
  gray: '#5A6472',
  cream: '#FBFFF1',
  border: 'rgba(255, 255, 255, 0.1)',
};

// ===== REUSABLE COMPONENTS =====

const Button = ({ variant = 'primary', children, onClick }) => {
  const styles = {
    primary: {
      background: colors.primary,
      color: 'white',
      boxShadow: `0 8px 24px ${colors.primary}4D`,
    },
    secondary: {
      background: 'transparent',
      color: colors.textPrimary,
      border: `1.5px solid ${colors.border}`,
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '16px 32px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        border: variant === 'secondary' ? `1.5px solid ${colors.border}` : 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...styles[variant],
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.background = colors.primaryLight;
          e.target.style.boxShadow = `0 12px 32px ${colors.primary}66`;
          e.target.style.transform = 'translateY(-2px)';
        } else {
          e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          e.target.style.borderColor = colors.primary;
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.target.style.background = colors.primary;
          e.target.style.boxShadow = `0 8px 24px ${colors.primary}4D`;
          e.target.style.transform = 'translateY(0)';
        } else {
          e.target.style.background = 'transparent';
          e.target.style.borderColor = colors.border;
        }
      }}
    >
      {children}
    </button>
  );
};

const ProblemCard = ({ number, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: colors.darkSurfaceLight,
        padding: '40px',
        borderRadius: '12px',
        border: `1px solid ${colors.border}`,
        transition: 'all 0.3s ease',
        borderColor: isHovered ? colors.primary : colors.border,
        backgroundColor: isHovered ? `${colors.primary}0D` : colors.darkSurfaceLight,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ fontSize: '48px', fontWeight: '700', color: colors.primary, marginBottom: '12px' }}>
        {number}
      </div>
      <h3 style={{ fontSize: '20px', marginBottom: '12px', color: colors.textPrimary }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          background: `${colors.primary}26`,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: '24px',
          color: colors.primary,
        }}
      >
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: '16px', marginBottom: '8px', color: colors.textPrimary }}>
          {title}
        </h4>
        <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.5' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const RoomCard = ({ image, title, description, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: colors.darkSurface,
        borderRadius: '16px',
        overflow: 'hidden',
        border: `1px solid ${colors.border}`,
        transition: 'all 0.3s ease',
        borderColor: isHovered ? colors.primary : colors.border,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 16px 48px ${colors.primary}26` : 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: '100%',
          height: '240px',
          background: `linear-gradient(135deg, ${colors.darkSurfaceLight} 0%, ${colors.primary} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '14px',
          overflow: 'hidden',
        }}
      >
        {image}
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '8px', color: colors.textPrimary }}>
          {title}
        </h3>
        <p style={{ fontSize: '14px', color: colors.textSecondary, marginBottom: '16px' }}>
          {description}
        </p>
        <div style={{ fontSize: '20px', fontWeight: '700', color: colors.primary }}>
          {price}
        </div>
      </div>
    </div>
  );
};

const AppFeature = ({ icon, title, description }) => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          background: `${colors.primary}1A`,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: colors.primary,
          fontSize: '20px',
        }}
      >
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: '16px', marginBottom: '4px', color: colors.textPrimary }}>
          {title}
        </h4>
        <p style={{ fontSize: '14px', color: colors.textSecondary }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Section = ({ id, backgroundColor, children }) => {
  return (
    <section
      id={id}
      style={{
        padding: '100px 40px',
        background: backgroundColor,
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
};

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <h2
        style={{
          fontSize: '44px',
          fontWeight: '700',
          marginBottom: '16px',
          textAlign: 'center',
          color: colors.textPrimary,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '18px',
          color: colors.textSecondary,
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.7',
        }}
      >
        {subtitle}
      </p>
    </>
  );
};

// ===== MAIN COMPONENT =====

export default function RoadStopLanding() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email.trim()) {
      console.log('Email submitted:', email);
      setEmail('');
      alert('Obrigado! Você receberá nossas novidades em breve.');
    }
  };

  return (
    <div
      style={{
        background: colors.darkBg,
        color: colors.textPrimary,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        lineHeight: '1.6',
        overflowX: 'hidden',
      }}
    >
      {/* ===== NAVIGATION ===== */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          background: `${colors.darkBg}CC`,
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${colors.border}`,
          zIndex: 1000,
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: '700', color: colors.textPrimary }}>
          Road<span style={{ color: colors.primary }}>Stop</span>
        </div>
        <ul
          style={{
            display: 'flex',
            gap: '40px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {['problema', 'solucao', 'app', 'quartos', 'contato'].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item}`}
                style={{
                  color: colors.textSecondary,
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
                onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                onMouseLeave={(e) => (e.target.style.color = colors.textSecondary)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.darkSurface} 100%)`,
          marginTop: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '800px',
            height: '800px',
            background: `radial-gradient(circle, ${colors.primary}26 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1400px',
            width: '100%',
            padding: '0 40px',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: '700',
                lineHeight: '1.15',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E8FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A melhor parada para quem está sempre na estrada
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
                marginBottom: '32px',
                maxWidth: '480px',
                lineHeight: '1.7',
              }}
            >
              Quartos confortáveis, estacionamento seguro, e alimentação 24h em um único lugar. Transformamos suas pausas em
              momentos de repouso de qualidade.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Button variant="primary">Conhecer o App</Button>
              <Button variant="secondary">Saiba Mais</Button>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '500px',
                background: `linear-gradient(135deg, ${colors.darkSurface} 0%, ${colors.darkSurfaceLight} 100%)`,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${colors.border}`,
                fontSize: '14px',
                color: colors.textTertiary,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 60% 40%, ${colors.primary}1A, transparent)`,
                }}
              />
              {/* ALTERAR AQUI: Adicione sua imagem */}
              <img 
                src="/images/hero.jpg" 
                alt="RoadStop Facility"
                style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '16px'
              }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <Section id="problema" backgroundColor={colors.darkSurface}>
        <SectionTitle
          title="O Desafio"
          subtitle="Caminhoneiros enfrentam obstáculos na estrada. Nós resolvemos isso."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '60px',
          }}
        >
          <ProblemCard
            number="47%"
            title="Fadiga e Segurança"
            description="Mais da metade dos motoristas relatam fadiga excessiva na estrada, comprometendo a segurança de todos."
          />
          <ProblemCard
            number="3.2h"
            title="Perda de Tempo"
            description="Em média, caminhoneiros perdem 3 horas procurando lugares adequados para descansar e se alimentar."
          />
          <ProblemCard
            number="0"
            title="Conforto"
            description="Soluções convencionais oferecem pouco conforto e segurança. É hora de mudar isso."
          />
        </div>
      </Section>

      {/* ===== SOLUTION SECTION ===== */}
      <Section id="solucao" backgroundColor={colors.darkBg}>
        <SectionTitle
          title="Nossa Solução"
          subtitle="RoadStop: a rede inteligente de paradas para quem está sempre em movimento."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginTop: '60px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <FeatureCard
              icon="🏨"
              title="Quartos Compactos"
              description="Espaço otimizado com todo conforto. Smart TV, ar-condicionado e wifi. Perfeito para descansos reparadores."
            />
            <FeatureCard
              icon="🅿️"
              title="Estacionamento Seguro"
              description="Câmeras 24/7, cercado por muros, vagas iluminadas. Seu veículo fica seguro enquanto você descansa."
            />
            <FeatureCard
              icon="🍽️"
              title="Restaurante 24h"
              description="Refeições de qualidade preparadas a qualquer hora. Cardápio nutritivo e saudável para manter a energia."
            />
            <FeatureCard
              icon="📱"
              title="App Inteligente"
              description="Reserve quartos, encontre nossas paradas, acesse ofertas exclusivas. Tudo na palma da sua mão."
            />
          </div>

          <div
            style={{
              width: '100%',
              height: '400px',
              background: `linear-gradient(135deg, ${colors.darkSurface} 0%, ${colors.darkSurfaceLight} 100%)`,
              borderRadius: '16px',
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.textTertiary,
              overflow: 'hidden',
            }}
          >
            {/* ALTERAR AQUI: Adicione sua imagem */}
            <img 
                src="/images/aerea.jpg" 
                alt="RoadStop Facility"
                style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '16px'
              }}
              />
            
          </div>
        </div>
      </Section>

      {/* ===== APP SECTION ===== */}
      <Section id="app" backgroundColor={colors.darkSurface}>
        <SectionTitle
          title="O Aplicativo"
          subtitle="Tecnologia pensada para caminhoneiros. Simples, rápido e prático."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginTop: '60px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '600px',
              background: `linear-gradient(135deg, ${colors.darkSurfaceLight} 0%, ${colors.darkBg} 100%)`,
              borderRadius: '24px',
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.textTertiary,
              fontSize: '14px',
              overflow: 'hidden',
            }}
          >
            {/* ALTERAR AQUI: Adicione mockup do app */}
            <img 
                src="/images/telas.jpg" 
                alt="RoadStop Facility"
                style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '16px'
              }}
              />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <AppFeature
              icon="🗺️"
              title="Localize Paradas"
              description="Encontre a RoadStop mais próxima com mapa interativo. Veja distância, disponibilidade e avaliações."
            />
            <AppFeature
              icon="💳"
              title="Reserve com Um Clique"
              description="Escolha datas, quartos e serviços. Confirmação instantânea e pagamento seguro."
            />
            <AppFeature
              icon="⭐"
              title="Programa de Pontos"
              description="Acumule pontos a cada reserva. Troque por descontos, refeições grátis e upgrade de quartos."
            />
            <AppFeature
              icon="🔔"
              title="Notificações Inteligentes"
              description="Receba alertas sobre ofertas, promoções e informações úteis para sua viagem."
            />
          </div>
        </div>
      </Section>

      {/* ===== ROOMS SECTION ===== */}
      <Section id="quartos" backgroundColor={colors.darkBg}>
        <SectionTitle
          title="Nossos Quartos"
          subtitle="Diferentes tipos de acomodação para cada necessidade e orçamento."
        />
        <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    marginTop: '60px',
  }}
>
  {/* QUARTO 1 */}
  <RoomCard
    image={
      <img 
        src="/images/compacto.jpg" 
        alt="Quarto Compacto"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    }
    title="Quarto Compacto"
    description="Perfeito para quem busca repouso rápido. Cama confortável, banheiro privado, A/C e WiFi."
    price="R$ 49,90/noite"
  />

  {/* QUARTO 2 */}
  <RoomCard
    image={
      <img 
        src="/images/room-smart.jpg" 
        alt="Quarto Standard"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    }
    title="Quarto Standard"
    description="Espaço maior com mais conforto. Área de trabalho, smart TV, minibar e serviços premium."
    price="R$ 79,90/noite"
  />

  {/* QUARTO 3 */}
  <RoomCard
    image={
      <img 
        src="/images/executive.jpg" 
        alt="Suíte Premium"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    }
    title="Suíte Premium"
    description="Máximo conforto e luxo. Suíte espaçosa, hidromassagem, sauna e concierge 24h."
    price="R$ 139,90/noite"
  />
</div>
      </Section>

      {/* ===== SUSTAINABILITY SECTION ===== */}
      <Section id="sustentabilidade" backgroundColor={colors.darkSurface}>
        <SectionTitle
          title="Sustentabilidade"
          subtitle="Comprometidos com o futuro do transporte."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginTop: '60px',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '32px',
                marginBottom: '24px',
                color: colors.cream,
              }}
            >
              Operação Verde
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: colors.textSecondary,
                marginBottom: '16px',
                lineHeight: '1.8',
              }}
            >
              Nossas paradas utilizam 100% de energia renovável. Painéis solares, sistemas de água reciclada e estruturas
              eco-friendly em todas as unidades.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: colors.textSecondary,
                marginBottom: '24px',
                lineHeight: '1.8',
              }}
            >
              Acreditamos que conforto e responsabilidade ambiental andam juntos. Cada parada RoadStop é um modelo de
              sustentabilidade nas rodovias.
            </p>
            <Button variant="primary">Saiba Mais Sobre Sustentabilidade</Button>
          </div>

          <div
            style={{
              width: '100%',
              height: '400px',
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.darkBg} 100%)`,
              borderRadius: '16px',
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.5)',
              overflow: 'hidden',
            }}
          >
            {/* ALTERAR AQUI: Adicione sua imagem */}
            <img 
                src="/images/verde.jpg" 
                alt="RoadStop Facility"
                style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '16px'
              }}
              />
          </div>
        </div>
      </Section>

      {/* ===== CONTACT SECTION ===== */}
      <Section id="contato" backgroundColor={colors.darkBg}>
        <div style={{ textAlign: 'center' }}>
          <SectionTitle
            title="Pronto para a Próxima Parada?"
            subtitle="Baixe nosso app, faça sua reserva e desfrute de conforto em seu próximo descanso. Ou deixe seus dados para estar sempre atualizado sobre nossas novidades."
          />

          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              gap: '12px',
            }}
          >
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleEmailSubmit();
                }
              }}
              style={{
                flex: 1,
                padding: '16px 20px',
                background: colors.darkSurface,
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                color: colors.textPrimary,
                fontSize: '14px',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.primary;
                e.target.style.background = `${colors.primary}0D`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.border;
                e.target.style.background = colors.darkSurface;
              }}
            />
            <Button variant="primary" onClick={handleEmailSubmit}>
              Enviar
            </Button>
          </div>
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          background: colors.darkSurface,
          borderTop: `1px solid ${colors.border}`,
          padding: '60px 40px 40px',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              marginBottom: '40px',
            }}
          >
            {[
              { title: 'Sobre', links: ['Sobre RoadStop', 'Nossas Paradas', 'Carreiras', 'Blog'] },
              { title: 'Suporte', links: ['Central de Ajuda', 'Contato', 'FAQ', 'Política de Cancelamento'] },
              { title: 'Legal', links: ['Termos de Serviço', 'Privacidade', 'Cookies', 'Compliance'] },
              { title: 'Conecte', links: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'] },
            ].map((section, idx) => (
              <div key={idx}>
                <h4
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '16px',
                    color: colors.textPrimary,
                  }}
                >
                  {section.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          color: colors.textSecondary,
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'color 0.3s',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                        onMouseLeave={(e) => (e.target.style.color = colors.textSecondary)}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: `1px solid ${colors.border}`,
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ color: colors.textTertiary, fontSize: '12px', margin: 0 }}>
              © 2026 RoadStop. Todos os direitos reservados.
            </p>
            <p style={{ color: colors.textTertiary, fontSize: '12px', margin: 0 }}>
              Desenvolvido com ❤️ para quem está sempre na estrada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}