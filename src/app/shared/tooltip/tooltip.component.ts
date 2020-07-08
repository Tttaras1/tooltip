import { Component, OnInit, Input, HostListener, Output, EventEmitter, OnChanges, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements AfterViewInit {
  @Input() top: number;
  @Input() left: number;
  @Input() anchorElement: HTMLElement;

  @ViewChild('tooltip', {static: false}) tooltip: ElementRef;

  public tooltipPosition: number;

  constructor(
    private cdr: ChangeDetectorRef
    ) {}

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    if (this.isInViewport()) {
      this.changeTooltipPositionToTop();
    } else {
      this.changeTooltipPositionToBottom();
    }
  }

  public ngAfterViewInit(): void {
    this.changeTooltipPositionToTop();
    this.cdr.detectChanges();
  }

  public changeTooltipPositionToTop(): void {
    this.tooltipPosition = this.top - this.tooltip.nativeElement.offsetHeight;
  }

  public changeTooltipPositionToBottom(): void {
    this.tooltipPosition = this.top + this.anchorElement.offsetHeight;
  }

  public isInViewport(): boolean {
    const el = this.anchorElement

    return el.getBoundingClientRect().top >= this.tooltip.nativeElement.offsetHeight;
  }
}
