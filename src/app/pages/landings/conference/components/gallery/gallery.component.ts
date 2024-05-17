import { Component, ViewEncapsulation } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import { RouterModule } from '@angular/router'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { NgxMasonryModule } from 'ngx-masonry'

@Component({
  selector: 'conference-gallery',
  standalone: true,
  imports: [LightgalleryModule, RouterModule, NgxMasonryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
