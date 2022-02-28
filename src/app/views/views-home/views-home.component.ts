import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statistics = [
    { value: 22, label: 'Faves' },
    { value: 31200, label: 'Views' },
    { value: 22, label: 'Members' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
