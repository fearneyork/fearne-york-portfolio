import axios from 'axios';
import { GetCurrentTrackResponse } from '../types/spotifyTypes';

/* Create an HTTP server to handle responses */

const BASE_URL = 'https://api.spotify.com/v1';

// TODO: manage secrets
// const SPOTIFY_ID = '708e2cf74ef64133b9e3743ca3c52f1f';
// const SPOTIFY_SECRET = 'dc48b1aece574513a5ed3a2a3e879104';
const SPOTIFY_OAUTH_BEARER_TOKEN = process.env.REACT_APP_SPOTIFY_OAUTH_BEARER_TOKEN;

export const mapDataFromCurrentlyPlaying = (data: GetCurrentTrackResponse) => {
  const trackName = data.item?.name;

}

export const callSpotify = (method: string, url: string) => {
  axios({
    baseURL: BASE_URL,
    url,
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SPOTIFY_OAUTH_BEARER_TOKEN}`,
    }
  }).then((res) => {
    const { status, data } = res;
    console.log(status);
    console.log(data);
  })
}

callSpotify('get', '/me/player/currently-playing')