import Navbar from "./Navbar";
import ActiveResource from "./ActiveResource";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
    </>
  );
}

export default Layout;
