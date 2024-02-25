// Component to add new task
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import BasicTextFields from "../shared/TextField";
import BasicButton from "../shared/Button";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { routes } from "../shared/constants";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

const AddTask = () => {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleTitle = (e) => {
    setTitle(event?.target.value);
    if (title === "") {
      setError(true);
    }
    setError(false);
  };

  const handleBack = () => {
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
        <Typography variant="body" component="div" className="label-custom">
            {t("tasks.title")}<span>*</span>
        </Typography>
        </Grid>
        <Grid xs={9} sm={9} md={9} lg={9}>
          <BasicTextFields
            label=""
            onChange={handleTitle}
            placeholder="Add title"
          />
            <FormHelperText sx={{ mt: 0,ml:1, mb:1 }} className="error-text">
              {t("validation.title_required")}
            </FormHelperText>
        </Grid>
        <Grid xs={3} sm={3} md={3} lg={3} sx={{ textAlign: "right", pr: 2 }}>
        <Typography variant="body" component="div" className="label-custom">
            {t("tasks.description")}
        </Typography>
        </Grid>
        <Grid xs={9} sm={9} md={9} lg={9}>
          <OutlinedInput
            fullWidth
            multiline
            placeholder="add description"
            rows={4}
          />
        </Grid>
        <Grid mdOffset={3} className="p-t-20">
          <Stack spacing={2} direction="row">
            <BasicButton variant="contained" buttonText={t("tasks.add_task")} />
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
