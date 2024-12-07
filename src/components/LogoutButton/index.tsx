import { IconButton } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
//import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { logout } from "@/features/auth/authSlice";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();
  //const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <IconButton onClick={handleLogout}>
      <FiLogOut />
    </IconButton>
  );
};
