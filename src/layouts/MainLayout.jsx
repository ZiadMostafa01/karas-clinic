import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "../components/layout/AnnouncementBar";

function MainLayout() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
