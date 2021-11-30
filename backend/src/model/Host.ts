import User from "./User";

export default class Player extends User {

  public constructor(
    name: string,
    public readonly initiative: number
  ) {
    super(name);
  }
}
