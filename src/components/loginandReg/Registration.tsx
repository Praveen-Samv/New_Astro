

// import React from 'react';

// const Registration: React.FC = () => {
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

//         {/* Registration Form */}
//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your full name"
//             />
//           </div>
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
//               placeholder="Create a password"
//             />
//           </div>

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//           >
//             Register
//           </button>
//         </form>

//         {/* Back to Login */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/" className="text-orange-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;


// import React, { useState } from 'react';
// import  supabase  from '../config/supabaseClient';

// const Registration: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Sign up the user using Supabase
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             full_name: name, // Add additional user metadata
//           },
//         },
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         setSuccess(true);
//         setError(null);
//         console.log('User registered:', data);
//       }
//     } catch (err) {
//       setError('An error occurred during registration.');
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

//         {/* Registration Form */}
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
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
//               placeholder="Create a password"
//               required
//             />
//           </div>

//           {/* Display Error or Success Message */}
//           {error && (
//             <div className="mb-4 text-sm text-red-600">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="mb-4 text-sm text-green-600">
//               Registration successful! Please check your email to confirm your account.
//             </div>
//           )}

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//           >
//             Register
//           </button>
//         </form>

//         {/* Back to Login */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/" className="text-orange-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;




// import React, { useState } from 'react';
// import supabase from '../config/supabaseClient';
// import { Link } from 'react-router-dom';

// const Registration: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             full_name: name,
//           },
//         },
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         setSuccess(true);
//         setError(null);
//         console.log('User registered:', data);
//       }
//     } catch (err) {
//       setError('An error occurred during registration.');
//       console.error(err);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-28"
//       style={{
//         backgroundImage: "url('https://sun9-16.userapi.com/impf/c855524/v855524876/c8b4a/VFeuaWnq_UA.jpg?size=2560x1919&quality=96&sign=1b79a485f5f6ec6a974d2ba11481016d&c_uniq_tag=n4j58fOTD7UHBL7bSWbFRy_mUi1xxCU5wiLPzhDmnYM&type=album')",
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

//         {/* Registration Form */}
//         <form onSubmit={handleRegister} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
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
//               placeholder="Create a password"
//               required
//             />
//           </div>

//           {/* Display Messages */}
//           {error && (
//             <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
//               Registration successful! Please check your email to confirm your account.
//             </div>
//           )}

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 transition-colors duration-200"
//           >
//             Register
//           </button>
//         </form>

//         {/* Back to Login */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/" className="text-orange-600 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;





import React, { useState } from 'react';
import supabase from '../config/supabaseClient';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        setError(null);
        console.log('User registered:', data);
      }
    } catch (err) {
      setError('An error occurred during registration.');
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center mt-12 px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://sun9-16.userapi.com/impf/c855524/v855524876/c8b4a/VFeuaWnq_UA.jpg?size=2560x1919&quality=96&sign=1b79a485f5f6ec6a974d2ba11481016d&c_uniq_tag=n4j58fOTD7UHBL7bSWbFRy_mUi1xxCU5wiLPzhDmnYM&type=album')",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 backdrop-blur-sm bg-white/90 rounded-xl shadow-2xl m-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="CorpAstro Logo"
            className="w-40 md:w-52 h-auto object-cover"
          />
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
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
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Display Messages */}
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
              Registration successful! Please check your email to confirm your account.
            </div>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 transition-colors duration-200"
          >
            Register
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/" className="text-orange-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;





