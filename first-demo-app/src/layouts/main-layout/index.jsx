import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../../components/header";
import { PageNames } from "../../constants/page-name";
import { AuthContext } from "../../context/auth-context";

const MainLayout = ({ children, secure = false }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === PageNames.LOGIN && isLoggedIn) {
      router(PageNames.HOME);
    }
    if (secure && !isLoggedIn) {
      router(PageNames.LOGIN);
    }
    // eslint-disable-next-line
  }, [secure, isLoggedIn]);

  return (
    <>
      <PrimarySearchAppBar />
      {children}
    </>
  );
};

export default MainLayout;
