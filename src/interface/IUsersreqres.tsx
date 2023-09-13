export default interface IUsersreqres {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: IDataUser[]
    support: ISupport
  }
  
  export interface IDataUser {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  
  export interface ISupport {
    url: string
    text: string
  }
