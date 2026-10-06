// Todos os dados da academia num lugar só. Conteúdo marcado como PROVISÓRIO
// deve ser trocado pelo que o cliente informar.

// PROVISÓRIO: endereço exato ainda não informado pelo cliente.
const address = {
  street: "",
  neighborhood: "",
  city: "Santa Rita do Sapucaí",
  state: "MG",
  postalCode: "",
  // Centro de Santa Rita do Sapucaí; trocar pelas coordenadas da academia.
  lat: -22.2521,
  lng: -45.7034,
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

// PROVISÓRIO: número de WhatsApp fictício (somente dígitos, com DDI 55).
const whatsappNumber = "5535999999999";
const whatsappMessage = encodeURIComponent(
  "Olá! Quero agendar uma aula experimental na Gold Lions.",
);

export const site = {
  name: "Gold Lions Jiu-Jitsu Team",
  shortName: "Gold Lions",
  description:
    "Academia de jiu-jitsu em Santa Rita do Sapucaí - MG. Turmas kids, feminino, iniciante e competição. Agende sua aula experimental gratuita.",
  url: "https://goldlionsjiujitsu.com.br", // PROVISÓRIO: domínio ainda não definido
  address: { ...address, full: fullAddress },
  maps: {
    embed: `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
    waze: `https://waze.com/ul?q=${mapsQuery}&navigate=yes`,
  },
  whatsapp: {
    number: whatsappNumber,
    display: "(35) 99999-9999", // PROVISÓRIO
    link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  },
  instagram: {
    handle: "@goldlionsjj", // PROVISÓRIO
    link: "https://instagram.com/goldlionsjj",
  },
  email: "contato@goldlionsjiujitsu.com.br", // PROVISÓRIO
  openingHours: [
    { days: "Segunda a sexta", hours: "06:30 – 21:30" },
    { days: "Sábado", hours: "09:00 – 12:00" },
  ],
};

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#turmas", label: "Turmas" },
  { href: "#horarios", label: "Horários" },
  { href: "#professores", label: "Professores" },
  { href: "#planos", label: "Planos" },
  { href: "#localizacao", label: "Localização" },
];

// PROVISÓRIO: números a confirmar com o cliente.
export const stats = [
  { value: 150, suffix: "+", label: "Alunos ativos" },
  { value: 10, suffix: "", label: "Anos de tatame" },
  { value: 8, suffix: "", label: "Faixas-pretas formados" },
  { value: 60, suffix: "+", label: "Pódios em campeonatos" },
];

export type ClassKey =
  | "kids"
  | "juvenil"
  | "iniciante"
  | "avancado"
  | "feminino"
  | "nogi";

export const classes: {
  key: ClassKey;
  name: string;
  audience: string;
  description: string;
}[] = [
  {
    key: "kids",
    name: "Kids",
    audience: "4 a 12 anos",
    description:
      "Coordenação, disciplina e autoconfiança com aulas lúdicas e seguras.",
  },
  {
    key: "juvenil",
    name: "Juvenil",
    audience: "13 a 17 anos",
    description:
      "Técnica e preparo para quem quer evoluir rápido e começar a competir.",
  },
  {
    key: "iniciante",
    name: "Adulto Iniciante",
    audience: "Faixa branca",
    description:
      "Fundamentos do zero, no seu ritmo. Ninguém precisa chegar preparado.",
  },
  {
    key: "avancado",
    name: "Avançado & Competição",
    audience: "Faixas graduadas",
    description:
      "Treinos intensos, estratégia de luta e preparação para campeonatos.",
  },
  {
    key: "feminino",
    name: "Feminino",
    audience: "Só mulheres",
    description:
      "Ambiente acolhedor para aprender defesa pessoal e jiu-jitsu entre mulheres.",
  },
  {
    key: "nogi",
    name: "No-Gi",
    audience: "Sem kimono",
    description:
      "Jiu-jitsu de rash guard: mais ritmo, pegadas diferentes e muita transição.",
  },
];

// PROVISÓRIO: grade a confirmar com o cliente.
export const schedule: {
  day: string;
  short: string;
  sessions: { time: string; class: string }[];
}[] = [
  {
    day: "Segunda",
    short: "Seg",
    sessions: [
      { time: "06:30", class: "Adulto Iniciante" },
      { time: "17:30", class: "Kids" },
      { time: "19:00", class: "Adulto Iniciante" },
      { time: "20:15", class: "Avançado & Competição" },
    ],
  },
  {
    day: "Terça",
    short: "Ter",
    sessions: [
      { time: "06:30", class: "No-Gi" },
      { time: "17:30", class: "Juvenil" },
      { time: "19:00", class: "Feminino" },
      { time: "20:15", class: "No-Gi" },
    ],
  },
  {
    day: "Quarta",
    short: "Qua",
    sessions: [
      { time: "06:30", class: "Adulto Iniciante" },
      { time: "17:30", class: "Kids" },
      { time: "19:00", class: "Adulto Iniciante" },
      { time: "20:15", class: "Avançado & Competição" },
    ],
  },
  {
    day: "Quinta",
    short: "Qui",
    sessions: [
      { time: "06:30", class: "No-Gi" },
      { time: "17:30", class: "Juvenil" },
      { time: "19:00", class: "Feminino" },
      { time: "20:15", class: "Avançado & Competição" },
    ],
  },
  {
    day: "Sexta",
    short: "Sex",
    sessions: [
      { time: "06:30", class: "Adulto Iniciante" },
      { time: "17:30", class: "Kids" },
      { time: "19:00", class: "Treino Livre" },
    ],
  },
  {
    day: "Sábado",
    short: "Sáb",
    sessions: [
      { time: "09:00", class: "Kids" },
      { time: "10:30", class: "Treino Livre" },
    ],
  },
];

// PROVISÓRIO: professores fictícios.
export const instructors = [
  {
    name: "Professor Responsável",
    belt: "black" as const,
    degree: "Faixa-preta 3º grau",
    bio: "Fundador da Gold Lions. Mais de 15 anos de tatame e campeão mineiro e brasileiro.",
    instagram: "https://instagram.com/goldlionsjj",
  },
  {
    name: "Professor Assistente",
    belt: "black" as const,
    degree: "Faixa-preta",
    bio: "Responsável pelas turmas de competição e No-Gi.",
    instagram: "https://instagram.com/goldlionsjj",
  },
  {
    name: "Professora Kids & Feminino",
    belt: "brown" as const,
    degree: "Faixa-marrom",
    bio: "Especialista em ensino para crianças e na turma feminina.",
    instagram: "https://instagram.com/goldlionsjj",
  },
];

// PROVISÓRIO: depoimentos fictícios.
export const testimonials = [
  {
    quote:
      "Comecei sem nenhum preparo físico e fui super bem recebido. Hoje o tatame é a melhor parte do meu dia.",
    name: "Aluno da turma iniciante",
    detail: "Faixa azul · 2 anos de treino",
  },
  {
    quote:
      "Meu filho ficou mais focado e confiante na escola. Os professores têm muito cuidado com as crianças.",
    name: "Mãe de aluno kids",
    detail: "Turma Kids",
  },
  {
    quote:
      "A turma feminina me deu segurança para começar. Ambiente de respeito e muita evolução.",
    name: "Aluna da turma feminina",
    detail: "Faixa branca · 1 ano de treino",
  },
];

// PROVISÓRIO: preços fictícios — confirmar se o cliente quer exibir valores.
export const plans = [
  {
    name: "Mensal",
    price: "R$ 150",
    period: "/mês",
    features: ["Acesso a todas as turmas", "Sem fidelidade", "Aula experimental grátis"],
    highlighted: false,
  },
  {
    name: "Trimestral",
    price: "R$ 130",
    period: "/mês",
    features: [
      "Acesso a todas as turmas",
      "Economia de R$ 60",
      "Camiseta oficial Gold Lions",
    ],
    highlighted: true,
  },
  {
    name: "Família",
    price: "R$ 250",
    period: "/mês",
    features: ["2 pessoas da mesma família", "Acesso a todas as turmas", "Ideal para pais e filhos"],
    highlighted: false,
  },
];

export const faqs = [
  {
    q: "Preciso ter experiência ou preparo físico para começar?",
    a: "Não. A turma iniciante é feita para quem nunca treinou. O condicionamento vem com o tempo, no seu ritmo.",
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
    q: "A partir de que idade as crianças podem treinar?",
    a: "A turma Kids recebe crianças a partir de 4 anos, com aulas adaptadas para cada faixa etária.",
  },
  {
    q: "Jiu-jitsu é seguro?",
    a: "Sim. Os treinos são supervisionados, com foco em técnica e respeito ao parceiro. Ninguém precisa competir.",
  },
  {
    q: "Mulheres podem treinar nas turmas mistas?",
    a: "Claro. E também temos uma turma exclusivamente feminina para quem prefere começar por ela.",
  },
];

// PROVISÓRIO: preencher `src` com as fotos reais (em /public/galeria).
export const gallery: { src?: string; alt: string; span?: string }[] = [
  { alt: "Treino da turma adulta", span: "sm:col-span-2 sm:row-span-2" },
  { alt: "Pódio em campeonato", span: "sm:row-span-2" },
  { alt: "Turma kids" },
  { alt: "Graduação de faixas" },
  { alt: "Equipe reunida", span: "sm:col-span-2" },
  { alt: "Turma feminina" },
  { alt: "Treino de No-Gi" },
];
