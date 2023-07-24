import express from 'express';
import * as NotesController from '../controllers/notes.controller';

const router = express.Router();

router.route('/').get(NotesController.getNotes).post(NotesController.createNote);
router.route('/:noteId').get(NotesController.getNote).patch(NotesController.updateNote).delete(NotesController.deleteNote);

export default router;
