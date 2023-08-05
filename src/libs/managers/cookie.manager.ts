
// Establecemos la cookie
export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;

  document.cookie = document.cookie =
    cname + "=" + cvalue + ";" + expires + ";path=/";
};

// Obtenemos el valor de una cookie
export const getCookie = (cname: string) => {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) == 0) {
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
};
