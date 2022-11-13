import React, { useCallback, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import Footer from "../../components/Footer/footer";
import Modal from "../../components/Modal/modal";
import useModal from "../../hooks/useModal";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../auth/authSlice";
import { login, reg } from "../../api/client";

import LoginPanel, {
  ILoginSubmitPara,
} from "../../components/LoginPanel/loginPanel";
import RegPanel, { IRegSubmitPara } from "../../components/RegPanel/regPanel";

enum PanelType {
  Unknow = 1,
  Login,
  Reg,
}

export default function LoginFooter() {
  const dispatch = useDispatch();
  const { user: currentUser } = useAuth();
  const router = useRouter();
  const { isOpen, toggle } = useModal();
  const [currPanel, setCurrPanel] = useState<PanelType>(PanelType.Unknow);

  const onLoginClick = useCallback(() => {
    setCurrPanel(PanelType.Login);
    toggle();
  }, []);

  const onRegClick = useCallback(() => {
    setCurrPanel(PanelType.Reg);
    toggle();
  }, []);
  const loginSubmit = async (para: ILoginSubmitPara) => {
    const user = await login(para.userName, para.pass);
    if (!user) {
      toast.error("username or password is not correct");
      return;
    }
    dispatch(auth({ userName: para.userName, pass: para.pass }));
    router.push(`/${para.userName}/`);
  };

  const onRegSubmit = async (para: IRegSubmitPara) => {
    if (para.pass !== para.rePass) {
      toast.error("password not the same");
      return;
    }
    const regRep = await reg(para.userName, para.pass);
    if (!regRep) {
      toast.error("username has been used");
      return;
    }
    await loginSubmit(para);
    router.push(`/${para.userName}/`);
  };

  const onSwichToRegClick = () => {
    setCurrPanel(PanelType.Reg);
  };
  if (currentUser) {
    return <></>;
  }
  return (
    <>
      {/* <Footer onRegClick={onRegClick} onLoginClick={onLoginClick} /> */}
      <Modal isOpen={isOpen} toggle={toggle}>
        {currPanel === PanelType.Login && (
          <LoginPanel
            onSubmit={loginSubmit}
            onSwichToRegClick={onSwichToRegClick}
          />
        )}
        {currPanel === PanelType.Reg && <RegPanel onSubmit={onRegSubmit} />}
      </Modal>
    </>
  );
}
