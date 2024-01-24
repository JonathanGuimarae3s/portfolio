import { Component, signal } from '@angular/core';
import { Knowledge } from '../../interface/knowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<Knowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de angular'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone de conhecimento de sass'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento de java'
    },
    {
      src: 'assets/icons/knowledge/wordpress.svg',
      alt: 'Icone de conhecimento de wordpress'
    },
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Icone de conhecimento de php'
    },
  ])
}
