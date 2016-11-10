export class Movie{
  constructor(){};
  constructor(
    public id:number,
    public title:string,
    public releaseYear:string,
    public director:string,
    public genre:string
  ){}
}
