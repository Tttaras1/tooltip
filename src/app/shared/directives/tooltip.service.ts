import { Injectable, ComponentRef } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  public tooltipRefs: ComponentRef<TooltipComponent>[] = [];
}
