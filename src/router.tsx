import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import StudyRoom from './pages/StudyRoom';
import Footer from './components/Footer';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/studyroom/:id',
    element: <StudyRoom />,
  }
]);

export const AppRouter = () => { 
  return (
    <>
      <Header />
      <RouterProvider router={router} />  
      <Footer />
    </>
  )   
};
