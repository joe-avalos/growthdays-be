import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    Hello World!
    ${process.env.DB_HOST}
    ${process.env.DB_NAME}
    ${process.env.DB_USER}
    ${process.env.DB_PASSWORD}
    ${process.env.DB_PORT}
    `;
  }
}
