/* eslint-disable import/prefer-default-export */

const urlBase = process.env.NEXT_PUBLIC_URI_BACKEND || "http://localhost:1337";

export const register = `${urlBase}/auth/local/register`;
