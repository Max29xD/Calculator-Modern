import { useEffect, useRef } from "react";

const Wallpaper = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.animate(
          {
            left: `${e.clientX - cursorRef.current.clientWidth / 2}px`,
            top: `${e.clientY - cursorRef.current.clientHeight / 2}px`,
          },
          { duration: 5000, fill: "forwards" }
        );
      }
    });
  }, []);

  return (
    <>
      <div ref={cursorRef} className="circle"></div>
    </>
  );
};

export default Wallpaper;
