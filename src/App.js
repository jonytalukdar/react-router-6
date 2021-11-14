import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import LoginPage from './pages/Login';

import { AuthContext } from './context/auth-context';

function App() {
  const { isLogin } = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/login" element={<LoginPage />} />

        {!isLogin && (
          <Route
            path="/quotes/:id/*"
            element={<Navigate replace to="/login" />}
          />
        )}
        {!isLogin && (
          <Route path="/new-quote" element={<Navigate replace to="/login" />} />
        )}

        <Route path="/quotes/:id/*" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path="/new-quote" element={<NewQuote />} />

        <Route path="*" element={<Navigate replace to="/quotes" />} />
      </Routes>
    </Layout>
  );
}

export default App;
