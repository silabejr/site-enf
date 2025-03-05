import React from 'react';
import { Phone, Mail, Instagram, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import ContactButton from './components/ContactButton';

function App() {
  const services = [
    {
      title: "Tratamento de Feridas Nathalia Silabe",
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
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
                Cuidado Especializado em Estomaterapia
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Tratamento profissional e humanizado para feridas, estomias e incontinência na região do Grande ABC e São Paulo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <ContactButton 
                  href="tel:11949358935"
                  text="Agende sua Consulta"
                  icon={<Phone className="w-4 h-4 md:w-5 md:h-5" />}
                  primary
                />
                <ContactButton 
                  href="#servicos"
                  text="Conheça nossos serviços"
                  icon={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
                />
              </div>
            </div>
            <div className="relative mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
                alt="Enfermeira especialista"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

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

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Por que nos escolher?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Experiência Comprovada",
                  description: "Anos de experiência no tratamento de casos complexos."
                },
                {
                  title: "Atendimento Personalizado",
                  description: "Cada paciente recebe um plano de tratamento único."
                },
                {
                  title: "Tecnologia Avançada",
                  description: "Utilizamos os métodos mais modernos disponíveis."
                }
              ].map((item) => (
                <div key={item.title} className="bg-white p-5 md:p-6 rounded-lg shadow-lg">
                  <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact and Consultation Section */}
        <section id="contato" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Entre em Contato</h2>
                <div className="grid gap-4 md:gap-6">
                  <a href="tel:11949358935" className="flex items-center gap-3 md:gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-gray-600 text-sm md:text-base">(11) 94935-8935</p>
                    </div>
                  </a>
                  <a href="mailto:n.silabe@outlook.com" className="flex items-center gap-3 md:gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600 text-sm md:text-base">n.silabe@outlook.com</p>
                    </div>
                  </a>
                  <a href="https://instagram.com/nathaliasilabe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-gray-600 text-sm md:text-base">@nathaliasilabe</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 md:gap-4 p-4 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-gray-600 text-sm md:text-base">Santo André - Atendemos Grande ABC e São Paulo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tele Consulta Form */}
              <div className="mt-8 md:mt-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Tele Consulta</h2>
                <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
                  Inicie seu tratamento com uma avaliação online personalizada. Envie suas informações e documentos médicos para uma análise inicial do seu caso.
                </p>
                <form onSubmit={handleSubmit} className="bg-blue-50 p-4 md:p-6 rounded-lg">
                  <div className="grid gap-4 md:gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        pattern="[0-9]{10,11}"
                        className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Digite sua cidade"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="arquivos" className="block text-sm font-medium text-gray-700 mb-1">
                        Fotos ou Vídeos (opcional)
                      </label>
                      <input
                        type="file"
                        id="arquivos"
                        name="arquivos"
                        multiple
                        accept="image/*,video/*"
                        className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="mt-1 text-xs md:text-sm text-gray-500">
                        Você pode enviar múltiplas fotos ou vídeos relacionados ao seu caso
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 transition-colors"
                    >
                      Enviar Consulta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 md:py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Enfermagem Especializada em Estomaterapia. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;