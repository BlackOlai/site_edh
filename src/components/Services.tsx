import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Brain, Mic2, BrainCog, Stethoscope, Salad, Baby, Building2 } from "lucide-react";
import { motion } from "framer-motion";

// Adicione estas definições antes do array services
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const services = [
  {
    icon: GraduationCap,
    title: "Psicopedagogia",
    description: "Auxilia junto á dificuldades de apredizagem, na elaborção e acompanhamento do PEI e reabilitação cognitiva.\nCrianças, adolescentes, adultos, e idosos."
  },
  {
    icon: Brain, // Mantido - bom para psicologia
    title: "Psicologia",
    description: "Área de Atuação:\nAnáslise do Comportamento\-Avaliação Psicológica para pré-operatórios\-Orientação Profissional\-Terapia Cognitivo Comportamental\-Abosdagem Psicanalítica\-Terapia do Esquema\-Terapia de Casal\-Avaliação Pisicodiagnóstica\-Acompanhamento Terapêutico\-Psicoeducação"
  },
  {
    icon: Mic2, // Versão melhorada do ícone de microfone
    title: "Fonoaudiologia",
    description: "Voz\-Linguagem\-Fluência\-Gerontologia (idoso)\-Audiologia\-Disfagia neuropsicologia\-Motricidade."
  },
  {
    icon: BrainCog, // Mantido - bom para neuropsicopedagogia
    title: "Neuropsicopedagogia",
    description: "Avaliação neuropsocológica detalhada\-Planos de intervenção personalizados\-Estratégias para melhor desempenho acadêmico e social."
  },
  {
    icon: Stethoscope, // Mais relacionado à área da saúde
    title: "Neuropsicologia",
    description: "Atividades Terapeuticas, Estimulação Cognitiva, Transtornos de Desenvolvimento, Reabilitação Neuropsicologica, Avaliação Neuropsicológica a partir dos 03 anos."
  },
  {
    icon: Salad, // Melhor representação para nutrição
    title: "Nutrição",
    description: "Avaliação Nutricional, Nutrição Infantil, Nutrição Clínica, Nutrição Comportamental"
  },
  {
    icon: Baby, // Ícone mais apropriado para fisioterapia infantil
    title: "Fisioterapia Infantil",
    description: "Reabilitação motora para crianças,Avaliação Fisioterapêutica, Estimulação Precoce, Tratamento de Condições Ortopédicas."
  },
  {
    icon: Building2,
    title: "Serviços Para empresas",
    description: "Recrutamento e Seleção de Pessoas, Análise de Perfil Comportamental, Análise de Clima Organizacional, Pesquisa de Satisfação Interna, Diagnóstico Empresarial, Treinamento e desenvolvimento, Consultoria em RH Estratégico."
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="relative min-h-screen w-full overflow-hidden bg-blue-200">
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="serviceWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#bfdbfe' }} /> {/* blue-200 */}
              <stop offset="100%" style={{ stopColor: '#dbeafe' }} /> {/* blue-100 */}
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#serviceWaveGradient1)"></path>
        </svg>
      </div>

      {/* Conteúdo existente */}
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 pt-10"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Especializações</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg h-full">
                <CardHeader className="pb-0 px-2 flex flex-row items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    {service.icon && <service.icon className="w-6 h-6 text-primary" />}
                  </motion.div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-2 pt-0">
                  <CardDescription className="text-left">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Onda Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="serviceWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#dbeafe' }} /> {/* blue-100 */}
              <stop offset="100%" style={{ stopColor: '#bfdbfe' }} /> {/* blue-200 */}
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#serviceWaveGradient2)"></path>
        </svg>
      </div>
      <img
        src="/site_edh/imagem.jpg"  // Ajustando o caminho da imagem
        alt="Service"
      />
    </section>
  );
};