import { useMemo, useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { getAllBooks, addBook, updateBook, deleteBook } from './apis/api';
import type { Book } from './types/type';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookSearchSortFilter from './components/BookSearchSortFilter';

const App = () => {
  const dispatch = useAppDispatch();
  const { list: books, status, error } = useAppSelector((state) => state.book);
  const [openForm, setOpenForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Partial<Book> | undefined>(undefined);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const categories = useMemo(() => {
    return Array.from(new Set(books.map((b) => b.category))).sort();
  }, [books]);

  const handleAddClick = () => {
    setEditingBook(undefined);
    setOpenForm(true);
  };

  const handleSubmit = async (data: { id?: string; title: string; author: string; year: number; category: string }) => {
    if (data.id) {
      await dispatch(updateBook(data as Book));
    } else {
      await dispatch(addBook({ ...data, id: Date.now().toString() } as Book));
    }
    setOpenForm(false);
    setEditingBook(undefined);
  };

  const handleEdit = (b: Book) => {
    setEditingBook(b);
    setOpenForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Confirm delete book?')) return;
    await dispatch(deleteBook(id));
  };

  const handleClearFilters = () => {
    setSearch('');
    setCategory('all');
    setSortBy('title');
    setSortDir('asc');
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
    if (category !== 'all') {
      out = out.filter((b) => b.category === category);
    }
    out.sort((a, b) => {
      if (sortBy === 'title') {
        const r = a.title.localeCompare(b.title);
        return sortDir === 'asc' ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === 'asc' ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Book Management</h1>

      {status === 'pending' && (
        <div className="flex justify-center items-center z-20">
          <CircularProgress size={48} sx={{ color: '#a0b3cf' }} />
        </div>
      )}
      {status === 'failed' && (
        <Typography color="error" className="mb-4">
          Error: {error}
        </Typography>
      )}

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Book
        </Button>
      </div>

      <BookSearchSortFilter
        search={search}
        category={category}
        sortBy={sortBy}
        sortDir={sortDir}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      <div className="mt-6">
        <BookList books={filteredSorted} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      <BookForm
        open={openForm}
        initial={editingBook}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;