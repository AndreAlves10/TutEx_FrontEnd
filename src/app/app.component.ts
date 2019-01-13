import { Component } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { Teacher } from './interfaces/Teacher';

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
        value => this.teachers = value,
        error => console.log("ERROR getTeachers()"),
        () => console.log("Finished")
      );;
  }
}