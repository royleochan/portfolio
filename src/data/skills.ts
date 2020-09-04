import Skill from "src/models/skill"

import ReactIcon from "src/assets/images/react_logo.png"
import NodejsIcon from "src/assets/images/nodejs_logo.png"
import MongoDBIcon from "src/assets/images/mongodb_logo.png"
import DjangoIcon from "src/assets/images/django_logo.png"
import FigmaIcon from "src/assets/images/figma_logo.png"

const SKILLS: Skill[] = [
  new Skill(ReactIcon, "ReactJs & React Native", "react"),
  new Skill(NodejsIcon, "NodeJs & ExpressJs", "node"),
  new Skill(MongoDBIcon, "MongoDB & Mongoose", "mongo"),
  new Skill(DjangoIcon, "Django & Django REST framework", "django"),
  new Skill(FigmaIcon, "Figma", "figma"),
]

export default SKILLS
