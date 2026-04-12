const BASE_URL = "http://localhost:8080";

export async function loginUser(username, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return response.json();
}

export async function createShortUrl(url, expiry) {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({ url, expiry }),
  });

  return response.json();
}

export async function getMyUrls() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/api/my-urls", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  return response.json();
}
export async function registerUser(username, password) {
  const response = await fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return response.json();
}

export async function deleteUrl(id) {
  const token = localStorage.getItem("token");

  await fetch(`http://localhost:8080/api/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + token
    }
  });
}

export async function updateExpiry(id, expiry) {
  const token = localStorage.getItem("token");

  await fetch(
    `http://localhost:8080/api/expiry/${id}?expiry=${expiry}`,
    {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token
      }
    }
  );
}