import { AppState } from "../AppState.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawBirdWatchers() {
  let birdWatchers = AppState.birdWatchers
  let template = ''
  birdWatchers.forEach(w => template += w.BirdWatcherTemplate)
  setHTML('birdWatchers', template)
}

export class BirdWatchersController {
  constructor() {
    // console.log('bird watchers controller');


    AppState.on('bird', this.getBirdWatchersByActiveBird)
    AppState.on('birdWatchers', _drawBirdWatchers)
  }


  async getBirdWatchersByActiveBird() {
    try {
      await birdWatchersService.getBirdWatchersByActiveBird()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }
}