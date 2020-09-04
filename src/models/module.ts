class Module {
  moduleCode: string
  title: string
  type: string
  completionDate: string
  level: number

  constructor(
    moduleCode: string,
    title: string,
    type: string,
    completionDate: string,
    level: number
  ) {
    this.moduleCode = moduleCode
    this.title = title
    this.type = type
    this.completionDate = completionDate
    this.level = level
  }
}

export default Module
