const BASE_URL = "https://sniply-backend.onrender.com";

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

export async function createShortUrl(url, expiry, customCode) {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      url,
      expiry,
      customCode
    }),
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

export async function getCurrentUser() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8080/auth/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.json();
}

export async function getAllUsers() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8080/admin/users", {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  return res.json();
}

export async function getAllUrls() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8080/admin/urls", {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  return res.json();
}

export async function getAdminStats() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8080/admin/stats", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.json();
}