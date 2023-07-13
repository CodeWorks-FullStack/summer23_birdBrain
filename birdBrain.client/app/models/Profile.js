

export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
  }


  get BirdWatcherTemplate() {
    return `
      <img title="${this.name}" class='rounded-circle w-25'
        src="${this.picture}"
        alt="${this.name}">
    `
  }
}