import { Card } from "./card";

export const CARDS: Card[] = [
  { id: 1, title: "Modules", description: "Angular applications are modular and Angular has its own modularity system called NgModules. Every Angular application has at least one NgModule class, the root module, which is conventionally named AppModule.", color: "aqua" },
  { id: 2, title: "Components", description: "A component controls a patch of screen called a view. It consists of a TypeScript class, an HTML template, and a CSS style sheet. The TypeScript class defines the interaction of the HTML template and the rendered DOM structure, while the style sheet describes its appearance.", color: "red" },
  { id: 3, title: "Services", description: "Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.", color: "yellow" },
]
