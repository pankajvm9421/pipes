import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name:"shorten"
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit:number, anotherarg: number) {

        if(value.length > limit){
            return value.substr(0,limit) + '...';
        }
        // throw new Error("Method not implemented.");

        return value;
        
    }

}