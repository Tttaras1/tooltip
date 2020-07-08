import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  rootView: ViewContainerRef = null;
}
