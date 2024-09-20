export async function fetchData(url, method = "GET", body = {}) {
  return fetch(`http://localhost:3000/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export const deleteBook = async (id) => fetchData(`/api/books/${id}`, "DELETE");
export const PostUpdateBook = async (activeBookId, bookData) => {
  const response = await fetch(
    `http://localhost:3000/api/books/${activeBookId}`,
    {
      method: `${activeBookId ? "PUT" : "POST"}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response;
};
