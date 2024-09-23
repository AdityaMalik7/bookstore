export async function fetchData(url, method = "GET", body = {}) {
  return fetch(`http://ec2-18-222-170-221.us-east-2.compute.amazonaws.com/${url}`, {
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
    `hhttp://ec2-18-222-170-221.us-east-2.compute.amazonaws.com/api/books/${activeBookId}`,
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
