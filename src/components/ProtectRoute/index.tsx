import { Navigate } from "react-router-dom";

export const ProtectRoute = ({
  isUserAuthenticated,
  children,
}: {
  isUserAuthenticated: boolean;
  children: React.ReactNode;
}) => {
  if (!isUserAuthenticated) return <Navigate to="/login" replace />;

  return <>{children}</>;
};
