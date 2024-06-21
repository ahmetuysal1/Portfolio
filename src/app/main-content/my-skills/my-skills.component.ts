import { Component } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, MainContentComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent 
{

  skills: {
    img: string;
    name: string;
  }[] = [
    {
    img: "./../../../assets/img/skill-icon/angular_icon.png",
    name: "Angular"
    },
    {
    img: "./../../../assets/img/skill-icon/typescript_icon.png",
    name: "TypeScript"
    },
    {
    img: "./../../../assets/img/skill-icon/javascript_icon.png",
    name: "JavaScript"
    },
    {
    img: "./../../../assets/img/skill-icon/html_icon.png",
    name: "HTML"
    },
    {
    img: "./../../../assets/img/skill-icon/scrum_icon.png",
    name: "Scrum"
    },
    {
    img: "./../../../assets/img/skill-icon/firebase_icon.png",
    name: "Firebase"
    },
    {
    img: "./../../../assets/img/skill-icon/git_icon.png",
    name: "Git"
    },
    {
    img: "./../../../assets/img/skill-icon/css_icon.png",
    name: "CSS"
    },
    {
    img: "./../../../assets/img/skill-icon/api_icon.png",
    name: "Rest-Api"
    },
    {
    img: "./../../../assets/img/skill-icon/material_design_icon.png",
    name: "Material Design"
    }
  ]

}
