import { Button } from "./ButtonStyle";

const ButtonWrapper = ({ children, onClick, buttonStyle }) => {
  return (
    <Button buttonStyle={buttonStyle} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
