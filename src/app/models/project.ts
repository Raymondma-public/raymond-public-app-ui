import {Image} from './image';
import {GoogleDoc} from './google-doc';
export class Project {
    id:number;
    name:string;
    startDate: Date;
    description: string;
    images: Image[];
    googleDocs:GoogleDoc[];
}
