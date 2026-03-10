const isLocal = window.location.hostname === "localhost";

export const API_BASE_URL = isLocal 
  ? "http://karasclinic.runasp.net" 
  : "https://karasclinic.runasp.net";