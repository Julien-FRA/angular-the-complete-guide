import { Directive, input, inject, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input<string>('myapp');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      'Are you sure you want to leave this page?',
    );

    if (wantsToLeave) {
      const adress = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        adress + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
