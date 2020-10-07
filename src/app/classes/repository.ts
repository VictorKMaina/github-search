import { User } from './user';

export class Repository {
  constructor(
    public id: number,
    public name: string,
    public owner: User,
    public description: string,
  ) {}
}