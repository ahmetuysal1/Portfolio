import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translate = inject(TranslationService);

  projects: {
    img: string;
    name: string;
    title: string;
    description: string;
    projectUrl: string;
    isRowReverse: boolean;
  } [] = [
    {
      img: './../../../assets/img/project/join_.png',
      name: 'Join',
      title: 'JavaScript | HTML | CSS',
      description: 'project.projectJoin',
      projectUrl: 'Github',
      isRowReverse: false,
    },

    {
      img: './../../../assets/img/project/el_pollo_loco.png',
      name: 'El Pollo Loco',
      title: 'JavaScript | HTML | CSS',
      description: 'project.projectPolloLoco',
      projectUrl: 'Github',
      isRowReverse: true,
    },

    {
      img: './../../../assets/img/project/Pokédex.png',
      name: 'Pokédex',
      title: 'JavaScript | HTML | CSS | API ',
      description: 'project.projectPokèdex',
      projectUrl: 'Github',
      isRowReverse: false,
    },
  ]

}
