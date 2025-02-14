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





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import supabase from '../config/supabaseClient'; // Import the Supabase client

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [isEmailSignIn, setIsEmailSignIn] = useState(false); // State to toggle email sign-in
//   const navigate = useNavigate();

//   // Handle traditional email/password login
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

//         // Redirect to the home page
//         navigate('/');

//         // Refresh the page to update the UI
//         window.location.reload();
//       }
//     } catch (err) {
//       setError('An error occurred during login.');
//       console.error(err);
//     }
//   };

//   // Handle email-only sign-in (magic link)
//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const { error } = await supabase.auth.signInWithOtp({
//         email,
//         options: {
//           emailRedirectTo: 'http://localhost:3000/', // Redirect URL after clicking the magic link
//         },
//       });

//       if (error) {
//         setError(error.message); // Display error message
//       } else {
//         setError(null);
//         alert('Check your email for the magic link!'); // Notify the user to check their email
//       }
//     } catch (err) {
//       setError('An error occurred during email sign-in.');
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
//         {!isEmailSignIn ? (
//           // Traditional email/password login form
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             {/* Display Error Message */}
//             {error && (
//               <div className="mb-4 text-sm text-red-600">
//                 {error}
//               </div>
//             )}

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//             >
//               Login
//             </button>
//           </form>
//         ) : (
//           // Email-only sign-in form (magic link)
//           <form onSubmit={handleEmailSignIn}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Display Error Message */}
//             {error && (
//               <div className="mb-4 text-sm text-red-600">
//                 {error}
//               </div>
//             )}

//             {/* Sign in with Email Button */}
//             <button
//               type="submit"
//               className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//             >
//               Send Magic Link
//             </button>
//           </form>
//         )}

//         {/* Toggle between login and email sign-in */}
//         <div className="mt-4 text-center">
//           <button
//             type="button"
//             onClick={() => setIsEmailSignIn(!isEmailSignIn)}
//             className="text-sm text-orange-600 hover:underline"
//           >
//             {isEmailSignIn ? 'Use Email and Password' : 'Sign in with Email Account'}
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




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import supabase from '../config/supabaseClient';

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         setError(null);
//         console.log('User logged in:', data);
//         navigate('/');
//         window.location.reload();
//       }
//     } catch (err) {
//       setError('An error occurred during login.');
//       console.error(err);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//         options: {
//           redirectTo: 'http://localhost:3000/'
//         }
//       });

//       if (error) {
//         setError(error.message);
//       }
//     } catch (err) {
//       setError('An error occurred during Google sign-in.');
//       console.error(err);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-28"
//       style={{
//         backgroundImage: "url('https://stihi.ru/pics/2024/08/04/4548.jpg')",
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         backgroundBlendMode: 'overlay'
//       }}
//     >
//       <div className="w-full max-w-md p-8 backdrop-blur-sm bg-white/90 rounded-xl shadow-2xl m-4">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//             alt="CorpAstro Logo"
//             className="w-52 h-auto object-cover"
//           />
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {error && (
//             <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 transition-colors duration-200"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="mt-6 flex items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-sm text-gray-500">Or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Sign In Button */}
//         <div className="mt-6">
//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-colors duration-200"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path
//                 // fill="currentColor"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 fill="#4285F4"
//               />
//               <path
//                 // fill="currentColor"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 fill="#34A853"
//               />
//               <path
//                 // fill="currentColor"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 fill="#FBBC05"
//               />
//               <path
//                 // fill="currentColor"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 fill="#EA4335"
//               />
//             </svg>

//             Continue with Google
//           </button>
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
import supabase from '../config/supabaseClient';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        setError(null);
        console.log('User logged in:', data);
        navigate('/');
        window.location.reload();
      }
    } catch (err) {
      setError('An error occurred during login.');
      console.error(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/'
        }
      });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An error occurred during Google sign-in.');
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-28"
      style={{
        backgroundImage: "url('https://avatars.yandex.net/get-music-content/10092855/9482e383.a.27048463-1/m1000x1000?webp=false')",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-full max-w-md p-6 sm:p-8 backdrop-blur-sm bg-white/90 rounded-xl shadow-2xl m-4">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="CorpAstro Logo"
            className="w-40 sm:w-52 h-auto object-cover"
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 sm:p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 transition-colors duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="mt-4 sm:mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign In Button */}
        <div className="mt-4 sm:mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-colors duration-200"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm sm:text-base">Continue with Google</span>
          </button>
        </div>

        {/* Create Account Link */}
        <div className="mt-4 sm:mt-6 text-center">
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

