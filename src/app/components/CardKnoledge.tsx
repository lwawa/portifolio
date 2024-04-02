import React from "react";

interface CardKnoledgeProps {
  nome: string;
  imagem: string;
  YearExp: number;
}

const CardKnoledge: React.FC<CardKnoledgeProps> = ({ nome, imagem, YearExp }) => {
  const formattedYearExp = YearExp === 1 ? "1 ano" : `${YearExp} anos`;

  return (
    <div className="bg-gray-700 flex flex-col items-center justify-center w-32 p-2 m-1 rounded-md">
      <img src={imagem} alt={nome} className="w-16 h-16 mb-1" />
      <strong className="text-sm mb-1">{nome}</strong>
      <p className="text-xs">{formattedYearExp}</p>
    </div>
  );
};

export default CardKnoledge;
