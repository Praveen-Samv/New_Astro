// import React from 'react';
// import { Link } from 'react-router-dom';

// const LoginPage: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-12">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//             alt="CorpAstro Logo"
//             className="w-52 h-auto object-cover"
//           />
//         </div>

//         {/* Login Form */}
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Sign in with Email Option */}
//         <div className="mt-4">
//           <button
//             type="button"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-blue-300"
//           >
//             Sign in with Email Account
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="mt-6 flex items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-sm text-gray-500">Or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Create Account Link */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-orange-600 hover:underline">
//               Create an account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


/////////////////////////////
// import React, { useState } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
// import  supabase  from '../config/supabaseClient'; // Import the Supabase client

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Sign in the user using Supabase
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         setError(error.message); // Display error message
//       } else {
//         setError(null);
//         console.log('User logged in:', data);
//         navigate('/'); // Redirect to dashboard or protected route
//       }
//     } catch (err) {
//       setError('An error occurred during login.');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-12">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//             alt="CorpAstro Logo"
//             className="w-52 h-auto object-cover"
//           />
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Display Error Message */}
//           {error && (
//             <div className="mb-4 text-sm text-red-600">
//               {error}
//             </div>
//           )}

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Sign in with Email Option */}
//         <div className="mt-4">
//           <button
//             type="button"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-blue-300"
//           >
//             Sign in with Email Account
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="mt-6 flex items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-sm text-gray-500">Or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Create Account Link */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-orange-600 hover:underline">
//               Create an account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient'; // Import the Supabase client

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isEmailSignIn, setIsEmailSignIn] = useState(false); // State to toggle email sign-in
  const navigate = useNavigate();

  // Handle traditional email/password login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sign in the user using Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message); // Display error message
      } else {
        setError(null);
        console.log('User logged in:', data);

        // Redirect to the home page
        navigate('/');

        // Refresh the page to update the UI
        window.location.reload();
      }
    } catch (err) {
      setError('An error occurred during login.');
      console.error(err);
    }
  };

  // Handle email-only sign-in (magic link)
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'http://localhost:3000/', // Redirect URL after clicking the magic link
        },
      });

      if (error) {
        setError(error.message); // Display error message
      } else {
        setError(null);
        alert('Check your email for the magic link!'); // Notify the user to check their email
      }
    } catch (err) {
      setError('An error occurred during email sign-in.');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-12">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="CorpAstro Logo"
            className="w-52 h-auto object-cover"
          />
        </div>

        {/* Login Form */}
        {!isEmailSignIn ? (
          // Traditional email/password login form
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Display Error Message */}
            {error && (
              <div className="mb-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
            >
              Login
            </button>
          </form>
        ) : (
          // Email-only sign-in form (magic link)
          <form onSubmit={handleEmailSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Display Error Message */}
            {error && (
              <div className="mb-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Sign in with Email Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
            >
              Send Magic Link
            </button>
          </form>
        )}

        {/* Toggle between login and email sign-in */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsEmailSignIn(!isEmailSignIn)}
            className="text-sm text-orange-600 hover:underline"
          >
            {isEmailSignIn ? 'Use Email and Password' : 'Sign in with Email Account'}
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-orange-600 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



