export const AUTH_STORAGE_KEY = "msc-drive-auth";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function login(): void {
  localStorage.setItem(AUTH_STORAGE_KEY, "true");
}

export function logout(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
