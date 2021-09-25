interface AccountModel {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface AddAccount {
  add (account: AddAccount.AddAccountParams): Promise<AccountModel>
}

export namespace AddAccount {
  export type AddAccountParams = Omit<AccountModel, 'id'>
}