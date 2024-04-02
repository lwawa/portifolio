import Head from 'next/head';
import MainCard from './components/MainCard';
import React from "react";
import CardKnoledge from "./components/CardKnoledge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  const email = 'lucas.wa@hotmail.com';
  const telefone = '+55 (48) 99614-5252';
  const conhecimentos: { nome: string; imagem: string; YearExp: number }[] = [
    { nome: "HTML", imagem: "/conhecimentos/html.png", YearExp: 3 },
    { nome: "CSS", imagem: "/conhecimentos/css.png", YearExp: 3 },
    { nome: "JavaScript", imagem: "/conhecimentos/javascript.jpg", YearExp: 2 },
    { nome: "Java", imagem: "/conhecimentos/java.png", YearExp: 2 },
    { nome: "Next.JS", imagem: "/conhecimentos/next.png", YearExp: 1 },
    { nome: "Python", imagem: "/conhecimentos/python.png", YearExp: 1 },
    { nome: "Node.js", imagem: "/conhecimentos/nodejs.png", YearExp: 1 },
    { nome: "C#", imagem: "/conhecimentos/c.png", YearExp: 1 },
    { nome: "Flutter", imagem: "/conhecimentos/flutter.png", YearExp: 1 },
    { nome: "Unity", imagem: "/conhecimentos/unity.png", YearExp: 1 },
    { nome: "Android", imagem: "/conhecimentos/android.png", YearExp: 1 },
    { nome: "Firebase", imagem: "/conhecimentos/firebase.png", YearExp: 1 },
  ];


  return (
    <div className="bg-gray-900 text-white p-4">
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio de Lucas Waterkemper Alberton, desenvolvedor full stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainCard>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-1">Olá, eu sou Lucas Waterkemper Alberton</h1>
            <p className="text-lg lg:text-xl mb-4">Desenvolvedor Full Stack</p>
            {/*<div className="flex items-center">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-4" />
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </div>*/}
          </div>
          <div className="lg:ml-auto flex items-center bg-gray-700 rounded-full pl-5">
            <div className="items-center">
              <p className="text-lg lg:text-xl mb-4 mr-4">3 anos de experiência</p>
              <p className="text-lg lg:text-xl mb-4 mr-4">como dev Fullstack</p>
            </div>
            <img src="/foto.png" alt="Foto de perfil" className="w-60 h-60 rounded-full " />
          </div>
        </div>
      </MainCard>

      <MainCard>
        <div className="text-center">
          <h2 className="text-2xl  lg:text-3xl font-bold mb-8">Sobre mim</h2>
          <p className="text-left">Bacharel em Engenharia de Software formado pela Universidade do Estado de Santa Catarina. Com três anos de experiência como desenvolvedor, tenho trabalhado em projetos desafiadores que me permitiram aprimorar minhas habilidades e conhecimentos para produzir aplicações eficientes.
            Estou animado para continuar minha jornada no campo da engenharia de software, utilizando os meus conhecimentos e sempre buscando aprender mais.</p>
        </div>
      </MainCard>

      <MainCard>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Tecnologias</h2>
          <div className="flex flex-wrap justify-center">
            {conhecimentos.map((conhecimento, index) => (
              <CardKnoledge
                key={index}
                nome={conhecimento.nome}
                imagem={conhecimento.imagem}
                YearExp={conhecimento.YearExp}
              />
            ))}
          </div>
        </div>
      </MainCard>

      <MainCard>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Projetos</h2>
        </div>
      </MainCard>

      <MainCard>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg lg:text-xl">Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p className="text-lg lg:text-xl">Telefone: <a href={`tel:${telefone}`}>{telefone}</a></p>
        </div>
      </MainCard>
    </div>
  );
};

export default Home;
