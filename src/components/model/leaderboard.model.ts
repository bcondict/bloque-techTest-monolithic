export interface Leaderboard {
  players: Player[];
}
export interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
}
