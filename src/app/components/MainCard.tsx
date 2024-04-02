interface CardProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const Card: React.FC<CardProps> = ({ children, maxWidth = "7xl" }) => {
  return (
    <div className={`grid gap-4 max-w-${maxWidth} mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-6 w-full`}>
      {children}
    </div>
  );
};

export default Card;