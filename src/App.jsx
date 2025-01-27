import AppRouter from './pages/AppRoutes/AppRoutes';
import { AuthProvider } from './context/auth-context';
import { Bounce, ToastContainer } from 'react-toastify';

//export default function App
function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          transition={Bounce}
          aria-live='polite'
          
        />
    </AuthProvider>
  );
}

export default App;
