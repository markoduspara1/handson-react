import apiOrigin from "./api";

export const registerUser = user => {
  return fetch(
    `
  ${apiOrigin}/users`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  ).then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const loginUser = user => {
  return fetch(
    `
      ${apiOrigin}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  ).then(res => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};

export const getAllUser = accessToken => {
  return fetch(`${apiOrigin}/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(res => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};
