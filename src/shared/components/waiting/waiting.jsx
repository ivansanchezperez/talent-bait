import { Suspense } from "react";
import Spinner from "../spinner/spinner";

const Waiting = ({ children }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
);

export { Waiting };
