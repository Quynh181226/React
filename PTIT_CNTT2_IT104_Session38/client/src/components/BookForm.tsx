import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import type { Book } from '../types/type.ts';

interface Props {
  open: boolean;
  initial?: Partial<Book>;
  onClose: () => void;
  onSubmit: (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => void;
}

const BookForm = ({ open, initial = {}, onClose, onSubmit }: Props) => {
  const [title, setTitle] = useState(initial.title ?? '');
  const [author, setAuthor] = useState(initial.author ?? '');
  const [year, setYear] = useState<number | ''>(initial.year ?? '');
  const [category, setCategory] = useState(initial.category ?? '');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setTitle(initial.title ?? '');
    setAuthor(initial.author ?? '');
    setYear(initial.year ?? '');
    setCategory(initial.category ?? '');
    setError('');
  }, [initial, open]);

  const validateInput = (title: string, author: string, year: number | '', category: string) => {
    if (!title.trim()) return 'Title is required';
    if (!author.trim()) return 'Author is required';
    if (year === '' || !Number.isInteger(Number(year)) || Number(year) < 1000 || Number(year) > new Date().getFullYear()) {
      return 'Year must be a valid year (1000 - current year)';
    }
    if (!category.trim()) return 'Category is required';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const yearNum = year === '' ? 0 : Number(year);
    const validationError = validateInput(title, author, year, category);
    if (validationError) {
      setError(validationError);
      return;
    }
    onSubmit({ id: initial.id, title: title.trim(), author: author.trim(), year: yearNum, category: category.trim() });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? 'Edit Book' : 'Add Book'}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            error={!!error && error.includes('Title')}
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            required
            error={!!error && error.includes('Author')}
          />
          <TextField
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value === '' ? '' : Number(e.target.value))}
            fullWidth
            inputProps={{ min: 1000, max: new Date().getFullYear() }}
            error={!!error && error.includes('Year')}
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            required
            error={!!error && error.includes('Category')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initial.id ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookForm;