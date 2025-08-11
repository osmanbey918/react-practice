import React, { useRef, useEffect, useState } from "react";

export default function Snake() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem("snake-best") || 0));
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    if (!running) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const box = 20;
    let snake = [{ x: 9 * box, y: 10 * box }];
    let food = generateFood();

    function generateFood() {
      return {
        x: Math.floor(Math.random() * 25) * box,
        y: Math.floor(Math.random() * 20) * box,
      };
    }

    const handleKey = (e) => {
      if (e.code === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      else if (e.code === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      else if (e.code === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      else if (e.code === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };

    window.addEventListener("keydown", handleKey);

    const game = setInterval(() => {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid for visual appeal
      ctx.strokeStyle = "#1f2937";
      for (let x = 0; x < canvas.width; x += box) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += box) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw snake with gradient
      const snakeGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      snakeGradient.addColorStop(0, "#10b981");
      snakeGradient.addColorStop(1, "#059669");
      ctx.fillStyle = snakeGradient;
      snake.forEach((segment, idx) => {
        ctx.fillRect(segment.x, segment.y, box, box);
        ctx.strokeStyle = "#064e3b";
        ctx.strokeRect(segment.x, segment.y, box, box);
      });

      // Draw food as a circle
      ctx.beginPath();
      ctx.arc(food.x + box / 2, food.y + box / 2, box / 2 - 2, 0, 2 * Math.PI);
      ctx.fillStyle = "#facc15";
      ctx.fill();

      // Snake head position
      let headX = snake[0].x;
      let headY = snake[0].y;
      if (direction === "UP") headY -= box;
      if (direction === "DOWN") headY += box;
      if (direction === "LEFT") headX -= box;
      if (direction === "RIGHT") headX += box;

      // Check collision with food
      if (headX === food.x && headY === food.y) {
        setScore((s) => s + 1);
        food = generateFood();
      } else {
        snake.pop();
      }

      const newHead = { x: headX, y: headY };

      // Collision detection
      if (
        headX < 0 ||
        headY < 0 ||
        headX >= canvas.width ||
        headY >= canvas.height ||
        snake.some((seg) => seg.x === headX && seg.y === headY)
      ) {
        clearInterval(game);
        setRunning(false);
        setGameOver(true);
      }

      snake.unshift(newHead);
    }, 100);

    return () => {
      clearInterval(game);
      window.removeEventListener("keydown", handleKey);
    };
  }, [running, direction]);

  useEffect(() => {
    if (score > best) {
      setBest(score);
      localStorage.setItem("snake-best", score);
    }
  }, [score, best]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-900 to-slate-950 text-white">
      <h1 className="text-3xl font-extrabold mb-4 tracking-wide">🐍 Snake Game</h1>
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        className="bg-slate-800 rounded-xl shadow-2xl border-4 border-emerald-600"
      />
      <div className="mt-4 flex items-center gap-8 text-lg font-bold">
        <span>Score: {score}</span>
        <span>Best: {best}</span>
      </div>
      {gameOver && (
        <button
          className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold shadow-md"
          onClick={() => {
            setScore(0);
            setGameOver(false);
            setRunning(true);
          }}
        >
          Restart
        </button>
      )}
      {!running && !gameOver && (
        <button
          className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold shadow-md"
          onClick={() => setRunning(true)}
        >
          Start Game
        </button>
      )}
      <p className="mt-2 text-sm text-slate-400">Use arrow keys to control the snake and eat the yellow food</p>
    </div>
  );
}