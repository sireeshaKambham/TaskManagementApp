// Button component
import Button from "@mui/material/Button";

interface IButton {
  variant?: 'outlined' | 'contained';
  buttonText?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const BasicButton: React.FC<IButton> = (props) => {
  return (
    <>
      <Button variant={props.variant} onClick={props.onClick} disabled={props.disabled}>
        {props.buttonText}
      </Button>
    </>
  );
};
export default BasicButton;
