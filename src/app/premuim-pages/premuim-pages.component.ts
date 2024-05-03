import { Component, OnInit } from '@angular/core';
import { ServService } from '../services/serv.service';
import { Support } from '../interfaces/intersrart';

@Component({
  selector: 'app-premuim-pages',
  templateUrl: './premuim-pages.component.html',
  styleUrls: ['./premuim-pages.component.scss'],
})
export class PremuimPagesComponent implements OnInit {
  Support: Support[] = [];
  Support1: Support[] = [];
  pages: any;
  constructor(private _ServService: ServService) {}
  ngOnInit(): void {
    this._ServService.GetDta(this.pages).subscribe({
      next:(next)=>{
        this.Support = next.support.text;
        this.Support1 = next.support.url;
      }
    });
  }
}
