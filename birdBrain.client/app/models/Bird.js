

export class Bird {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.canFly = data.canFly
    this.size = data.size
    this.reporterId = data.reporterId
  }


  get BirdCardTemplate() {
    return `
    <div class="col-md-3 col-12 p-3">
      <div class="bg-white elevation-5 selectable rounded" onclick="app.BirdsController.setActiveBird('${this.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="${this.name}">
        <h1>${this.name}</h1>
      </div>
    </div>
    `
  }

  get ActiveBirdTemplate() {
    return `
    <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row">
          <div class="col-md-6 col-12">
            <img class="img-fluid"
              src="${this.imgUrl}"
              alt="${this.name}">
          </div>
          <div class="col-md-6 col-12">
            <p>Size: ${this.size}</p>
            <p>Can Fly: ${this.canFly}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    `
  }

  static get BirdForm() {
    return `
    <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Report Bird</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row">
          <form action="" onsubmit="app.BirdsController.createBird(event)">
            <div class="mb-2">
              <label for="name">Name Of Bird</label>
              <input type="text" name="name" id="name" minlength="3" maxlength="75" required
                placeholder="Name of Bird...">
            </div>
            <div class="mb-2">
              <label for="imgUrl">Image of the Spotted Bird</label>
              <input type="url" required name="imgUrl" id="imgUrl" minlength="3" maxlength="300">
            </div>
            <div class="mb-2">
              <label for="canFly">Is it airborne?</label>
              <input type="checkbox" checked name="canFly" id="canFly">
            </div>
            <div class="mb-2">
              <label for="size">Size</label>
              <select name="size" id="size">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    `
  }
}


// let bird = {
//   "createdAt": "2023-07-13T16:05:29.086Z",
//   "updatedAt": "2023-07-13T16:05:29.086Z",
// }