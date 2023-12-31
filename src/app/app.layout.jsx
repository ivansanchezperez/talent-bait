import { Outlet } from "react-router-dom";
import { Waiting } from "../shared/components/waiting/waiting";
import Header from "../shared/components/header/header";
import styled from "styled-components";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLayout = () => {
  return (
    <Layout>
      <Header />
      <Waiting>
        <div>
          <Outlet />
        </div>
      </Waiting>
    </Layout>
  );
};
