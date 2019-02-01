import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor() { }
  public getUsers() {
    let fakeUsers = [{id: 1, firstName: 'Caleb', lastName: 'Christensen', email: 'Caleb@aol.com'},
    {id: 1, firstName: 'Laney', lastName: 'Christensen', email: 'LaneyGirlC@aol.com'},
    {id: 1, firstName: 'Sawyer', lastName: 'Christensen', email: 'SoyBoyC@aol.com'},
    {id: 1, firstName: 'Atticus', lastName: 'Christensen', email: 'AttyBoyC@aol.com'},
  ];
  return Observable.of(fakeUsers).delay(5000);
  }
  
}
