import { Component, signal } from '@angular/core';
import { Projects } from '../../interface/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<Projects[]>([
    {
      src: 'https://raw.githubusercontent.com/JonathanGuimarae3s/ilha-das-rabanadas/main/public/imgs/img/logo-footer.webp',
      alt: 'Projeto Ilha das Rabanadas v.2',
      title: 'Ilha das Rabanadas',
      width: '100px',
      height: '51px',
      description: "<p>Colaborei no desenvolvimento de um sistema focado em otimizar o serviço de\
      encomendas da empresa 'Ilha das Rabanadas'</p>",
      links: [
        {
          name: "Visualizar demonstração",
          href: ""
        },
        {
          name: "Visitar Github",
          href: "https://github.com/JonathanGuimarae3s/ilha-das-rabanadas-v.2"
        },

      ]
    },
  ])
}
