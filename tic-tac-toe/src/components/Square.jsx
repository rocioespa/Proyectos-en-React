export const Square = ({ children, isSelected, updateBoard, index }) => {
  //children en este caso sera las x o las o, es todo lo que se envuelve, en este caso en TURNS
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index); //le paso el indice para saber en que casilla hizo clic
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
