import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

type LoginFormInputs = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm<LoginFormInputs>({
    defaultValues: {
      id: "A-0001",
      password: "admin789",
    },
  });
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: LoginFormInputs) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    console.log(user);
    if (res.success) {
      dispatch(setUser({ user, token: res.data.accessToken }));
    }
    reset();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001529] relative login">
      <div className="bg-white/20 backdrop-blur-sm border bg-opacity-80 p-8 rounded-3xl shadow-2xl  max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center mb-8  text-white">
          PH University
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-20">
          <div className="relative">
            <label
              className="text-[17px] text-white mb-2 block font-semibold"
              htmlFor="id"
            >
              User ID
            </label>
            <input
              {...register("id")}
              id="id"
              type="id"
              placeholder="User ID"
              className="w-full bg-white/10 backdrop-blur-2xl text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001529]  transition-all duration-300"
            />
          </div>
          <div className="relative">
            <label
              className="text-[17px] text-white mb-2 block font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="text"
              placeholder="Password"
              className="w-full bg-white/10 backdrop-blur-2xl text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001529] transition-all duration-300"
            />
          </div>
          <Button
            htmlType="submit"
            className="w-full "
            variant="solid"
            color="magenta"
            size="large"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
