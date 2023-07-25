import { Container } from 'react-bootstrap';
import NotesPageView from '../components/NotesPage';
import styles from '../styles/NotesPage.module.css';

const NotesPage: React.FC = () => {
  return (
    <Container className={styles.notesPage}>
      <NotesPageView />
    </Container>
  );
};

export default NotesPage;
