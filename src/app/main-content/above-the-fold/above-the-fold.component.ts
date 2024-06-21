import { Component, inject } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [MainContentComponent, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  translate = inject(TranslationService);
}
