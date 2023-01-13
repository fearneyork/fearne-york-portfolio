import { operations } from "../api/spotify-open-api";

export type GetCurrentTrackResponse = operations['get-the-users-currently-playing-track']['responses']['200']['content']['application/json']