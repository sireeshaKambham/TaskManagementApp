// Card component
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTranslation } from "react-i18next";
import AlertDialog from "./Dialog";
import { TaskContext } from "../context/ContextStore";
import { useContext, useState } from "react";

const IntroDivider = ({ title, description, deadline, status, id }) => {
  const taskList = useContext(TaskContext);

  const [dialogOpenForDelete, setDialogOpenForDelete] =
    useState<boolean>(false);
  const { t } = useTranslation();

  const handleDelete = () => {
    setDialogOpenForDelete(true);
  };
  const handleClose = () => {
    setDialogOpenForDelete(false);
  };

  const handleDeleteTask = () => {
    const updatedTasks = taskList.task.filter((item) => item.id !== id);
    taskList.setTask(updatedTasks);
    setDialogOpenForDelete(false);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box className="card-padding">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Stack>
        <Typography
          color="text.secondary"
          variant="body2"
          className="text-ellipsis"
        >
          {description}
        </Typography>
      </Box>
      <Divider />
      <Box className="card-padding">
        <Typography gutterBottom variant="body2">
          {t("deadline")}
        </Typography>
        <Stack direction="row" spacing={1}>
          {deadline}
        </Stack>
      </Box>
      <Box className="card-padding">
        <Typography gutterBottom variant="body2">
          {t("status")}
          <DeleteOutlineIcon
            className="delete-button cursor-pointer"
            onClick={handleDelete}
          />
        </Typography>
        <Stack direction="row" spacing={1}>
          {status === "Completed" ? (
            <Chip color="primary" label="Completed" size="small" />
          ) : (
            <Chip label="Pending" size="small" />
          )}
        </Stack>
      </Box>
      {dialogOpenForDelete && (
        <AlertDialog
          message={t("alert.message_delete")}
          open={dialogOpenForDelete}
          handleClose={handleClose}
          btnTextCancel={t("alert.cancel")}
          btnTextConfirm={t("alert.confirm")}
          handleDeleteTask={() => handleDeleteTask()}
        />
      )}
    </Card>
  );
};

export default IntroDivider;
