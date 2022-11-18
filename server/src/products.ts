export interface Product {
    id:number;
    nome:string;
    prezzo:number;
    descrizione:string;
    immagine:string;
}

export const products:Product[]=[
    {
        id:1,
        nome:"tommaso",
        prezzo:1000,
        descrizione:'solare, bello, divertente',
        immagine:'http://localhost:8080/tommaso.jpg'
    },
    {
        id:2,
        nome:"marco",
        prezzo:1001,
        descrizione:'grande, cuoco, schietto',
        immagine:'http://localhost:8080/marco.jpg'
    },
    {
        id:3,
        nome:'francesco',
        prezzo:999,
        descrizione:'giovane, intelligente, astuto',
        immagine:'http://localhost:8080/francesco.jpg'
    }
]
