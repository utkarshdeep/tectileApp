

export class Notification{
    title: string;
    description: string;
    href: string;
    datetime: string;


    constructor (title, description, href, datetime ){
        this.title = title
        this.description = description
        this.href = href
        this.datetime = datetime
    }
}