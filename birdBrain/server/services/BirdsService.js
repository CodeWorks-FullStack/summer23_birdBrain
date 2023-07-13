import { dbContext } from "../db/DbContext.js"

class BirdsService {
  async createBird(birdData) {
    const bird = await dbContext.Birds.create(birdData)

    return bird
  }
  async getBirds(query) {
    const birds = await dbContext.Birds.find(query)

    return birds
  }

}

export const birdsService = new BirdsService()