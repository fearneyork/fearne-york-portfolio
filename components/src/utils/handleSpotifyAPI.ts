import axios from 'axios';
import { IGetCurrentTrackResponse } from './spotifyTypes';

/* Create an HTTP server to handle responses */

const BASE_URL = 'https://api.spotify.com/v1';

// TODO: manage secrets
// const SPOTIFY_ID = '708e2cf74ef64133b9e3743ca3c52f1f';
// const SPOTIFY_SECRET = 'dc48b1aece574513a5ed3a2a3e879104';
const OAUTH_BEARER_TOKEN = 'BQBXd8VODVvj_kwo6OstbTnSfeWqAZkAUpe6hp9ueiUNoAsTdEt-8EhIKUBts3xvQWlfq62_dAXD0lyzdIQfVRygNh-Ksxe9EY2E8gU24whNV92miqPuVN8Q2LtX77gZIRWKmPOSGJ4xh9aZTuJ9DCzb15QF0Zt2CApWHB0eOuyb2w_cB-QjiW9bgiNlQ9t8e4SXDn-cS_FSpd-N096ItlgNFOMftOZjbSK4tIAMgoOGcMWcuxbbGQgcSLWPhknivA';

export const mapDataFromCurrentlyPlaying = (data: IGetCurrentTrackResponse) => {
  const trackName = data.item
}

export const callSpotify = (method: string, url: string) => {
  axios({
    baseURL: BASE_URL,
    url,
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OAUTH_BEARER_TOKEN}`,
    }
  }).then((res) => {
    const { status, data } = res;
    console.log(status);
    console.log(data);
  })
}

callSpotify('get', '/me/player/currently-playing')