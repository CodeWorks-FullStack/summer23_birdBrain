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
  // NOTE the active bird will show up in the modal since the target id is modal-guts
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

  // NOTE the function setBirdForm will run when we click on the 'spot bird' button, and it will show up in the modal since we are targeting the id modal-guts
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
      // NOTE this will close the modal after we submit the form and it is reset, we need to target the id of the modal
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#exampleModal').hide()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }
}