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
      title: 'Ilha das Rabanadas v.2',

      width: '40%',
      height: '',
      description: "<span>Colaborei no desenvolvimento de um sistema focado em otimizar o serviço de\
      encomendas da empresa 'Ilha das Rabanadas.\
      A Ilha é uma empresa focada na produção de rabanadas de diversos tipos e sabores. Além disso, conta com serviços de delivery.Essa segunda versao do sistema web veio para corrigir algumas falhas e fizemos a troca da linguagem de back-end</span>",

      tecnologies:"<ul>\
        <li><strong>Arquitetura de Projeto:</strong> MVC (Model - View - Controller) com conceito singleton.</li>\
        <li><strong>Banco de Dados:</strong> MySQL.</li>\
        <li><strong>Java:</strong>\
          <ul>\
            <li>Servlets</li>\
            <li>JSP</li>\
            <li>JDBC</li>\
            <li>POO (Programação Orientada a Objetos)</li>\
            <li>Session Management</li>\
          </ul>\
        </li>\
        <li><strong>JavaScript:</strong>\
          <ul>\
            <li>Validações de formulário</li>\
            <li>Consumo da API (Fetch API)</li>\
          </ul>\
        </li>\
        <li><strong>Bootstrap:</strong> Framework para estilização e criação de interfaces responsivas.</li>\
        <li><strong>Integrações Adicionais:</strong>\
          <ul>\
            <li>API Viacep para dados de endereço</li>\
            <li>Animações de ícones com Lordicon</li>\
          </ul>\
        </li>\
      </ul>\
      ",
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
      {
      src: 'https://raw.githubusercontent.com/JonathanGuimarae3s/ilha-das-rabanadas/main/public/imgs/img/logo-footer.webp',
      alt: 'Projeto Ilha das Rabanadas ',
      title: 'Ilha das Rabanadas ',

      width: '40%',
      height: '',
      description: "<span>Colaborei no desenvolvimento de um sistema focado em otimizar o serviço de\
      encomendas da empresa 'Ilha das Rabanadas.\
      A Ilha é uma empresa focada na produção de rabanadas de diversos tipos e sabores. Além disso, conta com serviços de delivery.</span>",

      tecnologies:"<ul>\
      <li><strong>Arquitetura de projeto:</strong> MVC com conceito singleton</li>\
      <li><strong>Banco de Dados:</strong> MySQL</li>\
      <li><strong>PHP:</strong>\
        <ul>\
          <li>SESSIONS</li>\
          <li>PDO</li>\
          <li>POO</li>\
        </ul>\
      </li>\
      <li><strong>JavaScript:</strong> utilizado para fazer validações do formulário e consumir API\
        <ul>\
          <li>FETCH API</li>\
        </ul>\
      </li>\
      <li><strong>Bootstrap:</strong> utilizado para fazer a estilização</li>\
      <li><strong>Integrações Adicionais:</strong>\
        <ul>\
          <li>API Viacep para dados de endereço</li>\
          <li>Animações de ícones com Lordicon</li>\
        </ul>\
      </li>\
    </ul>\
    \
      ",
      links: [
        {
          name: "Visualizar demonstração",
          href: ""
        },
        {
          name: "Visitar Github",
          href: "https://github.com/JonathanGuimarae3s/ilha-das-rabanadas"
        },

      ]
    }
  ])
  public openDialog(data: Projects) {
    this.#dialog.open(DialogProjectsComponent, {
        data: data,
        panelClass: EDialogPanelClass.PROJECTS,

      });
  }
}
