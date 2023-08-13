import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import { getRelativePath } from "./../shared/infrastructure/routing";
import { AppLayout } from "./app.layout";

const IndexViewPage = React.lazy(() => import("./../index-view/index-view"));

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
      </Route>
    </Routes>
  );
};
