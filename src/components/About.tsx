import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const About = () => {
  return (
    <section id="sobre" className="relative min-h-screen w-full overflow-hidden bg-purple-200">
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aboutWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e9d5ff' }} /> {/* purple-200 */}
              <stop offset="100%" style={{ stopColor: '#f3e8ff' }} /> {/* purple-100 */}
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#aboutWaveGradient1)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delayChildren: 0.2, staggerChildren: 0.3 }}
          className="text-center pt-10"
        >
          <motion.div 
            variants={fadeInUp}
            className="relative mb-16 mt-12"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-300/50 to-purple-200 rounded-lg"></div>
            <img 
              src="/mosaico.jpg" 
              alt="Mosaico EDH" 
              className="mx-auto rounded-lg shadow-2xl max-w-5xl w-full object-cover h-[500px] object-top"
            />
          </motion.div>

          {/* Primeira seção: Quem Somos, Missão e Visão */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Quem Somos</h2>
              <p className="text-black leading-relaxed text-left">
                Somos uma instituição que se preocupa com o bem-estar das pessoas, oferecendo serviços de qualidade em diversas áreas da saúde, com a finalidade de promover o desenvolvimento integral de nossos clientes. Nascemos do sonho de ter um espaço dialógico de busca por qualidade de vida, que fosse acolhedor e ético, mas basicamente humanizado, reconhecendo a diversidade existente em nossa sociedade e a singularidade que cada um constrói a partir de sua trajetória de vida, sobre si mesmo e seu lugar no mundo. Por isso, somos gente cuidando de gente!!
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Missão</h2>
              <p className="text-black leading-relaxed text-left">
                Oferecer aos clientes EDH serviços de qualidade em saúde e educação que promovam o desenvolvimento pleno e 
                constante das pessoas desde a infância, considerando as potencialidades e singularidades de cada um, num espaço 
                dialógico de construção de conhecimento sobre si mesmo e sobre o mundo que o cerca.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Visão</h2>
              <p className="text-black leading-relaxed text-left">
                Reconhecemos a pessoa como sujeito que se desenvolve ao longo da vida, de maneira constante e nas vivências do 
                cotidiano, construindo uma dinâmica relacional singular com a sociedade. Com isso, queremos ser referência na 
                promoção deste processo ininterrupto de desenvolvimento do humano, auxiliando as pessoas a obterem qualidade de 
                vida em qualquer faixa etária.
              </p>
            </motion.div>
          </div>

          {/* Seção de Valores com mais destaque */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Valores</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-purple-900 text-2xl mb-4">Ética</h3>
                <p className="text-black leading-relaxed text-left">
                  Atuamos com respeito, sigilo, responsabilidade e alteridade, garantindo práticas profissionais alinhadas aos 
                  princípios legais e morais que norteiam a saúde e a educação.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-purple-900 text-2xl mb-4">Compromisso</h3>
                <p className="text-black leading-relaxed text-left">
                  Buscamos a excelência no cuidado, com o desenvolvimento contínuo da equipe e com a confiança 
                  depositada por cada pessoa que busca nosso espaço, honrando essa confiança com seriedade e dedicação.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-purple-900 text-2xl mb-4">Acolhimento</h3>
                <p className="text-black leading-relaxed text-left">
                  Acolher cada indivíduo com escuta ativa, empatia e sensibilidade, respeitando sua história, suas dores e 
                  seus tempos, é nossa prioridade.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-purple-900 text-2xl mb-4">Cientificidade</h3>
                <p className="text-black leading-relaxed text-left">
                  Nossas práticas são orientadas pelo saber científico, e buscamos constante atualização, 
                  fundamentando nossas condutas em evidências científicas, assegurando a qualidade e a segurança no cuidado.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-purple-900 text-2xl mb-4">Humanização</h3>
                <p className="text-black leading-relaxed text-left">
                  Acreditamos que o atendimento humanizado, que reconheça e respeite a singularidade de cada um 
                  deva ser a essência dos serviços em saúde e educação, e desta forma procuramos atender nossos clientes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Onda Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aboutWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f3e8ff' }} /> {/* purple-100 */}
              <stop offset="100%" style={{ stopColor: '#e9d5ff' }} /> {/* purple-200 */}
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#aboutWaveGradient2)"></path>
        </svg>
      </div>
    </section>
  );
};