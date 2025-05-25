import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      title: 'Front-End Technologies',
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Responsive Design']
    },
    {
      title: 'Angular Framework',
      items: ['Components', 'Modules', 'Data Binding', 'Routing', 'Navigation']
    },
    {
      title: 'Back-End & Microservices',
      items: ['C#', 'ASP.NET Core', 'Dapper', 'MediatR', 'Ocelot']
    },
    {
      title: 'Database & BI Tools',
      items: ['SSMS', 'MySQL', 'Power BI', 'Stored Procedures']
    }
  ];
}