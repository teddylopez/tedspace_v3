import { useEffect } from "react";

export const RedirectUrl = () => {
  useEffect(() => {
    if (
      window.location.protocol !== "https:" &&
      window.location.hostname !== "localhost"
    ) {
      window.location.replace(
        "https://www.tedlopez.us" + window.location.pathname
      );
    }
  });
};
