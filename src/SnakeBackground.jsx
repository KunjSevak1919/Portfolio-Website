import React, { useRef, useEffect } from "react";

const SnakeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Fewer snakes (less busy)
    const snakes = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.8, // slower movement
      dy: (Math.random() - 0.5) * 0.8,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }));

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // smoother fade effect
      ctx.fillRect(0, 0, width, height);

      snakes.forEach((snake) => {
        ctx.beginPath();
        ctx.arc(snake.x, snake.y, 1.8, 0, Math.PI * 2); // small glowing dots
        ctx.fillStyle = snake.color;
        ctx.fill();

        snake.x += snake.dx;
        snake.y += snake.dy;

        // bounce off walls
        if (snake.x < 0 || snake.x > width) snake.dx *= -1;
        if (snake.y < 0 || snake.y > height) snake.dy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default SnakeBackground;