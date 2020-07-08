import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef,
    private appService: AppService
  ) {}

  public ngOnInit() {
    this.appService.rootView = this.vcr;
  }
}
