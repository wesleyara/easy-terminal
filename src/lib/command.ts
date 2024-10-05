import { CommandTypes } from "../types";

export class CommandData {
  private readonly defaultCommandResponse = {
    description: "Comando não encontrado",
    usage: "",
    title: "",
    options: [],
  };
  
  getCommand(type: string, command: string) {
    switch (type) {
      case "bash":
        return this.bashCommands(command);
      default:
        return this.defaultCommandResponse;
    }
  }

  bashCommands(command: string) {
    const commands: CommandTypes = {
      ls: {
        description:
          "O comando ls é utilizado para listar os arquivos e diretórios contidos em um diretório.",
        usage: "ls [flags] [diretório]",
        title: "ls",
        options: [
          {
            option: "-l",
            description: "Lista os arquivos e diretórios em formato detalhado.",
          },
          {
            option: "-a",
            description:
              "Lista todos os arquivos e diretórios, incluindo os ocultos.",
          },
        ],
      },
    };

    const commandEmitted = command as keyof typeof commands;

    return commands[commandEmitted] || this.defaultCommandResponse;
  }
}
