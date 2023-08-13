import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import { getRelativePath } from "../shared/infrastructure/routing";
import { AppLayout } from "./app.layout";
import CreateView from "../create-view/create-view";

const IndexViewPage = React.lazy(() => import("../index-view/index-view"));
const ReadViewPage = React.lazy(() => import("../read-view/read-view"));
const CreateViewPage = React.lazy(() => import("../create-view/create-view"));
const EditViewPage = React.lazy(() => import("../edit-view/edit-view"));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={getRelativePath("root")} element={<AppLayout />}>
        <Route
          path={getRelativePath("root")}
          element={<Navigate to={getRelativePath("index-view")} replace />}
        />
        <Route
          path={getRelativePath("index-view")}
          element={<IndexViewPage />}
        />
        <Route
          path={`${getRelativePath("read-view") + "/:productId"}`}
          element={<ReadViewPage />}
        />
        <Route
          path={`${getRelativePath("create-view")}`}
          element={<CreateViewPage />}
        />
        <Route
          path={`${getRelativePath("edit-view") + "/:adId"}`}
          element={<EditViewPage />}
        />
        <Route
          path={"*"}
          element={<Navigate to={getRelativePath("index-view")} replace />}
        />
      </Route>
    </Routes>
  );
};
