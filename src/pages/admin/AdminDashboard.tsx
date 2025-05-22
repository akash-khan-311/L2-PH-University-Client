import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import type { TUser } from "../../types";

const AdminDashboard = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        Welcome to {user.role} Dashboard
      </h1>
    </div>
  );
};

export default AdminDashboard;
