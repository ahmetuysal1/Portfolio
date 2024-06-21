import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './main-content/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path:'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent }
];
