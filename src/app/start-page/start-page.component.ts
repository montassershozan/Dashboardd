import { Component, OnInit } from '@angular/core';
import { ServService } from '../services/serv.service';
import { Datum, Intersrart } from '../interfaces/intersrart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  constructor(private _ServService: ServService, private _Router: Router) {}
  users: Datum[] = [];
  term = '';
  pages: any;
  nextPg() {
    let pn = this.pages++;
    if (pn == 2) {
      this._Router.navigate(['/premuim']);
    }
    this.showD(pn);
  }
  prevPg() {
    let pn = this.pages--;
    this.showD(pn);
  }

  ngOnInit(): void {
    this.showD(this.pages);
  }
  showD(pn: number) {
    this._ServService.GetDta(this.pages).subscribe({
      next: (next) => {
        this.users = next.data;
        this.pages = next.page;
        console.log(next);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
