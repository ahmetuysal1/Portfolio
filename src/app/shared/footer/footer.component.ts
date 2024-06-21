import { Component } from '@angular/core';
import { ImprintComponent } from '../../main-content/imprint/imprint.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ImprintComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
