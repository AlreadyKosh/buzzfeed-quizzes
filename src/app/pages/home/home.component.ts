import { Component, OnInit } from '@angular/core';

import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [QuizzComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
