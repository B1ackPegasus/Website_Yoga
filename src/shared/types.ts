 export enum SelectedPage  {
    Home = "home",
    Benefits = "benefits",
    Sessions = "sessions",
    ContactUS = "contactus"
}

export interface BenefitType{
    image:string,
    title:string,
    description:string,
}

export interface SessionType{
    image:string,
    title:string
}
