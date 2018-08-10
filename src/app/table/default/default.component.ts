import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  inputText='';
  projectRandomCreationStatus = false;
  projectName='';
  projectCreated = false;
  projects = this.projectservice.projects;

  constructor(
    private projectservice: ProjectService
  ) { }

  ngOnInit() {
  }

  onCreateProject(){
    this.projectName=this.inputText;
    if(this.projectName=="" || this.projectRandomCreationStatus == true){
      this.randomName();
      this.projectRandomCreationStatus = true;
      this.projectName=this.inputText;
    }
    this.projectCreated = true;
    this.projectservice.projects.push({
      name:this.projectName,
      status1:this.randomStatus(),
      status2:this.randomStatus(),
      status3:this.randomStatus()
    });
  }

  randomName(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.inputText=text;
  }

  randomStatus(){
    if(Math.random()<0.25){
      return('pending');
    }
    else if(Math.random()<0.5){
      return('approved');
    }
    else if(Math.random()<0.75){
      return('reconsider');
    }
    else{
      return('declined');
    }
  }

  cycleStatus(status: string){
    if(status=='pending')
      return('approved');
    else if(status=='approved')
      return('reconsider');
    else if(status=='reconsider')
      return('declined');
    else  return('pending');
  }

  getStatusClasses(status: string){
    return{
      'badge-secondary': status ==='pending',
      'badge-success': status ==='approved',
      'badge-warning': status ==='reconsider',
      'badge-danger': status ==='declined'
    };
  }

  deleteProject(project){
    this.projectservice.projects.splice(this.projectservice.projects.indexOf(project), 1);
  }

}
