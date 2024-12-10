import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WalletPage } from "./pages/WalletPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { ProtectRoute } from "./components/ProtectRoute";
import { useAppSelector } from "./app/hooks";

function App() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const isUserAuthenticated = !!currentUser;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute isUserAuthenticated={isUserAuthenticated}>
              <WalletPage />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
