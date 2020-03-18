import React from "react";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Item has been added!", { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant("success")}>Show success msg</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
