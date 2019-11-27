export class Film {
    public id: number;
    public title: string;
    public year: string;
    public description: string;
    public director: string;
    public mainactor: string;
    public imagePath: string;

    constructor({ id, title, year, description, director, mainactor, imagePath }: { id: number; title: string; year: string; description: string; director: string; mainactor: string; imagePath: string }){
        this.id = id;
        this.title = title;
        this.year = year;
        this.description = description;
        this.director = director;
        this.mainactor = mainactor;
        this.imagePath = imagePath;
    }
}