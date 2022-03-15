
    export interface Info {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface Origin {
        name: string;
        url: string;
    }

    interface Location {
        name: string;
        url: string;
    }

    interface Result {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

    export interface RootObject {
        info: Info;
        results: Result[];
    }



    interface LocationDetailed {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: string[];
        url: string;
        created: Date;
    }

    export interface EpisodeDetailed {
        id: number;
        name: string;
        air_date: string;
        episode: string;
        characters: string[];
        url: string;
        created: Date;
    }