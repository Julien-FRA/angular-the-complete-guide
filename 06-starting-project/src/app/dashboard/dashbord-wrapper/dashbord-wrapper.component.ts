import { Component, input } from '@angular/core';

type ImageDashboard = { src: string; alt: string };

@Component({
  selector: 'app-dashbord-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dashbord-wrapper.component.html',
  styleUrl: './dashbord-wrapper.component.css',
})
export class DashbordWrapperComponent {
  image = input.required<ImageDashboard>();
  title = input.required<string>();
}
