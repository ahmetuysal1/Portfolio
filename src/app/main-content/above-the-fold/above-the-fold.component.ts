import { Component, inject } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../../shared/header/header.component";


@Component({
    selector: 'app-above-the-fold',
    standalone: true,
    templateUrl: './above-the-fold.component.html',
    styleUrl: './above-the-fold.component.scss',
    imports: [MainContentComponent, TranslateModule, HeaderComponent]
})
export class AboveTheFoldComponent {
  translate = inject(TranslationService);
}
