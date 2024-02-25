// Component to display task list
import React, { useContext, useState } from "react";
import DataContext from "../context/Context";
import IntroDivider from "../shared/Card";
import Grid from "@mui/material/Grid";
import MainNav from "../mainNav/MainNav";
import BasicTextFields from "../shared/TextField";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

interface ITaskList {
  title: string;
}
export const TaskList: React.FC = () => {
  const taskList = useContext(DataContext);
  const [searchKey, setSearchKey] = useState("");
  const { t } = useTranslation();

  const handleSearch = (event) => {
    setSearchKey(event.target.value);
  };
  const filteredTaskList = taskList.filter((item) =>
    item.title.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <>
      <Container maxWidth="xl">
        <MainNav />
      </Container>
      <Grid
        container
        spacing={2}
        xs={12}
        md={12}
        className="search-box"
        sx={{ display: "flex", justifyContent: "flex-end"}}
      >
        <BasicTextFields
          label={t("search_with_task_title")}
          onChange={handleSearch}
        />
      </Grid>
      {filteredTaskList.length > 0 ? (
        <Grid container spacing={2}>
          {filteredTaskList.map((item, index) => (
            <Grid xs={12} item md={4} key={index}>
              <IntroDivider
                title={item.title}
                description={item.description}
                deadline={item.deadline}
                status={item.status}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {t("task_not_found")}{" "}
        </Grid>
      )}
    </>
  );
};
export default TaskList;
