import type { LocalStorageEnum, SessionStorageEnum } from "./const";

/**
 * 本地存储
 */
export const getItem = <T>(key: LocalStorageEnum): T | null => {
  let value = null;
  try {
    const result = localStorage.getItem(key);
    // console.log(result);

    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }
  return value;
};

export const getStringItem = (key: LocalStorageEnum): string | null => {
  return localStorage.getItem(key);
};

export const setItem = <T>(key: LocalStorageEnum, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const removeItem = (key: LocalStorageEnum): void => {
  localStorage.removeItem(key);
};
export const clearItems = () => {
  localStorage.clear();
};
/**
 * 会话存储
 */
export const getSessionItem = <T>(key: SessionStorageEnum): T | null => {
  let value = null;
  try {
    const result = sessionStorage.getItem(key);
    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }
  return value;
};

export const setSessionItem = <T>(key: SessionStorageEnum, value: T): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeSessionItem = (key: SessionStorageEnum): void => {
  sessionStorage.removeItem(key);
};

export const clearSessionItems = () => {
  sessionStorage.clear();
};
