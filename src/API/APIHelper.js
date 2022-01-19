const apiKey = 'bHuFSNeqeLPXOroi5beE';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}`;

export const fetchBooksAsync = async () => {
  const response = await fetch(`${baseURL}/books`).then((data) => data.json());
  return response;
};

export const addBookAsync = async (newBook) => {
  await fetch(`${baseURL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
};

export const removeBookAsync = async (id) => {
  await fetch(`${baseURL}/books/${id}`, {
    method: 'DELETE',
  });
};

export default {
  fetchBooksAsync,
  addBookAsync,
  removeBookAsync,
};
