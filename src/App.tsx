import { Header } from "./components";
import { AppWrapper } from "./app.styled";
import { FC, ReactElement } from "react";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { Context } from "./store/context";

export const App: FC = (): ReactElement<FC> => {
  return (
    <Context>
      <AppWrapper>
        <Header title="Public Github Repos List"></Header>
        <RouterProvider router={router}></RouterProvider>
      </AppWrapper>
    </Context>
  );
};
