import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { birdsService } from "../services/BirdsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawBirds() {
  let birds = AppState.birds
  let template = ''
  birds.forEach(b => template += b.BirdCardTemplate)
  setHTML('birds', template)
}

function _drawActiveBird() {
  let activeBird = AppState.bird
  setHTML('modal-guts', activeBird?.ActiveBirdTemplate)
}


export class BirdsController {
  constructor() {
    // console.log('birds controller');

    this.getBirds()

    AppState.on('birds', _drawBirds)
    AppState.on('bird', _drawActiveBird)
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

  setActiveBird(birdId) {
    try {
      // console.log('clicking on this bird', birdId);
      birdsService.setActiveBird(birdId)
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

  setBirdForm() {
    setHTML('modal-guts', Bird.BirdForm)
  }

  async createBird(event) {
    try {
      event.preventDefault()
      let form = event.target
      let formData = getFormData(form)
      // @ts-ignore
      if (formData.canFly == 'on') {
        // @ts-ignore
        formData.canFly = true
        // @ts-ignore
      } else { formData.canFly = false }
      // console.log('my formData', formData);
      await birdsService.createBird(formData)
      form.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#exampleModal').hide()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }
}