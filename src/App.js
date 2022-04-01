import "./_app.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { useState } from "react";
import MailScreen from "./screen/mailsScreen/MailsScreen";
import { Navigate, Route, Routes } from "react-router-dom";
import MailBodyScreen from "./screen/mailBodyScreen/MailBodyScreen";
import SearchScreen from "./screen/searchScreen/SearchScreen";

const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handlerToggleSidebar = () => setToggleSidebar((value) => !value);

  return (
    <>
      <Header handlerToggleSidebar={handlerToggleSidebar} />
      <div className="app__container">
        <Sidebar
          toggleSidebar={toggleSidebar}
          handlerToggleSidebar={handlerToggleSidebar}
        />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mail/inbox" replace />} />
      <Route
        path="/mail/:mailTag"
        element={
          <Layout>
            <MailScreen />
          </Layout>
        }
      />
      <Route
        path="/mail/:mailTag/:userId"
        element={
          <Layout>
            <MailBodyScreen />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
