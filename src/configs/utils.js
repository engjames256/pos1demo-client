export const isFramelessPage = (pathname) => {
  return [`/`, `/login`, `/register`].includes(pathname);
};

export const baseURL = "https://localhost:5000/api/v1/";
