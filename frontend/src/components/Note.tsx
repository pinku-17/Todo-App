import React from 'react';
import styles from '../styles/Note.module.css';
import styleUtils from '../styles/utils.module.css';
import { Card } from 'react-bootstrap';
import { Note as NoteModel } from '../models/note';
import { formatDate } from '../utils/formatDate';
import { MdDelete } from 'react-icons/md';

interface NoteProps {
  note: NoteModel;
  className?: string;
  onNoteClicked: (note: NoteModel) => void;
  onDeleteNoteClicked: (note: NoteModel) => void;
}

const Note: React.FC<NoteProps> = ({ note, className, onNoteClicked, onDeleteNoteClicked }) => {
  const { title, text, createdAt, updatedAt } = note;
  const timestamp = updatedAt > createdAt ? 'Updated: ' + formatDate(updatedAt) : 'Created: ' + formatDate(createdAt);

  return (
    <Card className={`${styles.noteCard} ${className}`} onClick={() => onNoteClicked(note)}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styleUtils.flexCenter}>
          {title}
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteNoteClicked(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{timestamp}</Card.Footer>
    </Card>
  );
};

export default Note;
