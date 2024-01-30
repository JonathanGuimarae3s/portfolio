import { Component, inject, signal } from '@angular/core';
import { Projects } from '../../interface/projects';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
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
    }
  ])
  public openDialog(data: Projects) {
    this.#dialog.open(DialogProjectsComponent, {
        data: data,
        panelClass: EDialogPanelClass.PROJECTS
      });
  }
}
