import React, { useState } from "react";
import { login, signUp } from "../Firebase";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signup, setSignUp] = useState("Sign Up");
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    const navigate = useNavigate();

  // login section with Firebase 
  const user_auth = async (event) =>{
    event.preventDefault()
    setLoading(true);
    setError(null);

    try {
      if(signup === 'Sign In'){
        await login(email,password);
        navigate('/user')
      }else {
        await signUp(username,email,password)
          navigate('/user')
      }

      
      
    } catch (error) {
      setError(error.message)    
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full w-[35rem]"
          src="https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center" onSubmit={user_auth}>
          <h2 className="text-4xl text-gray-900 font-medium">{signup}</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please {signup} to continue
          </p>

          <button
            type="button"
            className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or {signup} with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          {/* Username Input */}
          {signup === "Sign Up" && (
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6B7280"
                  d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2ZM4 20C4 16.6863 8.68629 14 12 14C15.3137 14 20 16.6863 20 20V21H4V20Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>
          )}

          {/* Email Input */}
          <div className="flex items-center mt-4 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            {signup}
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            {signup === "Sign Up" ? (
              <>
                Don’t have an account?{" "}
                <a
                  onClick={() => setSignUp("Sign In")}
                  className="text-indigo-400 hover:underline"
                  href="#"
                >
                  Sign In
                </a>
              </>
            ) : (
              <>
                Already have an account? {""}
                <a
                  onClick={() => setSignUp("Sign Up")}
                  className="text-indigo-400 hover:underline"
                  href="#"
                >
                  Sign Up
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
