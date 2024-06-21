import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from "./contact/contact.component";


@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [CommonModule, AboveTheFoldComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent]
})
export class MainContentComponent {

}
