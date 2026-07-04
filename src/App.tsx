
import News from './pages/News';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chambers from './pages/Chambers';
import SignUpPage from './pages/SignUp';
import SplashScreen from './components/SplashScreen';

/*
 * App.tsx
 *
 * <SplashScreen /> is rendered OUTSIDE and BEFORE the <Router> tree so it
 * appears on every initial page load regardless of route.
 *
 * Critically, it is rendered as a SIBLING to the router — not a wrapper or
 * gate. The full page content (headings, copy, meta) is always present in the
 * DOM. The splash is a fixed overlay on top; it does not hide, defer, or
 * conditionally render any route content. Search engine crawlers see the
 * complete HTML on first parse, with or without JavaScript execution.
 */
const App = () => {

  return (
    <div className='font-gotha'>
      <SplashScreen />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Chambers" element={<Chambers />} />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
