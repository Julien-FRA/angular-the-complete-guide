import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  clickCount = signal<number>(0);
  private subscription: any;

  constructor() {
    effect(() => {
      console.log(`Click count: ${this.clickCount()}`);
    });
  }

  ngOnInit(): void {
    // this.subscription = interval(1000)
    //   .pipe(map((value) => value * 2))
    //   .subscribe((v) => console.log(v));
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  onClick(): void {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
