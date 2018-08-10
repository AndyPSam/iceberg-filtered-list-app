import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = [
    {
      name:"A",
      status1:"pending",
      status2:"pending",
      status3:"pending"
    },
    {
      name:"B",
      status1:"approved",
      status2:"pending",
      status3:"pending"
    },
    {
      name:"C",
      status1:"pending",
      status2:"reconsider",
      status3:"pending"
    },
    {
      name:"D",
      status1:"pending",
      status2:"pending",
      status3:"declined"
    },
    {
      name:"E",
      status1:"approved",
      status2:"reconsider",
      status3:"declined"
    }
  ];

  constructor() { }
}
