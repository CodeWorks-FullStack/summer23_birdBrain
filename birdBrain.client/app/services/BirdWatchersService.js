import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { api } from "./AxiosService.js"


class BirdWatchersService {
  async getBirdWatchersByActiveBird() {
    const bird = AppState.bird
    const res = await api.get(`api/birds/${bird?.id}/birdWatchers`)
    // console.log('[GETTING BIRDWATCHERS BY ACTIVE BIRD]', res.data);
    AppState.birdWatchers = res.data.map(p => new Profile(p.watcher))
    console.log('[BIRDWATCHERS IN THE APPSTATE]', AppState.birdWatchers);
  }
}


export const birdWatchersService = new BirdWatchersService()