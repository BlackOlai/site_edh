import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const teamImages = [
  {
    image: "Aldrian-Jube.jpg",
    title: "Aldrian Jube",
    profession: "Psicóloga - CRP:09/011971",
    description: "Atendo pelo TCC com uma visão integralista da saúde físia e psicológica a partir do 15 anos: LGBTQIAPN+, Mulheres com omorbidades entre saúde física e acoecimento psicológico, ideação suicida ou depressão grave qualquer idade."
  },
  {
    image: "Aline-Menezes.jpg",
    title: "Aline Menezes",
    profession: "Psicóloga - CRP:09/20544",
    description: "Meu objetivo é ajudar mulheres, oferecendo suporte na sua vida pessoal e profissional, através do cuidado de suas emoções. Os atendimentos podem ser individuais ou em grupos. Utilizo a abordagm Terapia Cognitivo Comportamental-TCC Ofereço também psicoterapia com foco na carreira, orientação profissional para escolha ou mudança de carreira e avaliação psicossocial."
  },
  {
    image: "Caline-dos-Anjos.jpg",
    title: "Caline dos Anjos",
    profession: "Psicóloga - CRP - 09/014737",
    description: "Ofereço psicoterapia de orientação analítica para crianças a partir de 6 anos e adultos. Esse atendimento busca explorar e compreender o inconsciente, os conflitos emocionais e os padrões de comportamento através da análise das experiências passadas e presentes. "
  },
  {
    image: "Carllene-Kukertt.jpg",
    title: "Carllene Kukertt",
    profession: "Psicóloga",
    description: "Sou Pedagoga, Psicopedagoga e acadêmica do curso de Psicologia. Trabalho na área da Psicopedagogia realizando avaliações com hipótese diagnósticas com foco em intervenções (alfabetização e raciocírio matemático) de crianças e adolescentes com dificuldades de aprendizagem e idosos com declínio cognitivo. Especialista em atendimento de autismo com aplicação em ABA e TDAH."
  },
  {
    image: "Deisymara-Cavalini.jpg",
    title: "Deysimara Cavalini",
    profession: "Neuropsicóloga - CRP: 09/06517",
    description: "Especialista em Avaliação Neuropsicológica e Reabilitação Neuropsicológica. Cursando especialização em Neurociência, Comportamento e Psicopatologia e Intervenção ABA para Autismo e Deficiência Intelectual. Serviços oferecidos: Avaliação Neuropsicológica; Reabilitação Neuropsicológica; Avaliação Vocacional; Avaliação para Cirurgias; Psicoterapia Cognitiva-Comportamental; Estimulação Trancraniana por Corrente Continua (tDCS). "
  },
  {
    image: "Diego-Azevedo-Costa.jpg",
    title: "Diego Azevedo Costa",
    profession: "Psicólogo - CRP: 09/20638",
    description: "Sou Psicólogo Clínico e pós-graduando em Terapia Analítico-Comportamental.Meu objetivo é promover a saúde mental por meio do desenvolvimento derepertórios comportamentais, auxiliando em questões como ansiedade,depressão, vícios, fobias, desenvolvimento de habilidades e relaçõesinterpessoais. Tenho formação em Avaliação Psicológica e Neuropsicologia,além de experiência em registros e informações em saúde. Meu compromissé oferecer um ambiente acolhedor e fundamentado no conhecimento baseadoem evidências, para que as mudanças aconteçam de forma genuina.Atendo adolescentes, adultos e idosos."
  },
  {
    image: "Eloiza-Bazoti.jpg",
    title: "Eloiza Bazotti",
    profession: "Psicóloga Infantil e Neuropsicóloga",
    description: "Ofereço atendimento especializado em Psicoterapia Infantil e Avaliação Neuropsicológica para crianças de até 12 anos, auxiliando no desenvolvimento emocional, comportamental e cognitivo dos pequenos, promovendo um espaço seguro e acolhedor para o crescimento saudável.",
  },
  {
    image: "Jozenia-Lisboa.jpg",
    title: "Jozenia Lisboa",
    profession: "Psicóloga - CRP: 09/05739",
    description: "Ofereço atendimento psicológico para famílias, casais (adultos, adolescentes, crianças), com foco em promover um ambiente de acolhimento e transformação. Utilizo a abordagem da Terapia do Esquema, que integra elementos de várias técnicas terapêuticas para entender e modificar padrões de comportamento e cognições desadaptativas, visando a melhora na qualidade de vida e o bem-estar emocional de cada paciente.",
  },
  {
    image: "Kariny-Lemes.jpg",
    title: "Kariny Lemes",
    profession: "Psicóloga Infantil - CRP: 09/12246",
    description: "Atendo crianças de até 14 anos utilizando a abordagem da Terapia Cognitivo-Comportamental (TCC). Meu foco está em casos de ansiedade, depressão, dificuldades de relacionamento e cnflitos oarentais, proporcionando suporte e estratégias para enfrentar desafios emocionais e comportamentais.",
  },
  {
    image: "Loraynne-Gontijo.jpg",
    title: "Loraynne Gontijo",
    profession: "Fonoaudióloga - CRF a 5° 10150",
    description: "Sou formada pela UNIPLAN desde 2010 e no momento estou cursando pós em distúrbio da fala e da linguagem. Capacitações: Aba, deficiência múltiplas, Tdah. Áreas de atuação: Linguagem, leitura e escrita, motricidade, processamento auditivo central (pac). Exames: Audiometria, Impedanciometria e PAC.",
  },
  {
    image: "Maisa-Brito.jpg",
    title: "Maisa Brito",
    profession: "Psicóloga - CRP: 09/18087",
    description: "Ofereço suporte especializado para questões de ansiedade, depressão e conflitos interpessoais. Minha abordagem inclui trabalhar com relacionamentos, ajudando a resolver desafios e promover a comunicação eficaz. Além disso, ofereço orientação e suporte às mães, abordando os desafios e adaptabilidades associados à maternidade.",
  },
  {
    image: "Maraiz-Siqueira.jpg",
    title: "Maraiz Siqueira",
    profession: "Psicóloga Clínica - CRP: 09/19038",
    description: "Sou psicóloga clínica e pós graduanda em Teoria Cognitiva Comportamental e Análise do comportamento aplicada (ABA). Atendo crianças, adolescentes e aduktos no formato presencial. Meu foco é o tratamento da ansiedade, desenvolvimento de habilidades, autonomia e bem-estar.",
  },
  {
    image: "Matheus-Wisniewski.jpg",
    title: "Matheus Wisniewski",
    profession: "Psicólogo - CRP: 09/18008",
    description: "Atendo casos de ansiedade, depressão, transtornos de personalidade, emagrecimento, dificuldades de relacionamento e fobias, utilizo a Terapia Cognitivo-Comportamental (TCC) para promover mudanças nos padões de pensamento e comportamento, visando melhorar a qualidade de vida.",
  },
  {
    image: "Samuel-Oliveira.jpg",
    title: "Samuel Oliveira",
    profession: "Fisioterapeuta e Quiropraxista",
    description: "Minha principal função é o bem-estar, utilizando técnicas específicas para tratar dores musculoesqueléticas, melhorar a nobilidade, e prevenir lesões. Sempre focando em restaurar o equilíbrio do corpo e melhorar a qualidade de vida.",
  },
  {
    image: "Tauany-.jpg", // Era "Tauany-Moreira.jpg"
    title: "Tauany Moreira",
    profession: "Psicóloga - CRP: 09/016110",
    description: "Graduada em Psicologia, estudo os fundamentos da Psicanálise com foco crítico e social. Busco compreender a psicologia de forma integrada, considerando as vivências de cada pessoa, especialmente de mulheres e do público LGBTQIA+. Acredito na importância de uma escuta atenta e inclusiva, que acolha e contribua para a transformação diante de questões de gênero, sexualidade e desigualdades sociais.",
  },
  {
    image: "Telma-Oliveira-Cerutti-Schmidt.jpg",
    title: "Telma Oliveira Cerutti Schmidt",
    profession: "Psicóloga, Especialista em Educação Especial, Me. Processos de Desenvolvimanto Humano e Saúde. Idealizadora e Gestora de EDAH. CRP: 09/0081411",
    description: "Ofereço suporte a individuos e grupos, incluindo famílias e casais, em questões como desenvolvimento pessoal, relacionamentos e desafios emocionais. Utilizo técnicas modernas e abordagens baseadas em evidências para promover o bem-estar e o crescimento psicológico de cada pessoa.",
  }
];

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="equipe" className="relative min-h-screen w-full overflow-hidden bg-yellow-100">
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="teamWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#bfdbfe' }} />
              <stop offset="100%" style={{ stopColor: '#dbeafe' }} />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#teamWaveGradient1)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delayChildren: 0.2, staggerChildren: 0.1 }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-blue-900 mb-12 pt-10"
          >
            Nossa Equipe
          </motion.h2>
          
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-1">
              {teamImages.map((member, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-full cursor-pointer transform transition-all duration-300"
                    onClick={() => setSelectedMember(member)}
                  >
                    <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="relative w-full pb-[100%] mb-4 overflow-hidden rounded-t-lg">
                          <img
                            src={`/site_edh/images/${member.image}`}
                            alt={member.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardTitle className="text-xl font-bold text-blue-900">{member.title}</CardTitle>
                        <p className="text-blue-700 font-medium">{member.profession}</p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              style={{ width: '40px', height: '80px' }} 
              className="bg-blue-500 hover:bg-blue-600 [&>svg]:text-white [&>svg]:hover:text-white" 
            />
            <CarouselNext 
              style={{ width: '40px', height: '80px' }} 
              className="bg-blue-500 hover:bg-blue-600 [&>svg]:text-white [&>svg]:hover:text-white" 
            />
          </Carousel>
        </motion.div>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2x1">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedMember.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div className="relative w-full pb-[75%] mb-6">
                  <img
                    src={`/site_edh/images/${selectedMember.image}`}
                    alt={selectedMember.title}
                    className="absolute inset-0 w-full h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedMember.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Onda Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="teamWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#dbeafe' }} />
              <stop offset="100%" style={{ stopColor: '#bfdbfe' }} />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};