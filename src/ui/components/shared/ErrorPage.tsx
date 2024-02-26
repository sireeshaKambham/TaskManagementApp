// Error page - to display fallback UI
import { useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);
  const { t } = useTranslation();

  return (
    <div id="error-page">
      <h1>{t("error.heading")}</h1>
      <p>{t("description")}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
