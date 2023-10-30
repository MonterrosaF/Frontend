import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Home, Register } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';

// TODO: Change Loader component
const loader = () => <div>Loading...</div>;

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider loader={loader}>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <head>
            <title>ResQpet</title>
            <meta
              name='description'
              content='ResQPet ayuda a los dueños de mascotas a mantener a sus queridas mascotas seguras y permite adoptar o dar en adopción a mascotas necesitadas.'
            />
            <meta
              name='keywords'
              content='codigo QR, mascotas, cuidado de perros, adopción de gatos, adopción de perros, dar en adopción, veterinario, consejos para mascotas'
            />
          </head>

          <Routes>
            <Route
              path='/'
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
