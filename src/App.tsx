import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { selectCurrentUser } from "./redux/features/auth/authSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const user  = useAppSelector(selectCurrentUser)
  console.log(user)
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
