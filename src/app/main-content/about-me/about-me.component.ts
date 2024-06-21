import { Component, inject } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MainContentComponent, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  translate = inject(TranslationService);
}
