// src/utils/gtag.js
export const trackConversion = () => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-10971536793/bJ3CCLnqq7sZEJm70e8o",
    });
  }
};
