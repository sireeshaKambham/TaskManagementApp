// Text field component
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface ITextField {
  label: string;
  onChange?: any;
  placeholder?: string;
}

const BasicTextFields: React.FC<ITextField> = (props) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        placeholder={props.placeholder}
        label={props.label}
        variant="outlined"
        onChange={props.onChange}
      />
    </Box>
  );
};
export default BasicTextFields;
