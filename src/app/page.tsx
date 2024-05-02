import Head from 'next/head';
import MainCard from './components/MainCard';
import React from "react";
import CardKnoledge from "./components/CardKnoledge";
import ProjectCard from './components/CardProject';
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
          <div className="flex flex-wrap justify-center">
            <ProjectCard
              title="Threejs - Customização de sapatos"
              description="Software desenvolvido por mim durante meu período como desenvolvedor. Produzido enquanto aprendia three.js, foi feito em HTML, 
              CSS e JavaScript padrão. O conceito do projeto é auxiliar no design de tênis, permitindo que as informações sobre cores em sua versão final
              pudessem ser enviadas para a loja para confecção. Além disso, o protótipo conta com o uso de alguns conceitos de rotação do objeto 3D."
              imageUrl="/treejs.png"
              deployLink='https://threejs-shoes.vercel.app/'
              githubLink='https://github.com/lwawa/threejsShoes'
            />
            <ProjectCard
              title="Flet - App financeiro"
              description="App feito para desafiar meus conhecimentos em python, utilizando um framework que eu não era familiarizado. Comecei meu estudo sobre
              o framework integrando python e flutter para a criação de um app financeiro, possiblitando cadastrar os icones dos yahoo finance com nomes para identificação
              para ser possivel a visualização dos valores de ações da bolsa e criptomoedas. Infelizmente o vercel não possui suporte ao framework o que impossibilitou o deploy
              do projeot no presente momento."
              imageUrl="/flet.png"
              deployLink=''
              githubLink='https://github.com/lwawa/criptoView'
            />
            <ProjectCard
              title="Angular/Nest - Aplicação de cadastro"
              description="Aplicação de consumo de banco de dados, produzida para trabalhar com uma API também desenvolvida por mim objetivando demonstrar meus conhecimentos
              de backend, juntamente com o consumo de uma API de cps. A aplicação consiste em um cadastro de usuários, onde é possível cadastrar, editar, excluir e visualizar
              os usuários cadastrados. A aplicação foi desenvolvida em Angular, utilizando o framework Nest para o desenvolvimento da API."
              imageUrl="/angular.png"
              deployLink='https://rest-angular-cadastro.vercel.app/'
              githubLink='https://github.com/lwawa/RestAngularCadastro'
            />
          </div>
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
