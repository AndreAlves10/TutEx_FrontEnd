import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Teacher } from './Models/teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutex';
  teachers: Teacher[];

  constructor(private catalogService: CatalogService) {
   this.getTeachers(); 
  }

  getTeachers() {
    this.catalogService.getTeachers()
      .subscribe(
        value => this.processTeachersResponse(value),
        error => console.log("ERROR getTeachers()"),
        () => console.log("Finished")
      );;
  }

  processTeachersResponse(response: any) {
    this.teachers = response.value;
  }

}