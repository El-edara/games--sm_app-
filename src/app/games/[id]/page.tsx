"use client";

import { Game, games } from "@/db/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function GameDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = React.use(paramsPromise); // ✅ unwrap the params Promise
  const [game, setGame] = React.useState<Game | null>(null);

  React.useEffect(() => {
    const foundGame = games.find((g) => g.id === parseInt(params.id));
    if (foundGame) {
      setGame(foundGame);
    } else {
      router.push("/games");
    }
  }, [params.id, router]);

  if (!game) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <div className="max-w-3xl w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-64">
          <Image src={game.img} alt={game.name} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
          <p className="text-gray-300 mb-4">{game.description}</p>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
            onClick={() => router.push("/games")}
          >
            Back to Games
          </button>
        </div>
      </div>
    </div>
  );
}
