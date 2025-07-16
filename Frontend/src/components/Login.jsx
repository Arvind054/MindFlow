import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { getUserProfile } from '../Store/API/UserApi';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
const Login = () => {
    const navigator = useNavigate();
      const dispatch = useDispatch();
  const handleOAuthLogin = useGoogleLogin({
    onSuccess: tokenResponse => {getUserProfile(tokenResponse,dispatch); navigator(`/`)},
    onError: tokenResponse =>{toast.error('Error Occured'); navigator('/')}
  });
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to MindFlow.AI 🧠</h1>
        <p className="text-gray-400 mb-8">
          Visualize your thoughts. Boost your clarity. Log in to get started.
        </p>

        <button
          onClick={handleOAuthLogin}
          className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-xl shadow-md"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Icon"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <p className="text-gray-500 text-sm mt-6">
          By continuing, you agree to our{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">Terms</span> and{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
