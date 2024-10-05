import { CommandDataTypes } from "./lib";

export interface ContainerProps {
  layout: "default" | "container" | "full";
  class?: string;
}

export interface EasyCommandProps {
  content: CommandDataTypes;
}
