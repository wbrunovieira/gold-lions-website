import type { StaticImageData } from "next/image";
import competicaoVitoria from "@/assets/fotos/competicao-vitoria.jpg";
import equipeKimonos from "@/assets/fotos/equipe-kimonos.jpg";
import futuroFitnessGalera from "@/assets/fotos/futuro-fitness-galera.jpg";
import futuroFitnessTurma from "@/assets/fotos/futuro-fitness-turma.jpg";
import inicioTreinoEmCasa from "@/assets/fotos/inicio-treino-em-casa.jpg";
import professorJoseAlfredo from "@/assets/fotos/professor-jose-alfredo.jpg";

// Fotos enviadas pelo cliente (prints de stories, recortados para tirar
// textos e marcações). São pequenas (~260–410px de largura): exibir sem
// ampliar além disso. Trocar pelos originais em alta quando chegarem.
export type Photo = { src: StaticImageData; alt: string };

export const photos = {
  equipeKimonos: {
    src: equipeKimonos,
    alt: "Equipe de jiu-jitsu do professor José Alfredo reunida no tatame, de kimono",
  },
  futuroFitnessTurma: {
    src: futuroFitnessTurma,
    alt: "Turma de jiu-jitsu com crianças e adultos na Futuro Fitness, em Santa Rita do Sapucaí",
  },
  futuroFitnessGalera: {
    src: futuroFitnessGalera,
    alt: "Alunos e alunas de jiu-jitsu reunidos no tatame azul depois do treino",
  },
  inicioTreinoEmCasa: {
    src: inicioTreinoEmCasa,
    alt: "José Alfredo de kimono azul com amigos no tatame montado em casa, onde tudo começou",
  },
  professorJoseAlfredo: {
    src: professorJoseAlfredo,
    alt: "Professor José Alfredo sorrindo no tatame com alunos ao fundo",
  },
  competicaoVitoria: {
    src: competicaoVitoria,
    alt: "Aluno da equipe com o braço erguido pelo árbitro após vencer a luta em campeonato",
  },
} satisfies Record<string, Photo>;
