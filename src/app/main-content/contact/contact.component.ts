import { Component, inject } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MainContentComponent, FormsModule, PrivacyPolicyComponent, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  translate = inject(TranslationService);

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  }

  privacyPolicyChecked: false | undefined;

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('mail gesendet', this.contactData);
      ngForm.resetForm();
    }
  }
}
