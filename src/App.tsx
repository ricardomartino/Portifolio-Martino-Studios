import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  BarChart3, 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Mail, 
  MessageSquare, 
  CheckCircle2,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 'autoelite',
    title: 'AutoElite',
    description: 'Plataforma premium para revenda de veículos de luxo com interface intuitiva e foco em conversão.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    link: 'https://ricardomartino.github.io/AutoElite/',
    tags: ['React', 'Tailwind', 'Automotivo']
  },
  {
    id: 'clinica-vitalis',
    title: 'Clínica Vitalis',
    description: 'Sistema de agendamento e portal informativo para clínica médica com design acolhedor e profissional.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    link: 'https://ricardomartino.github.io/Clinica-Vitalis/',
    tags: ['Saúde', 'UI/UX', 'Agendamento']
  },
  {
    id: 'ebook',
    title: 'Landing Page Ebook',
    description: 'Página de vendas de alta performance otimizada para lançamentos digitais e captura de leads.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    link: 'https://ricardomartino.github.io/Ebook/',
    tags: ['Marketing', 'Copywriting', 'Sales']
  },
  {
    id: 'iron-fitness',
    title: 'Iron Fitness',
    description: 'Portal para academia com foco em planos, horários e engajamento da comunidade fitness.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    link: 'https://ricardomartino.github.io/Iron-Fitness/',
    tags: ['Fitness', 'Dashboard', 'Comunidade']
  }
];

const SERVICES: Service[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais e e-commerces robustos, rápidos e otimizados para SEO.'
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Sistemas Customizados',
    description: 'Aplicações web sob medida para automatizar processos e escalar seu negócio.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Design Responsivo',
    description: 'Interfaces que se adaptam perfeitamente a qualquer dispositivo, do mobile ao desktop.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Otimização de Performance',
    description: 'Melhoria de velocidade e métricas do Core Web Vitals para melhor ranking no Google.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Martino<span className="text-blue-600">Studio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5519997121245" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5519997121245"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold"
            >
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Disponível para novos projetos
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Transformamos ideias em <span className="text-blue-600">experiências digitais</span> de alto impacto.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Desenvolvemos sites e aplicações web que não apenas parecem incríveis, mas entregam resultados reais para o seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 group"
              >
                Ver Portfólio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                Nossos Serviços
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              {/* <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Client"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900">+50 Projetos Entregues</p>
                <p className="text-gray-500">Clientes satisfeitos em todo o Brasil</p>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Web Development"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">O que fazemos</h2>
          <h3 className="text-4xl font-display font-bold mb-6">Soluções completas para sua presença online</h3>
          <p className="text-gray-600 text-lg">
            Combinamos design estratégico com tecnologia de ponta para criar produtos digitais que impulsionam o crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Portfólio</h2>
            <h3 className="text-4xl font-display font-bold">Projetos que entregam valor</h3>
          </div>
          <p className="text-gray-600 max-w-xs">
            Uma seleção de trabalhos recentes desenvolvidos com foco na experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden aspect-16/10"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-6 line-clamp-2 max-w-md">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Ver Projeto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
              Vamos construir algo <span className="text-blue-200">extraordinário</span> juntos?
            </h3>
            <p className="text-blue-100 text-lg mb-12 max-w-md">
              Estamos prontos para transformar sua visão em realidade. Entre em contato e vamos conversar sobre seu próximo projeto.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">E-mail</p>
                  <p className="font-bold">ric.martinodev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">WhatsApp</p>
                  <p className="font-bold">+55 (19) 99712-1245</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-4xl shadow-2xl flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Atendimento Imediato</h4>
            <p className="text-gray-600 mb-8">
              Clique no botão abaixo para iniciar uma conversa diretamente com nossa equipe via WhatsApp.
            </p>
            <a 
              href="https://wa.me/5519997121245" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold hover:bg-[#128C7E] transition-all shadow-xl shadow-green-600/20 flex items-center justify-center gap-3 text-lg"
            >
              <MessageSquare className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
            <p className="mt-6 text-sm text-gray-400">
              Resposta média em menos de 15 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Martino<span className="text-blue-600">Studio</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Especialistas em criar soluções digitais de alta performance que conectam marcas e pessoas através de design e tecnologia.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h5 className="font-bold mb-6">Links Rápidos</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Serviços</h5>
            <ul className="space-y-4 text-gray-500">
              <li>Desenvolvimento Web</li>
              <li>UI/UX Design</li>
              <li>SEO & Performance</li>
              <li>E-commerce</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Martino Web Studio. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Privacidade</a>
            <a href="#" className="hover:text-blue-600">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
