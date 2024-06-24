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
    description1: string;
    projectGit: string;
    projectLink: string;
    isRowReverse: boolean;
  } [] = [
    {
      img: './../../../assets/img/project/join_.png',
      name: 'Join',
      title: 'Firebase | JavaScript | HTML | CSS',
      description: 'project.projectJoin',
      description1: 'project.projectJoin1',
      projectGit: 'https://github.com/ahmetuysal1/Join',
      projectLink: 'https://join.ahmet-uysal.de/',
      isRowReverse: false,
    },

    {
      img: './../../../assets/img/project/el_pollo_loco.png',
      name: 'El Pollo Loco',
      title: 'JavaScript (OOP) | HTML | CSS',
      description: 'project.projectPolloLoco',
      description1: 'project.projectPolloLoco1',
      projectGit: 'https://github.com/ahmetuysal1/el-pollo-loco',
      projectLink: 'https://el-pollo-loco.ahmet-uysal.de/',
      isRowReverse: true,
    },

    {
      img: './../../../assets/img/project/Pokédex.png',
      name: 'Pokédex',
      title: 'JavaScript | HTML | CSS | API ',
      description: 'project.projectPokèdex',
      description1: 'project.projectPokèdex1',
      projectGit: 'https://github.com/ahmetuysal1/Pok-dex',
      projectLink: 'https://pokedex.ahmet-uysal.de/',
      isRowReverse: false,
    },
  ]

}
