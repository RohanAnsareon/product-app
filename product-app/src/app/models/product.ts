export class Product {
  constructor(
    public id:         number,
    public name:       string,
    public cost:       number,
    public category:   string,
    public avaliable:  boolean,
    public count:      number,
    public removeDate: Date
  ) { }
}
