import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {// es un sericio
    const mensaje = "Hello World!!";
    return mensaje;
    // return 'Hello World!!';
  }
  getHola(): string {
    return 'Hola Mundo!!';
  }
}
