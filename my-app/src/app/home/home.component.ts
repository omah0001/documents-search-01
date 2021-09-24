import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [
    {label: 'All', id: 0},
    {label: 'Financial', id: 1},
    {label: 'Technical', id: 2},
    {label: 'Marketing', id: 3},
    {label: 'Human Resources', id: 4}
  ];

  documents = [
    {label: 'Terminal Instructables', categoryId: 2, categoryLabel: 'Technical'},
    {label: 'Installation guides', categoryId: 2, categoryLabel: 'Technical'},
    {label: 'Technical Support', categoryId: 2, categoryLabel: 'Technical'},
    {label: 'Career Opportunities', categoryId: 4, categoryLabel: 'Human Resources'},
    {label: 'Traning', categoryId: 4, categoryLabel: 'Human Resources'},
    {label: 'Customer onboarding', categoryId: 1, categoryLabel: 'Financial'},
    {label: 'Accounting Procedures', categoryId: 1, categoryLabel: 'Financial'},
    {label: 'Outlet Branding', categoryId: 3, categoryLabel: 'Marketing'},
    {label: 'Printing guidance', categoryId: 3, categoryLabel: 'Marketing'}
  ];

  documentQuery = '';

  filteredDocuments = [];

  ngOnInit() {
    this.filteredDocuments = [...this.documents];
  }


  categorySelectedHandler(event, category) {
    event.preventDefault();
    console.log(category);

    if (!category.id) {
      this.filteredDocuments = [...this.documents];
      return;
    }

    this.filteredDocuments = [...this.documents.filter(document => document.categoryId === category.id)];
  }

}
