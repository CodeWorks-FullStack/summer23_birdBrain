import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { api } from "./AxiosService.js"


class BirdsService {

  async getBirds() {
    const res = await api.get('api/birds')
    console.log('[GETTING BIRDS]', res.data);
    const birds = res.data.map(b => new Bird(b))
    AppState.birds = birds
    console.log('[APPSTATE BIRDS]', AppState.birds);
  }

  setActiveBird(birdId) {
    let foundBird = AppState.birds.find(b => b.id == birdId)
    // console.log('[FOUND BIRD]', foundBird);
    // @ts-ignore
    AppState.bird = foundBird
    console.log('[FOUND BIRD IN APP]', AppState.bird);

  }

  async createBird(formData) {
    const res = await api.post('api/birds', formData)
    // console.log('[CREATING BIRD]', res.data);
    const newBird = new Bird(res.data)
    AppState.birds.push(newBird)
    AppState.emit('birds')
  }
}

export const birdsService = new BirdsService()