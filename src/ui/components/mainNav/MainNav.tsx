// Navigation bar component
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { routes } from "../shared/constants";
import { useTranslation } from "react-i18next";

export const MainNav: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs className="navbar-tabs p-t-20" aria-label="navbar-tabs">
        <Tab
          label={t("navBar.task_list")}
          value="0"
          className="active"
          onClick={() => {
            navigate(routes.list);
          }}
        />
        <Tab
          label={t("navBar.add_task")}
          value="1"
          onClick={() => {
            navigate(routes.add);
          }}
        />
      </Tabs>
    </Box>
  );
};
export default MainNav;
