import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input<string>('myapp');

  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      'Are you sure you want to leave this page?',
    );

    if (wantsToLeave) {
      const adress = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        adress + '?from=' + this.queryParam();

      return;
    }

    event.preventDefault();
  }
}
