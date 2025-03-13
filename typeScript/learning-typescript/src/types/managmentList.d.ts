declare interface ListManager<T>{
    items:T[];
    add(item:T):void;
    remove(Index:number):void;
    edit(Index:number,NewItem:T):void
}