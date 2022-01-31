export interface dataItem {
    company: string,
    contract: string,
    location: string,
    position: string,
    logo: string
    logoBackground: string,
    postedAt: string,
    requirements: { [key: string]: string, items: any},
    role: { [key: string]: string, items: any },
    description: string
}