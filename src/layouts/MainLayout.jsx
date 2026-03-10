import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import ChatBot from "../components/ChatBot";

function MainLayout() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <main>
        <Outlet />
      </main>

      <Footer />
      <ChatBot />
    </>
  );
}

export default MainLayout;
