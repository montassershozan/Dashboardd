import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datum } from 'src/app/interfaces/intersrart';
import { ServSecService } from 'src/app/services/servsec.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './secpage.component.html',
  styleUrls: ['./secpage.component.scss'],
})
export class SecPageComponent implements OnInit {
  UserAv: Datum[] = [];
  UserFN: Datum[] = [];
  UserLN: Datum[] = [];
  UserEm: Datum[] = [];
  constructor(private _ServService: ServSecService,private _ActivatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    let UserI = this._ActivatedRoute.snapshot.params['userid'];
    console.log(UserI);
    this._ServService.GetDta(UserI).subscribe({
      next: (next) => {
        this.UserAv = next.data.avatar;
        this.UserFN = next.data.first_name;
        this.UserLN = next.data.last_name;
        this.UserEm = next.data.email;
      },
    });
  }
}
