import { photos } from "./photos";

// Todos os dados da academia num lugar só. Conteúdo marcado como PROVISÓRIO
// deve ser trocado pelo que o cliente informar.

const address = {
  street: "Rua Coronel Erasmo Cabral, 121",
  neighborhood: "Centro",
  city: "Santa Rita do Sapucaí",
  state: "MG",
  postalCode: "37536-008",
  // Nível de rua (OpenStreetMap não tem o número); refinar pelo Perfil do Google.
  lat: -22.2543,
  lng: -45.7012,
};

const fullAddress = [
  address.street,
  address.neighborhood,
  `${address.city} - ${address.state}`,
  address.postalCode,
]
  .filter(Boolean)
  .join(", ");

const mapsQuery = encodeURIComponent(fullAddress);

// Somente dígitos, com DDI 55.
const whatsappNumber = "5535998438819";
const whatsappMessage = encodeURIComponent(
  "Olá! Quero agendar uma aula experimental na Gold Lions.",
);

export const site = {
  name: "Gold Lions Jiu-Jitsu Team",
  shortName: "Gold Lions",
  description:
    "Academia de jiu-jitsu em Santa Rita do Sapucaí - MG. Aulas para todos os níveis, de segunda a sexta. Agende sua aula experimental gratuita.",
  url: "https://goldlionsjiujitsu.com.br",
  address: { ...address, full: fullAddress },
  maps: {
    embed: `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
    waze: `https://waze.com/ul?q=${mapsQuery}&navigate=yes`,
  },
  whatsapp: {
    number: whatsappNumber,
    display: "(35) 99843-8819",
    link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  },
  instagram: {
    handle: "@gold_lionsjiujitsu",
    link: "https://www.instagram.com/gold_lionsjiujitsu/",
  },
  // Da primeira à última aula da grade. `dayOfWeek` alimenta o JSON-LD.
  openingHours: [
    {
      days: "Segunda a sexta",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "16:00",
    },
  ],
  // Cidades vizinhas de onde vêm alunos. Usadas na seção da região e no
  // areaServed do JSON-LD. Sem páginas por cidade (seriam doorway pages).
  region: [
    "Pouso Alegre",
    "Itajubá",
    "Cachoeira de Minas",
    "Piranguinho",
    "São Sebastião da Bela Vista",
    "Conceição dos Ouros",
    "Careaçu",
    "São José do Alegre",
  ],
};

export const navLinks = [
  { href: "#historia", label: "História" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#horarios", label: "Horários" },
  { href: "#professor", label: "Professor" },
  { href: "#planos", label: "Planos" },
  { href: "#localizacao", label: "Localização" },
];

// Academia em início de atividade: só fatos reais (nada de alunos/pódios inventados).
export const stats: { value?: number; text?: string; suffix?: string; label: string }[] = [
  { value: 10, suffix: "+", label: "Anos de tatame" },
  { text: "Ed. Física", label: "Professor formado" },
  { text: "Santa Rita", label: "Professor natural da cidade" },
  { text: "Grátis", label: "Aula experimental" },
];

// Ainda não há divisão de turmas: todos treinam juntos. Estes são os perfis
// de quem a aula atende, não turmas separadas.
export type AudienceKey =
  | "iniciantes"
  | "mulheres"
  | "saude"
  | "defesa"
  | "competicao"
  | "amizade";

export const audiences: {
  key: AudienceKey;
  name: string;
  tag: string;
  description: string;
}[] = [
  {
    key: "iniciantes",
    name: "Iniciantes",
    tag: "Do zero",
    description:
      "Nunca treinou? Você aprende os fundamentos no seu ritmo. Ninguém precisa chegar preparado.",
  },
  {
    key: "mulheres",
    name: "Mulheres",
    tag: "Para elas",
    description:
      "Jiu-jitsu e defesa pessoal num ambiente de respeito, com acompanhamento de perto.",
  },
  {
    key: "saude",
    name: "Saúde",
    tag: "Condicionamento",
    description:
      "Fôlego, força e mobilidade treinando de um jeito que nem parece academia.",
  },
  {
    key: "defesa",
    name: "Defesa pessoal",
    tag: "Segurança",
    description:
      "Técnicas que funcionam de verdade para controlar uma situação sem depender de força.",
  },
  {
    key: "competicao",
    name: "Competição",
    tag: "Para quem quer lutar",
    description:
      "Para quem quer ir além: estratégia de luta e preparação para os primeiros campeonatos.",
  },
  {
    key: "amizade",
    name: "Amizade",
    tag: "Equipe",
    description:
      "Uma equipe que treina junto, comemora junto e te puxa pra cima a cada aula.",
  },
];

// Grade enviada pelo cliente (ainda provisória para ele): aulas gerais,
// de segunda a sexta, sem turma específica por horário.
export const schedule = {
  days: "Segunda a sexta",
  // `dow` segue Date.getDay() (0 = domingo), usado para destacar o dia de hoje.
  weekdays: [
    { short: "Seg", long: "Segunda", dow: 1 },
    { short: "Ter", long: "Terça", dow: 2 },
    { short: "Qua", long: "Quarta", dow: 3 },
    { short: "Qui", long: "Quinta", dow: 4 },
    { short: "Sex", long: "Sexta", dow: 5 },
  ],
  provisional: true,
  sessions: [
    { start: "09:30", end: "10:30" },
    { start: "11:00", end: "12:00" },
    { start: "13:00", end: "14:00" },
    { start: "15:00", end: "16:00" },
  ],
};

export const instructor = {
  name: "José Alfredo",
  role: "Professor e fundador",
  bio: [
    "Natural de Santa Rita do Sapucaí, José Alfredo é engenheiro eletricista e formado em Educação Física, e carrega há muitos anos uma paixão pelo jiu-jitsu.",
    "A Gold Lions nasce dessa paixão: um espaço para ensinar a arte suave com método, segurança e cuidado com cada aluno, do primeiro treino em diante.",
  ],
  highlights: [
    "Natural de Santa Rita do Sapucaí",
    "Formado em Educação Física",
    "Engenheiro eletricista",
    "Mais de 10 anos de tatame",
  ],
  // Sem perfil pessoal informado: aponta para o Instagram da academia.
  instagram: "https://www.instagram.com/gold_lionsjiujitsu/",
};

// PROVISÓRIO: preços fictícios — confirmar se o cliente quer exibir valores.
export const plans = [
  {
    name: "Mensal",
    price: "R$ 150",
    period: "/mês",
    features: ["Todos os horários da semana", "Sem fidelidade", "Aula experimental grátis"],
    highlighted: false,
  },
  {
    name: "Trimestral",
    price: "R$ 130",
    period: "/mês",
    features: [
      "Todos os horários da semana",
      "Economia de R$ 60",
      "Camiseta oficial Gold Lions",
    ],
    highlighted: true,
  },
  {
    name: "Família",
    price: "R$ 250",
    period: "/mês",
    features: ["2 pessoas da mesma família", "Todos os horários da semana", "Para treinar junto"],
    highlighted: false,
  },
];

export const faqs = [
  {
    q: "Preciso ter experiência ou preparo físico para começar?",
    a: "Não. A aula recebe todos os níveis, e quem está começando aprende os fundamentos no seu ritmo. O condicionamento vem com o tempo.",
  },
  {
    q: "A aula experimental é gratuita?",
    a: "Sim! É só chamar no WhatsApp e agendar o melhor horário para você.",
  },
  {
    q: "Preciso ter kimono?",
    a: "Para a aula experimental, não: venha com roupa de treino confortável. Depois, ajudamos você a escolher o kimono certo.",
  },
  {
    q: "Jiu-jitsu é seguro?",
    a: "Sim. Os treinos são supervisionados, com foco em técnica e respeito ao parceiro. Ninguém precisa competir.",
  },
  {
    q: "Mulheres podem treinar?",
    a: "Claro. As aulas são abertas a todos, num ambiente de respeito, e o professor acompanha cada aluno de perto.",
  },
];

// Ordem da galeria (masonry): retrato e paisagem alternados.
export const gallery = [
  photos.equipeKimonos,
  photos.inicioTreinoEmCasa,
  photos.futuroFitnessTurma,
  photos.competicaoVitoria,
  photos.futuroFitnessGalera,
  photos.professorJoseAlfredo,
];

// Texto enviado pelo cliente (1ª pessoa do professor), dividido em etapas.
export const history = {
  milestones: [
    {
      when: "Há mais de 10 anos",
      title: "Uma garagem e 6 placas de tatame",
      text: "Nossa trajetória no Jiu-Jitsu começou há mais de 10 anos, em uma garagem de casa, com apenas 6 placas de tatame e o sonho de compartilhar essa arte com os amigos.",
      photo: photos.inicioTreinoEmCasa,
    },
    {
      when: "1 ano e meio",
      title: "Professor na Futuro Fitness",
      text: "Após anos de dedicação, tive a oportunidade de ministrar aulas durante 1 ano e meio na academia Futuro Fitness, onde ensinei crianças e adultos, fiz grandes amizades e adquiri experiências que contribuíram para meu crescimento como professor.",
      photo: photos.futuroFitnessTurma,
    },
    {
      when: "2026",
      title: "Nosso próprio espaço",
      text: "No início deste ano, nasceu o sonho de construir nosso próprio espaço de treino. Após 5 meses de muito trabalho, dedicação e fé em Deus, esse sonho se tornou realidade.",
      photo: null,
      badge: "Aulas desde 08/10",
    },
  ],
  purpose:
    "Hoje, seguimos com o propósito de ensinar Jiu-Jitsu, transmitir valores como disciplina e respeito e construir uma família dentro e fora do tatame.",
};
