import React, { useRef, useEffect, useState } from "react";

export default function SubwaySurferGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem("subway-best") || 0));
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!running) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    let gravity = 0.8;
    let speed = 4;
    let spawnRate = 90;
    let spawnTimer = 0;
    let obstacles = [];
    let player = { x: 140, y: H - 110, w: 44, h: 60, vy: 0, onGround: true };
    let frame = 0;

    const jump = () => {
      if (player.onGround) {
        player.vy = -14;
        player.onGround = false;
      }
    };

    const handlePress = (e) => {
      if (e.code === "Space") jump();
    };

    window.addEventListener("keydown", handlePress);

    const loop = () => {
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = "#1f2937";
      ctx.fillRect(0, H - 50, W, 50);

      player.vy += gravity;
      player.y += player.vy;
      if (player.y >= H - player.h - 50) {
        player.y = H - player.h - 50;
        player.vy = 0;
        player.onGround = true;
      }

      ctx.fillStyle = "#10b981";
      ctx.fillRect(player.x, player.y, player.w, player.h);

      spawnTimer++;
      if (spawnTimer >= spawnRate) {
        spawnTimer = 0;
        obstacles.push({ x: W, y: H - 80, w: 40, h: 40 });
      }

      ctx.fillStyle = "#ef4444";
      obstacles.forEach((ob, i) => {
        ob.x -= speed;
        ctx.fillRect(ob.x, ob.y, ob.w, ob.h);

        if (
          player.x < ob.x + ob.w &&
          player.x + player.w > ob.x &&
          player.y < ob.y + ob.h &&
          player.y + player.h > ob.y
        ) {
          setRunning(false);
          setGameOver(true);
        }

        if (ob.x + ob.w < 0) {
          obstacles.splice(i, 1);
          setScore((s) => s + 1);
        }
      });

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handlePress);
    };
  }, [running]);

  useEffect(() => {
    if (score > best) {
      setBest(score);
      localStorage.setItem("subway-best", score);
    }
  }, [score, best]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <canvas
        ref={canvasRef}
        width={900}
        height={400}
        className="bg-slate-800 rounded-xl shadow-lg cursor-pointer"
        onClick={() => {
          if (!running) setRunning(true);
          else {
            const playerJump = new Event("keydown", { bubbles: true });
            playerJump.code = "Space";
            window.dispatchEvent(playerJump);
          }
        }}
      />
      <div className="mt-4 flex items-center gap-6">
        <div className="text-lg font-bold">Score: {score}</div>
        <div className="text-lg font-bold">Best: {best}</div>
      </div>
      {gameOver && (
        <button
          className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold"
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
          className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold"
          onClick={() => setRunning(true)}
        >
          Start Game
        </button>
      )}
      <p className="mt-2 text-sm text-slate-400">Click canvas or press Space to jump</p>
    </div>
  );
}