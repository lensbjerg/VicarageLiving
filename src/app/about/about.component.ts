import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-about',
    imports: [TranslocoModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

}
