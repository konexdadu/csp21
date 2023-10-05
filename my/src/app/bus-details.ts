export interface BusDetails123 {
    from123: String;
    to123:String;
    bussno123:String;
    time123:String;
  }
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }