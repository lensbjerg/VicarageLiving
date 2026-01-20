import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-footer',
    imports: [TranslocoModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    currentYear: number = (new Date()).getFullYear();

}
