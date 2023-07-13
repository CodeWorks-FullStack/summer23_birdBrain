import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";

export class BirdWatchersController extends BaseController {
  constructor () {
    super('api/birdWatchers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBirdWatcher)
  }
  async createBirdWatcher(req, res, next) {
    try {

      const birdWatcherData = req.body

      birdWatcherData.watcherId = req.userInfo.id

      const birdWatcher = await birdWatchersService.createBirdWatcher(birdWatcherData)

      return res.send(birdWatcher)
    } catch (error) {
      next(error)
    }
  }
}