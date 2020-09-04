class Skill {
  imageUrl: ImageData
  title: string
  identifier: string

  constructor(imageUrl: ImageData, title: string, identifier: string) {
    this.imageUrl = imageUrl
    this.title = title
    this.identifier = identifier
  }
}

export default Skill
