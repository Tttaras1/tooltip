import { Directive, Input, Renderer2,  AfterViewInit, HostListener, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { AppService } from 'src/app/app.service';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements AfterViewInit {
  @Input() template: any;

  private tooltipRef: ComponentRef<TooltipComponent>;

  constructor(
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private appService: AppService,
    private tooltipService: TooltipService
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.closeAllTooltips();
    if (!this.tooltipRef) {
      this.addTooltip(
        event.x,
        (<HTMLInputElement>event.target).offsetTop,
        event.target
      )
    }
  }

  @HostListener('window:click', ["$event"])
  onOutsideClick(): void {
    if (this.tooltipService.tooltipRefs.length) {
      this.closeAllTooltips();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeyHandler(): void {
    if (this.tooltipService.tooltipRefs.length) {
      this.closeAllTooltips();
    }
  }

  public ngAfterViewInit(): void {
    this.removeTooltip();
  }

  public removeTooltip(): void {
    this.renderer.removeChild(
      this.template.parentNode,
      this.template
    )
  }

  public addTooltip(x, y, anchorElement): void {
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    this.tooltipRef = this.appService.rootView.createComponent(factory);

    this.tooltipService.tooltipRefs.push(this.tooltipRef);

    this.renderer.appendChild(
      this.tooltipRef.location.nativeElement.childNodes[0],
      this.template
    )
    this.tooltipRef.instance.top = y;
    this.tooltipRef.instance.left = x;
    this.tooltipRef.instance.anchorElement = anchorElement;
  }

  private closeAllTooltips(): void {
    this.tooltipService.tooltipRefs.forEach((tooltipRef: ComponentRef<TooltipComponent>) => {
      tooltipRef.destroy();
    })
    this.tooltipService.tooltipRefs = [];
    this.tooltipRef = null;
  }
}
