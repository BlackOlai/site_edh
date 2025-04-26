import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
<<<<<<< HEAD
import { Brain, Stethoscope, Baby, Building2, EarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Accessibility, Psychology, Hearing } from '@mui/icons-material';

=======
import { GraduationCap, Brain, Mic2, BrainCog, Stethoscope, Salad, Baby, Building2 } from "lucide-react";
import { motion } from "framer-motion";

// Adicione estas definições antes do array services
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
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
<<<<<<< HEAD
    icon: Accessibility,
    title: "Fisioterapia",
    description: "Atuamos na prevenção, diagnóstico e tratamento de disfunções do movimento causadas por doenças, lesões ou alterações posturais. Tais disfunções podem ter origem em doenças, condições genéticas, acidentes, traumas e outros fatores prejudiciais à mobilidade. Nossos profissionais utilizam com recursos como exercícios terapêuticos, técnicas manuais e aparelhos específicos para promover a reabilitação funcional, melhorar a qualidade de vida e prevenir agravamentos",
    color: "bg-blue-100"
  },
  {
    icon: Baby,
    title: "Fisioterapia Infantil",
    description: "A fisioterapia infantil é voltada ao atendimento de bebês, crianças e adolescentes com atrasos no desenvolvimento motor, síndromes genéticas, paralisia cerebral, doenças neuromusculares, entre outras condições. O trabalho visa estimular o desenvolvimento motor e funcional por meio de técnicas lúdicas adaptadas à faixa etária. Cuidamos do seu bebê para que ele desenvolva de forma global e integrada.",
    color: "bg-blue-100"
  },
  {
    icon: Psychology,
    title: "Psicologia Clínica",
    description: "A psicologia clínica compreende a avaliação, diagnóstico e tratamento de questões emocionais, comportamentais e transtornos mentais. Nossos psicólogos clínicos utilizam diferentes abordagens terapêuticas (como Psicanálise, Terapia Cognitivo-Comportamental (TCC), Análise do Comportamento, Terapia do Esquema, Teoria da Subjetividade numa perspectiva Cultural-histórica) para promover o autoconhecimento, o bem-estar e o desenvolvimento pessoal dos pacientes.",
    color: "bg-blue-100"
  },
  {
    icon: Baby,
    title: "Psicologia Infantil",
    description: "A psicologia infantil é uma área da psicologia clínica voltada para o acompanhamento de crianças e suas dificuldades emocionais, comportamentais ou de desenvolvimento. O trabalho envolve a escuta da criança, orientação aos pais e intervenções específicas para promover um desenvolvimento psicológico saudável. Contamos com um espaço lúdico e adequado para o atendimento de crianças desde a mais tenra idade. E nossos profissionais possuem ampla experiência no atendimento deste público através dos mais diversos recursos como brinquedos e brincadeiras, oficinas práticas, interação familiar, literatura, entre outros.",
    color: "bg-blue-100"
  },
  {
    icon: Stethoscope,
    title: "Psicopedagogia",
    description: "A psicopedagogia atua na identificação e intervenção de dificuldades e distúrbios de aprendizagem. O psicopedagogo observa o processo de aquisição do conhecimento, considerando aspectos cognitivos, emocionais identifica obstáculos no aprendizado e propõe estratégias personalizadas que envolvem aspectos cognitivos, emocionais e sociais, usando conhecimentos da pedagogia, psicologia, motricidade e outros campos, a fim de favorecer o processo de aprendizagem. Nossos profissionais estão habilitados para atender as diferentes faixas etárias (infância, adolescência, adultez e idosos), incluindo pacientes neurodivergentes ou com processos de declínios cognitivos.",
    color: "bg-blue-100"
  },
  {
    icon: Brain,
    title: "Neuropsicologia",
    description: "A neuropsicologia estuda a relação entre o cérebro e o comportamento humano, para compreender como o cérebro atua nas funções cognitivas, nas emoções e no modo de vida das pessoas através do conhecimento da neurociência e da psicologia, conseguindo avaliar, diagnosticar e intervir alterações cognitivas e comportamentais resultantes de lesões ou disfunções cerebrais congênitas ou adquiridas. Na prática, o neuropsicólogo realiza avaliações cognitivas detalhadas (atenção, memória, linguagem, funções executivas, etc.), avaliação dos diferentes transtornos mentais e/ou de personalidade, com uso de instrumentos validados pelo Conselho Federal de Psicologia, e auxiliam nos diagnósticos, encaminhamentos e intervenções assertivas. Também atua na reabilitação cognitiva e neurofuncional, melhorando a qualidade de vida dos pacientes. Nossos profissionais possuem habilitação e instrumentos \"padrão ouro\", além de se manterem em constante formação acadêmico-científica, para uma atuação ética e competente.",
    color: "bg-blue-100"
  },
  {
    icon: Hearing,
    title: "Fonoaudiologia",
    description: "A fonoaudiologia tem sua atuação voltada para os distúrbios da comunicação humana, como dificuldades na fala, linguagem oral e escrita, audição, voz, fluência (gagueira) e motricidade orofacial e deglutição. Tem a finalidade de promover melhora na comunicação e linguagens, prevenir, diagnosticar e tratar questões relacionadas a estes aspectos, atuando na reabilitação e no desenvolvimento da comunicação e da alimentação, nas diferentes faixas etárias, desde bebês a idosos. Além disso, para alguns diagnósticos, contamos com exames específicos com audiometria, impedanciometria e avaliação do PAC. Contamos profissionais habilitados para realização dos exames, bem como para as intervenções adequadas, inclusive tratamento para o TPAC – Transtorno do Processamento Auditivo – com o uso de cabide acústica, e para acompanhamento de pacientes atípicos.",
    color: "bg-blue-100"
  },
  {
    icon: Building2,
    title: "Terapia ABA (Análise do Comportamento Aplicada)",
    description: "ABA é uma abordagem baseada na ciência do comportamento, frequentemente aplicada no tratamento de pessoas com Transtorno do Espectro Autista (TEA). Utiliza reforços positivos e estratégias estruturadas para desenvolver habilidades sociais, cognitivas, acadêmicas e de comunicação, reduzindo comportamentos desadaptativos. Nossos profissionais possuem habilitação adequada para atuação com Terapia ABA, com certificação e ampla experiência",
    color: "bg-blue-100"
=======
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
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
  }
];

export const Services = () => {
  return (
<<<<<<< HEAD
    <section 
      id="servicos" 
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/site_edh/images/BG3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
=======
    <section id="servicos" className="relative min-h-screen w-full overflow-hidden bg-blue-200">
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="serviceWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
<<<<<<< HEAD
              <stop offset="0%" style={{ stopColor: '#121D2B' }} />
              <stop offset="100%" style={{ stopColor: '#121D2B' }} />
=======
              <stop offset="0%" style={{ stopColor: '#bfdbfe' }} /> {/* blue-200 */}
              <stop offset="100%" style={{ stopColor: '#dbeafe' }} /> {/* blue-100 */}
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#serviceWaveGradient1)"></path>
        </svg>
      </div>

<<<<<<< HEAD
=======
      {/* Conteúdo existente */}
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
          viewport={{ once: false }}
          className="text-center mb-12 pt-10"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white">Especializações</h2>
=======
          viewport={{ once: true }}
          className="text-center mb-12 pt-10"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Especializações</h2>
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
<<<<<<< HEAD
          viewport={{ once: false }}
=======
          viewport={{ once: true }}
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
<<<<<<< HEAD
              <Card className={`${service.color || 'bg-white'} hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg h-full`}>
=======
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg h-full">
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
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
<<<<<<< HEAD
              <stop offset="0%" style={{ stopColor: '#121D2B' }} />
              <stop offset="100%" style={{ stopColor: '#121D2B' }} />
=======
              <stop offset="0%" style={{ stopColor: '#dbeafe' }} /> {/* blue-100 */}
              <stop offset="100%" style={{ stopColor: '#bfdbfe' }} /> {/* blue-200 */}
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#serviceWaveGradient2)"></path>
        </svg>
      </div>
<<<<<<< HEAD
=======
      <img
        src="/site_edh/imagem.jpg"  // Ajustando o caminho da imagem
        alt="Service"
      />
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
    </section>
  );
};