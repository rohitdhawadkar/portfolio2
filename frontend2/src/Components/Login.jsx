import { useState } from "react";

export function Basic() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <h3 className="mb-2 text-3xl text-gray-900 font-semibold">Sign In</h3>
        <p className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </p>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisiblity}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordShown ? (
                  <i className="h-5 w-5">👁️</i>
                ) : (
                  <i className="h-5 w-5">🙈</i>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg mt-6 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign in
          </button>
          <div className="mt-4 flex justify-end">
            <a href="#" className="text-blue-500 text-sm font-medium">
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full bg-white border border-gray-300 py-3 rounded-lg mt-6 flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />
            Sign in with Google
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Not registered?{" "}
            <a href="#" className="text-gray-900 font-medium">
              Create account
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Basic;
