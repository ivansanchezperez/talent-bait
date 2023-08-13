import { Outlet } from "react-router-dom";
import { Waiting } from "./../shared/components/waiting/waiting";

export const AppLayout = () => {
  return (
    <Waiting>
      <div>
        <Outlet />
      </div>
    </Waiting>
  );
};
