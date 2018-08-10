import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnInit {
  projects = this.projectservice.projects;
  filteredStatus1='';
  filteredStatus2='';
  filteredStatus3='';

  constructor(
    private projectservice: ProjectService
  ) { }

  ngOnInit() {
  }

  getActiveClasses(filter: string, filterCondition: string){
    if (filter==filterCondition)
      return('active');
  }

  getStatusClasses(status: string){
    return{
      'badge-secondary': status ==='pending',
      'badge-success': status ==='approved',
      'badge-warning': status ==='reconsider',
      'badge-danger': status ==='declined'
    };
  }

}
