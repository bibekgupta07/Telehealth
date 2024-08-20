
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Chatbox from "../components/Chatbox/Chatbox";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Chatbox />
      <Footer />
    </>
  );
};

export default Layout;
