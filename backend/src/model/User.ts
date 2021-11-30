import Generator, { All } from "../utils/Generator";

export default class User {

  public readonly id: string;

  public constructor(public readonly name: string) {
    this.id = Generator.generateString(16, All);
  }
}
