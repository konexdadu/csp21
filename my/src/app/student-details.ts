export interface StudentDetails {
    name: string;
    email:string;
    password:string;

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
  export interface login {
    email: string;
    password: string;
  }



 