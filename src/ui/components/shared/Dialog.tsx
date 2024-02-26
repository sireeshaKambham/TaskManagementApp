// Alert dialog component
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

interface IDialog {
  message?: string;
  open: boolean;
  handleClose?: () => void;
  handleDeleteTask?: () => void;
  btnTextCancel?: string;
  btnTextConfirm?: string;
}
const AlertDialog: React.FC<IDialog> = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.message}</DialogTitle>
        <DialogActions>
          <Button onClick={props.handleClose}>{props.btnTextCancel}</Button>
          <Button onClick={props.handleDeleteTask} autoFocus>
            {props.btnTextConfirm}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default AlertDialog;
