// Component to add new task
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useContext, useEffect } from "react";
import BasicTextFields from "../shared/TextField";
import BasicButton from "../shared/Button";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { routes } from "../shared/constants";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import BasicSelect from "../shared/BasicSelect";
import { useId } from "react";
import { TaskContext } from "../context/ContextStore";

const AddTask = () => {
  const [error, setError] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [taskObj, setTaskObj] = useState({});

  const navigate = useNavigate();
  const { t } = useTranslation();
  const taskList = useContext(TaskContext);

  const handleTitle = (event) => {
    setTitle(event.target.value);
    if (title === "" || title === null) {
      setError(true);
    }
    setError(false);
    console.log(title);
  };

  const handleDesc = (event) => {
    setDesc(event?.target.value);
  };
  const handleStatus = (status) => {
    setStatus(status);
  };
  const handleBack = () => {
    navigate(routes.list);
  };

  const taskObjUpdated = {
    id: useId(),
    title: title,
    description: desc,
    deadline: "01/01/2025",
    status: status,
  };

  useEffect(() => {
    setTaskObj(taskObjUpdated);
  }, [title, desc, status]);

  const handleSubmt = () => {
    const updatedTasks = taskList.task;
    updatedTasks.push(taskObj as any);
    taskList.setTask(updatedTasks);
    navigate(routes.list);
  };

  return (
    <>
      <Grid container sx={{ mt: 3 }}>
        <Grid xs={3} sm={3} md={3} lg={3} sx={{ textAlign: "right", pr: 2 }}>
          <ArrowBackIcon onClick={handleBack} className="cursor-pointer" />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 3 }}>
        <Grid xs={3} sm={3} md={3} lg={3} sx={{ textAlign: "right", pr: 2 }}>
          <Typography variant="body2" component="div" className="label-custom">
            {t("tasks.title")}
            <span>*</span>
          </Typography>
        </Grid>
        <Grid xs={9} sm={9} md={9} lg={9}>
          <BasicTextFields
            label=""
            onChange={handleTitle}
            placeholder="Add title"
          />
          {error && (
            <FormHelperText sx={{ mt: 0, ml: 1, mb: 1 }} className="error-text">
              {t("validation.title_required")}
            </FormHelperText>
          )}
        </Grid>
        <Grid xs={3} sm={3} md={3} lg={3} sx={{ textAlign: "right", pr: 2 }}>
          <Typography variant="body2" component="div" className="label-custom">
            {t("status")}
          </Typography>
        </Grid>
        <Grid xs={9} sm={9} md={9} lg={9} sx={{ mt: 1, mb: 1 }}>
          <BasicSelect
            menuItem1={t("completed")}
            menuItem2={t("pending")}
            onChange={handleStatus}
            status={status}
          />
        </Grid>
        <Grid xs={3} sm={3} md={3} lg={3} sx={{ textAlign: "right", pr: 2 }}>
          <Typography variant="body2" component="div" className="label-custom">
            {t("tasks.description")}
          </Typography>
        </Grid>
        <Grid xs={9} sm={9} md={9} lg={9}>
          <OutlinedInput
            fullWidth
            multiline
            placeholder="add description"
            rows={4}
            onChange={handleDesc}
          />
        </Grid>
        <Grid mdOffset={3} className="p-t-20">
          <Stack spacing={2} direction="row">
            <BasicButton
              variant="contained"
              onClick={handleSubmt}
              buttonText={t("tasks.add_task")}
            />
            <BasicButton
              variant="outlined"
              onClick={handleBack}
              buttonText={t("cancel")}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
export default AddTask;
