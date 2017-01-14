export interface Movie{
        id: string,
        name: string,
        categoryIds: Array<string>,
        isAvailable: boolean,
        copiesLeft: number,
        fee:number
}