import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Landing Page', url: '/landing-page', icon: 'construct' },
  ];

  trackingCode = environment.gtagTrackingCode;

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef,
    public deviceSvc: DeviceDetectorService
  ) {

    // Check device

    if (environment.production && !deviceSvc.isMobile()) {
      window.location.href = environment.website;
    }

    // Google analytics

    const script = this.renderer.createElement('script') as HTMLScriptElement;
    script.src = `//www.googletagmanager.com/gtag/js?id=${this.trackingCode}`;
    script.async = true;
    this.renderer.appendChild(this.el.nativeElement, script);

    const script2 = this.renderer.createElement('script') as HTMLScriptElement;
    const scriptBody = this.renderer.createText(`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', '${this.trackingCode}');
    `);
    this.renderer.appendChild(script2, scriptBody);
    this.renderer.appendChild(this.el.nativeElement, script2);

  }
}
