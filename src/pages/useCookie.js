import { useState, useEffect } from 'react';

/**
 * 根据指定 cookie 存在状态返回对应的 CSS 类名
 * @param {string} picName - 用于检查的 cookie 名称
 * @param {string} classNameOrigin - cookie 不存在时返回的类名
 * @param {string} classNameClicked - cookie 存在时返回的类名
 * @returns {string} 当前应使用的 CSS 类名
 */
export function useCookieClass(picName, classNameOrigin, classNameClicked) {
  const [currentClass, setCurrentClass] = useState(classNameOrigin);

  useEffect(() => {
    // 从 document.cookie 中获取指定名称的 cookie 值
    const getCookie = (name) => {
      const cookieStr = document.cookie;
      const cookies = cookieStr.split('; ');
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    };

    // 检查指定 cookie 是否存在
    const cookieExists = getCookie(picName) !== null;
    
    // 根据 cookie 存在状态更新类名
    setCurrentClass(cookieExists ? classNameClicked : classNameOrigin);
  }, [picName, classNameOrigin, classNameClicked]);

  return currentClass;
}  

/**
 * 设置一个名为 name 的 cookie，值为 1
 * @param {string} name - 要设置的 cookie 名称
 * @param {number} [expiresInDays=30] -  cookie 过期时间（天）
 */
export function setCookieValue(name, expiresInDays = 1) {
  const date = new Date();
  date.setTime(date.getTime() + (expiresInDays * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  
  // 写入 cookie，使用 encodeURIComponent 确保安全
  document.cookie = `${encodeURIComponent(name)}=1;${expires};path=/`;
}  