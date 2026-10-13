import {
  Brain,
  HandHeart,
  HeartPulse,
  Shield,
  ShieldCheck,
  Shirt,
  Sparkles,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { photos, type Photo } from "./photos";

// Páginas por intenção de busca (SEO local). Cada uma responde uma busca
// específica com conteúdo próprio, sem prometer turmas que a academia ainda
// não tem (hoje é turma única para todos os níveis).
// Jiu-jitsu infantil fica de fora até o cliente confirmar se crianças treinam.
export type IntentPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  title: [string, string];
  lead: string;
  photo: Photo;
  benefits: { icon: LucideIcon; title: string; text: string }[];
  howTitle: string;
  how: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const intentPages: IntentPage[] = [
  {
    slug: "aula-experimental",
    metaTitle: "Aula grátis de jiu-jitsu em Santa Rita do Sapucaí - MG",
    metaDescription:
      "Aula experimental gratuita de jiu-jitsu na Gold Lions, no Centro de Santa Rita do Sapucaí - MG. Todos os níveis, sem precisar de kimono. Agende no WhatsApp.",
    breadcrumb: "Aula experimental",
    title: ["Aula experimental grátis", "em Santa Rita do Sapucaí"],
    lead: "Venha conhecer a Gold Lions sem pagar nada e sem compromisso. A aula é para todos os níveis: se você nunca treinou, começa do zero, no seu ritmo.",
    photo: photos.equipeKimonos,
    benefits: [
      { icon: Sparkles, title: "Sem compromisso", text: "Treine, conheça a equipe e decida com calma se quer continuar." },
      { icon: Shirt, title: "Sem kimono", text: "Para a primeira aula, basta uma roupa de treino confortável." },
      { icon: Users, title: "Todos os níveis", text: "Iniciantes e graduados treinam juntos, cada um no seu ritmo." },
      { icon: ShieldCheck, title: "Professor formado", text: "José Alfredo é formado em Educação Física e tem mais de 10 anos de tatame." },
    ],
    howTitle: "Como funciona",
    how: [
      { title: "Chame no WhatsApp", text: "Diga que quer fazer a aula experimental e escolha o melhor horário." },
      { title: "Venha confortável", text: "Roupa de treino, uma garrafa de água e chinelo. Não precisa de kimono." },
      { title: "Chegue 10 minutos antes", text: "Você conhece o professor, o espaço, e já entra no tatame." },
    ],
    faqs: [
      { q: "Quanto custa a aula experimental?", a: "Nada. A primeira aula é gratuita e sem compromisso." },
      { q: "Preciso estar em forma para fazer a aula?", a: "Não. A aula recebe todos os níveis, e o condicionamento vem com o tempo, no seu ritmo." },
      { q: "O que eu levo?", a: "Roupa de treino confortável (camiseta e bermuda ou legging), água e chinelo. O kimono fica para depois." },
      { q: "Como eu agendo?", a: "Pelo WhatsApp (35) 99843-8819. É só escolher um dos horários de segunda a sexta." },
    ],
  },
  {
    slug: "defesa-pessoal",
    metaTitle: "Defesa pessoal com jiu-jitsu em Santa Rita do Sapucaí",
    metaDescription:
      "Defesa pessoal com jiu-jitsu na Gold Lions, em Santa Rita do Sapucaí - MG: técnica e alavanca em vez de força, para todos os níveis. Primeira aula grátis.",
    breadcrumb: "Defesa pessoal",
    title: ["Defesa pessoal com jiu-jitsu", "em Santa Rita do Sapucaí"],
    lead: "O jiu-jitsu ensina a controlar uma situação usando técnica e alavanca, não força. Por isso é uma das artes marciais mais indicadas para defesa pessoal, para pessoas de qualquer porte.",
    photo: photos.inicioTreinoEmCasa,
    benefits: [
      { icon: Brain, title: "Técnica vence força", text: "Alavanca e posicionamento fazem a diferença, não o tamanho." },
      { icon: Shield, title: "Controle sem machucar", text: "Você aprende a neutralizar e controlar, não só a bater." },
      { icon: HandHeart, title: "Confiança", text: "Saber reagir muda a forma como você anda na rua e no dia a dia." },
      { icon: HeartPulse, title: "Saúde junto", text: "Fôlego, força e mobilidade vêm de brinde a cada treino." },
    ],
    howTitle: "Como é a defesa pessoal na Gold Lions",
    how: [
      { title: "Fundamentos desde a primeira aula", text: "Sair de baixo, manter a distância e se levantar com segurança são a base do jiu-jitsu e da defesa pessoal." },
      { title: "Treino com resistência real", text: "Você pratica com um parceiro de verdade, de forma técnica e supervisionada." },
      { title: "Evolução acompanhada", text: "No app do aluno você revê as técnicas em vídeo e acompanha a sua evolução." },
    ],
    faqs: [
      { q: "Jiu-jitsu funciona para defesa pessoal?", a: "Sim. Ele ensina a controlar alguém maior usando técnica, e boa parte dos conflitos reais termina no chão, que é onde o jiu-jitsu é mais forte." },
      { q: "Preciso ser forte?", a: "Não. A ideia é justamente usar técnica e alavanca. A força vem com o tempo, mas não é pré-requisito." },
      { q: "Tem aula específica de defesa pessoal?", a: "Por enquanto as aulas são de jiu-jitsu para todos os níveis, e a defesa pessoal está nos fundamentos que você treina em toda aula." },
    ],
  },
  {
    slug: "jiu-jitsu-para-mulheres",
    metaTitle: "Jiu-jitsu para mulheres em Santa Rita do Sapucaí",
    metaDescription:
      "Jiu-jitsu para mulheres na Gold Lions, em Santa Rita do Sapucaí - MG: defesa pessoal, condicionamento e uma equipe que te acolhe. Primeira aula grátis.",
    breadcrumb: "Jiu-jitsu para mulheres",
    title: ["Jiu-jitsu para mulheres", "em Santa Rita do Sapucaí"],
    lead: "Na Gold Lions as mulheres treinam com a equipe, num ambiente de respeito e com o professor acompanhando de perto. É jiu-jitsu de verdade: defesa pessoal, condicionamento e amizade.",
    photo: photos.futuroFitnessGalera,
    benefits: [
      { icon: ShieldCheck, title: "Defesa pessoal", text: "Técnicas para se defender de alguém maior usando alavanca, não força." },
      { icon: HeartPulse, title: "Saúde e disposição", text: "Condicionamento, força e mobilidade treinando de um jeito divertido." },
      { icon: HandHeart, title: "Ambiente de respeito", text: "Uma equipe que acolhe quem está chegando e treina com cuidado." },
      { icon: Timer, title: "No seu ritmo", text: "Você começa do zero e evolui no seu tempo, sem pressão." },
    ],
    howTitle: "Como é começar",
    how: [
      { title: "Agende a aula grátis", text: "Chame no WhatsApp, tire suas dúvidas e escolha um horário." },
      { title: "Treine com a equipe", text: "As aulas são para todos os níveis, e o professor acompanha cada aluna de perto." },
      { title: "Acompanhe sua evolução", text: "Pelo app do aluno você revê as técnicas e vê o seu progresso até a próxima faixa." },
    ],
    faqs: [
      { q: "Tem turma só para mulheres?", a: "Ainda não. As aulas são para todos, e as alunas treinam junto com a equipe, num ambiente de respeito." },
      { q: "Vou treinar com homens?", a: "As aulas são mistas. O treino é técnico e supervisionado, e você pode conversar com o professor sobre como prefere começar." },
      { q: "Preciso ter experiência?", a: "Não. A aula recebe todos os níveis, e você aprende os fundamentos no seu ritmo." },
    ],
  },
];

