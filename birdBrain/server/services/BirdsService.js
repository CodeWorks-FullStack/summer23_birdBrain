import { dbContext } from "../db/DbContext.js"

class BirdsService {
  async createBird(birdData) {
    const bird = await dbContext.Birds.create(birdData)

    await bird.populate('reporter', 'name picture')

    return bird
  }
  async getBirds(query) {
    const birds = await dbContext.Birds.find(query).populate('reporter', 'name picture').populate('birdWatcherCount')

    return birds
  }

}

export const birdsService = new BirdsService()