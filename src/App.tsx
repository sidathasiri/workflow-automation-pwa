import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/Home';
import InProgressWorkflowsPage from './pages/Workflows/InProgress';
import CompletedWorkflowsPage from './pages/Workflows/Completed';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/workflows/inprogress'
          element={<InProgressWorkflowsPage />}
        />
        <Route
          path='/workflows/completed'
          element={<CompletedWorkflowsPage />}
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
