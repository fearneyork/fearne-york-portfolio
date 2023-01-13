// interface 

export interface IGetCurrentTrackResponse {
  timestamp: Date,
  context: object,
  progress_ms: number,
  item: object,
  currently_playing_type: string,
  actions: object,
  is_playing: boolean
}