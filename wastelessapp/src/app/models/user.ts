export class User {
  UserId: number;
  Username: string;
  Email: string;
  Password: string;

  constructor(uu: string,ue: string,up: string) {
    this.Username = uu;
    this.Email = ue;
    this.Password = up;
  }
}
