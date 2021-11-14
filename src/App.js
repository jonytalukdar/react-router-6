import { Routes, Route, Navigate } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import PageNotFound from './pages/PageNotFound';
import LoginPage from './pages/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/quotes/:id/*" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
