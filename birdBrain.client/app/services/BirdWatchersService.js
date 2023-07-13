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

  async becomeWatcher() {
    const bird = AppState.bird
    const res = await api.post('api/birdWatchers', { birdId: bird?.id })
    // console.log('[BECOME WATCHER]', res.data);
    // @ts-ignore
    bird.birdWatcherCount++
    AppState.birdWatchers.push(new Profile(res.data.watcher))
    console.log('[BIRDWATCHERS APPSTATE]', AppState.birdWatchers);
    AppState.emit('birdWatchers')
    AppState.emit('birds')
  }
}


export const birdWatchersService = new BirdWatchersService()