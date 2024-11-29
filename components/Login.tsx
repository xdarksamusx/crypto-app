import { useState } from "react";
import CloseTab from "./CloseTab";

const Login: React.FC<{
  showLogin: boolean;
  setShowLogin: (value: boolean) => void;
}> = ({ showLogin, setShowLogin }) => {
  const [signIn, setSignin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
  };

  return (
    <>
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-blue-300 w-96 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Login</span>
              <CloseTab showLogin={showLogin} setShowLogin={setShowLogin} />
            </div>

            <form
              onSubmit={(e) => handleSubmitForm(e)}
              className="flex flex-col space-y-4"
              action=""
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
                >
                  Login
                </button>
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <span>
                Don’t Have an Account?{" "}
                <button
                  onClick={() => setSignin(true)}
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
