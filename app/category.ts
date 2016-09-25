import { Maker } from './maker';
export class Category {
  constructor(
    public Name: string,
    public Number: string,
    public Path: string,
    public Subcategories: Maker[],
    public HasClassifieds:boolean) { }
}
