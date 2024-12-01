import { useState } from "react";
import CloseTab from "./CloseTab";

const SignUp: React.FC<{
  showRegister: boolean;
  setShowRegister: (value: boolean) => void;
}> = ({ showRegister, setShowRegister }) => {
  const [signIn, setSignin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
  };

  const handleCloseModal = () => {
    setShowRegister(false);
  };

  return (
    <>
      {showRegister && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-gray-200 w-96 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Register</span>
              <CloseTab
                onClose={handleCloseModal}
                label="Close Register Modal"
              />
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

              <div>
                <label className="block mb-1 text-sm" htmlFor="password-label">
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  id="confirmPassword"
                  type="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500"
                >
                  Register
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
                Already Have an Account?{" "}
                <button
                  onClick={() => setSignin(true)}
                  className="text-blue-500 hover:underline"
                >
                  Sign in
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
