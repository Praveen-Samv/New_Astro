
// import { Link } from "react-router-dom";

// interface LoginPopupProps {
//     showLoginModal: boolean;
//     closeModal: () => void;
// }

// const LoginPopup = ({ showLoginModal, closeModal }: LoginPopupProps) => {
//     if (!showLoginModal) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//                 <h2 className="text-xl font-semibold mb-4">Login Required</h2>
//                 <p className="text-gray-600 mb-6">
//                     Please log in with your email to access Free Tools.
//                 </p>
//                 <div className="flex justify-end space-x-4">
//                     <button
//                         onClick={closeModal}
//                         className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                         Cancel
//                     </button>
//                     <Link
//                         to="/login"
//                         className="px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
//                     >
//                         Go to Login
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPopup;



import { Link } from "react-router-dom";

interface LoginPopupProps {
    showLoginModal: boolean;
    closeModal: () => void;
}

const LoginPopup = ({ showLoginModal, closeModal }: LoginPopupProps) => {
    if (!showLoginModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[80%] sm:max-w-sm md:max-w-md shadow-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Login Required</h2>
                <p className="text-gray-600 mb-6 text-center">
                    Please log in with your email to access Free Tools.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-end gap-3">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 w-full sm:w-auto text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <Link
                        to="/login"
                        className="px-4 py-2 w-full sm:w-auto text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
