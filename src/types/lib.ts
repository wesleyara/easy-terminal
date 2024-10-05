export interface CommandDataTypes {
  description: string;
  usage: string;
  title: string;
  options: { option: string; description: string }[];
}

export type CommandTypes = Record<string, CommandDataTypes>;
