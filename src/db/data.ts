export interface Game {
  id: number;
  name: string;
  img: string;
  description: string;
}

export const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    img: "https://variety.com/wp-content/uploads/2023/10/cyberpunk.jpeg?w=1000&h=667&crop=1",
    description:
      "Cyberpunk 2077 is a futuristic open-world RPG set in Night City. Expect cutting-edge visuals, tech enhancements, and gripping narratives.",
  },
  {
    id: 2,
    name: "The Witcher 3",
    img: "https://sm.ign.com/ign_za/preview/w/we-played-/we-played-the-witcher-3-wild-hunt-for-6-hours-ign_3v48.jpg",
    description:
      "An award-winning fantasy RPG that follows Geralt of Rivia through monster hunts and morally complex quests in a breathtaking world.",
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    img: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10137177/49c7d29293f89dfef95969fde62f5c27e7cc780c.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
    description:
      "An epic tale of loyalty and survival in America's unforgiving heartland, packed with immersive gameplay and cinematic storytelling.",
  },
  {
    id: 4,
    name: "Elden Ring",
    img: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
    description:
      "A dark and enigmatic action RPG from the creators of Dark Souls, featuring vast open-world exploration and cryptic lore.",
  },
];
