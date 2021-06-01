import { useState, useEffect } from "react";

export const useDidClickedOutside = (ref) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      setClickedOutside(ref.current && !ref.current.contains(event.target));
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleClickOutside);
    };
  }, [ref]);

  return clickedOutside;
};
