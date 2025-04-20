import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
        src="/site_edh/video.mp4"
      >
      </video>
      
      <div className="relative z-10 bg-black/30 min-h-screen w-full">
        <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
          <div className="text-center text-white py-20">
            <img 
              src="/site_edh/logo1.png" 
              alt="Logo EDH" 
              className="mx-auto mb-8 w-72 h-auto max-w-full"
            />
            <h1 className="text-5xl font-bold mb-4">Excelência em Desenvolvimento Humano</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transformando vidas através do desenvolvimento humano integral. 
              Oferecemos atendimento especializado em diversas áreas da saúde mental e desenvolvimento.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Agende sua Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Adicionando o efeito de onda com degradê */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#4f74ff' }} />
              <stop offset="50%" style={{ stopColor: '#6f95ff' }} />
              <stop offset="100%" style={{ stopColor: '#8fb5ff' }} />
            </linearGradient>
          </defs>
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
};