import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/Home';
import InProgressWorkflowsPage from './pages/Workflows/InProgress';
import CompletedWorkflowsPage from './pages/Workflows/Completed';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/workflows/inprogress',
    element: <InProgressWorkflowsPage />,
  },
  {
    path: '/workflows/completed',
    element: <CompletedWorkflowsPage />,
  },
]);

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
