import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-contact',
    imports: [TranslocoModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
