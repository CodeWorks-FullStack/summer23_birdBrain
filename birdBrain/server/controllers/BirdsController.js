import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";

export class BirdsController extends BaseController {
  constructor () {
    super('api/birds')
    this.router
      .get('', this.getBirds)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBird)
  }
  async getBirds(req, res, next) {
    try {
      const query = req.query
      const birds = await birdsService.getBirds(query)
      return res.send(birds)
    } catch (error) {
      next(error)
    }
  }

  async createBird(req, res, next) {
    try {
      const birdData = req.body

      birdData.reporterId = req.userInfo.id

      const bird = await birdsService.createBird(birdData)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }
}