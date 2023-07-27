import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import NotesPage from './pages/NotesPage';
import NotFoundPage from './pages/NotFoundPage';
import styles from './styles/App.module.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Container className={styles.pageContainer}>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
