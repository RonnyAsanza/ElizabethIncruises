import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ProductFeatureType, productFeatures } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { LightgalleryModule } from 'lightgallery/angular'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'product-video',
  standalone: true,
  imports: [LightgalleryModule, CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent implements OnInit {
  productData: ProductFeatureType[] = productFeatures
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.productData.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icons)
    })
  }

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
