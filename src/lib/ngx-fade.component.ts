import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";

@Component({
  selector: "om-fade",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-fade.component.html",
  styleUrl: "./ngx-fade.component.scss",
})
export class NgxFadeComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmFadeElement") omFadeElement!: ElementRef<HTMLElement>;

  @Input("direction")
  direction?: "up" | "down" | "left" | "right";

  @Input("animateOnlyOnce")
  animateOnlyOnce = false;

  @Input("transitionDuration")
  set transitionDuration(duration: string) {
    this.style["--om-fade-transition-duration"] = duration;
  }

  @Input("transitionFunction")
  set transitionFunction(easeFunction: string) {
    this.style["--om-fade-transition-function"] = easeFunction;
  }

  @Input("customTransform")
  set customTransform(customTransform: string) {
    this.style["transform"] = `${customTransform}`;
  }

  style: any = {};

  inViewport = false;
  intersectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    this.initObserver();
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private initObserver(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting !== this.inViewport) {
        if (this.animateOnlyOnce && this.inViewport && !entry.isIntersecting) {
          this.inViewport = true;
        } else {
          this.inViewport = entry.isIntersecting;
          this.cdr.detectChanges();
        }
      }
    });

    this.intersectionObserver.observe(this.omFadeElement.nativeElement);
  }
}
