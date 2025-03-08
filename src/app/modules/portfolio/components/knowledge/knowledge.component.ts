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
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      alt: 'Ícone de conhecimento em Angular'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      alt: 'Ícone de conhecimento em Java'
    },
    {
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhg-f1CaCAoVA-QQ3RQykEYGMDCXXoQg0PWu_e87LtR8gyG1yq5wbEoZM2-oHFP98k6WZm9cBqcRpQTlzi3-T2LpiRwDOKqRDwK1AolN0aphDMS4OKxCqTMM1gArHaLLz5HPUT3sNOo5Q/s1600/JSF-Logo-2+-+small.png',
      alt: 'Ícone de conhecimento em JSF'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      alt: 'Ícone de conhecimento em WordPress'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      alt: 'Ícone de conhecimento em Bootstrap'
    },
    {
      src: 'https://ia904503.us.archive.org/5/items/github.com-primefaces-primeng_-_2021-09-01_10-34-24/cover.jpg',
      alt: 'Ícone do PrimeFaces'
    },   
    {
      src: 'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg',
      alt: 'Ícone do Hibernate'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      alt: 'Ícone de conhecimento em PostgreSQL'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      alt: 'Ícone de conhecimento em Spring'
    },
    {
      src: 'https://images.sftcdn.net/images/t_app-icon-m/p/e6d790bb-aa65-4fab-aa1e-346af12710a0/1081729734/jaspersoft-studio-imgingest-4237344852768170016.png',
      alt: 'Ícone de conhecimento em JasperSoft'
    },
    
]);

}
