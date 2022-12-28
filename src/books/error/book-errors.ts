import { HttpException, HttpStatus } from "@nestjs/common";

export class bookErrors extends HttpException{
    constructor (msg: string){
        super(msg, HttpStatus.FORBIDDEN);
    }
}