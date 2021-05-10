export type Sale = {
    id: number ,
    visited : number,
    deals : number ,
    amount : number,
    date : string ,
    seller :  Seller
}

export type Seller = {
    id: number ,
    name : string
}

export type SalePage = {
  content? :  Sale[], 
  first?: boolean,
  last?: boolean , 
  totalElements?: number,
  totalPages? : number,
  size? : number,
  firts?: boolean,
  numberOfElements?: number,
  empty?: boolean,
  number: number

}