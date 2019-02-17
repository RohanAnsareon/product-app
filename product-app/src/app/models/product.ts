export class Product {
  constructor(
    public id:         number,
    public name:       string,
    public cost:       number,
    public category:   string,
    public available:  boolean,
    public count:      number,
    public removeDate: Date
  ) { }
}
