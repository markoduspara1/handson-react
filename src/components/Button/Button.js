import { Button } from "./ButtonStyle";

const ButtonWrapper = ({ children, onClick, buttonStyle }) => {
  console.log(buttonStyle);
  return (
    <Button buttonStyle={buttonStyle} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
