export interface Photos {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export class PhotosObj implements Photos {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(item?: Photos) {
        if (item != undefined) {
            for (let key in item) {
                try { this[key] = item[key]; }
                catch (e) { }
            }
        }
    }
}