import { useState } from "react";
import CloseTab from "./CloseTab";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/features/authenticationSlice";
import type { RootState } from "../redux/store";
import React from "react";

const Login: React.FC<{
  showLogin: boolean;
  setShowLogin: (value: boolean) => void;
}> = ({ showLogin, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const { success, loading, error } = useSelector(
    (state: RootState) => state.authentication
  );

  const handleSubmitForm = async () => {
    try {
      const result = await dispatch(
        login({
          username: email,
          password,
        })
      ).unwrap();

      if (result) {
        setShowLogin(false);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };

  return (
    <>
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-gray-200 w-96 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Login</span>
              <CloseTab onClose={handleCloseModal} label={"Close"} />
            </div>

            <form
              onSubmit={handleSubmitForm}
              className="flex flex-col space-y-4"
            >
              <div>
                <label className="block mb-1 text-sm" htmlFor="email-label">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm" htmlFor="password-label">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password
                </button>
              </div>
            </form>

            {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

            <div className="mt-6 text-center text-sm">
              <span>
                Don’t Have an Account?{" "}
                <button
                  onClick={() => setShowLogin(false)}
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
