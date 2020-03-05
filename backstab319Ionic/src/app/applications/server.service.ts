import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
  // Server address to use
  private development = 'http://localhost:3000';
  private prod = 'https://backstab319.herokuapp.com';
  private address = this.prod;

  getServerAddress = () => this.address;
}
