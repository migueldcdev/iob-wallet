import { IconButton } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

import { useAppDispatch } from "@/app/hooks";
import { logout } from "@/features/auth/authSlice";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  return (
    <IconButton onClick={() => dispatch(logout())} marginTop="2">
      <FiLogOut />
    </IconButton>
  );
};
