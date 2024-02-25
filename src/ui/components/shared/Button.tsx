// Button component
import Button from "@mui/material/Button";

interface IButton {
  variant?: 'outlined' | 'contained';
  buttonText?: string;
  onClick?: () => void;
}

const BasicButton: React.FC<IButton> = (props) => {
  return (
    <>
      <Button variant={props.variant} onClick={props.onClick}>
        {props.buttonText}
      </Button>
    </>
  );
};
export default BasicButton;
