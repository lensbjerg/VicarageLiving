import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [TranslocoModule, NgbCollapseModule, RouterLink, NgbDropdownModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isMenuCollapsed = true;
  currentLanguage = signal<string>('en');

  switchLanguage(lang: string) {
    if (lang != this.currentLanguage()) {
      this.currentLanguage.set(lang);
      this.translocoService.setActiveLang(lang);
    }
  }

  constructor(private translocoService: TranslocoService) {
    // this.switchLanguage('sv')

  }


}
