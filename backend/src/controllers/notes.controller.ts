import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { NoteInstance } from '../models/notes.model';

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteInstance.findAll({ where: {} });
    return res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;

  try {
    if (!uuidValidate(noteId)) {
      throw createHttpError(400, 'Invalid note id');
    }
    const note = await NoteInstance.findOne({ where: { id: noteId } });
    if (!note) {
      throw createHttpError(404, 'Note not found');
    }
    return res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;

  try {
    if (!title) {
      throw createHttpError(400, 'Note must have a title');
    }
    const id = uuidv4();
    const newNote = await NoteInstance.create({ id, title, text });
    return res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

export const updateNote: RequestHandler<UpdateNoteParams, unknown, UpdateNoteBody, unknown> = async (req, res, next) => {
  const noteId = req.params.noteId;
  const newTitle = req.body.title;
  const newText = req.body.text;

  try {
    if (!uuidValidate(noteId)) {
      throw createHttpError(400, 'Invalid note id');
    }
    if (!newTitle) {
      throw createHttpError(400, 'Note must have a title');
    }
    const note = await NoteInstance.findOne({ where: { id: noteId } });
    if (!note) {
      throw createHttpError(404, 'Note not found');
    }
    const updatedNote = await note.update({
      title: newTitle,
      text: newText,
    });
    return res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;

  try {
    if (!uuidValidate(noteId)) {
      throw createHttpError(400, 'Invalid note id');
    }
    const note = await NoteInstance.findOne({ where: { id: noteId } });
    if (!note) {
      throw createHttpError(404, 'Note not found');
    }
    await note.destroy();
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
