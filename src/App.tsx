import React from 'react';
import { Phone, Mail, Instagram, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import ContactButton from './components/ContactButton';

function App() {
  const services = [
    {
      title: "Tratamento de Feridas",
      description: "Cuidado especializado e personalizado para diversos tipos de feridas, utilizando técnicas avançadas e materiais de última geração.",
      icon: "bandage"
    },
    {
      title: "Estomias",
      description: "Acompanhamento profissional para pacientes estomizados, garantindo qualidade de vida e adaptação adequada.",
      icon: "care"
    },
    {
      title: "Ozonioterapia",
      description: "Tratamento inovador que acelera o processo de cicatrização e combate infecções através da aplicação controlada de ozônio.",
      icon: "treatment"
    },
    {
      title: "Laserterapia",
      description: "Tecnologia avançada para estimular a regeneração tecidual e reduzir a dor, proporcionando resultados mais rápidos.",
      icon: "laser"
    },
    {
      title: "Podologia",
      description: "Cuidados especializados para a saúde dos pés, tratando calos, unhas encravadas, fissuras e outras condições.",
      icon: "foot"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="text-lg md:text-xl font-semibold text-gray-800 truncate mr-4">
              Enfermagem Especializada
            </div>
            <a
              href="#contato"
              className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-14 md:pt-16">
        {/* Services Section */}
        <section id="servicos" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Nossos Serviços</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
