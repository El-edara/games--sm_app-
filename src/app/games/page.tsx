"use client";

import GameCard from "@/components/GameCard";
import { games } from "@/db/data";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";

const Games = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/games/${id}`);
  };

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 w-full bg-gray-100 p-5 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Featured Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleClick(game.id)}
            >
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
