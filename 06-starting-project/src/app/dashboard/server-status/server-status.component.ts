import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    this.changeStatus();
  }

  changeStatus() {
    const setIntervalId = setInterval(() => {
      if (this.currentStatus === 'online') {
        this.currentStatus = 'offline';
      } else if (this.currentStatus === 'offline') {
        this.currentStatus = 'unknown';
      } else if (this.currentStatus === 'unknown') {
        this.currentStatus = 'online';
      }
    }, 10000);

    this.destroyRef.onDestroy(() => {
      clearInterval(setIntervalId);
    });
  }
}
