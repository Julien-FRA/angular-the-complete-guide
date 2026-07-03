import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportComponent } from './dashboard/support/support.component';
import { DashbordWrapperComponent } from './dashboard/dashbord-wrapper/dashbord-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportComponent,
    DashbordWrapperComponent,
  ],
})
export class AppComponent {}
