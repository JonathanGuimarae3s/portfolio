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
      src: 'https://lh3.googleusercontent.com/p/AF1QipPFZJL0BThqGyO5ky1tEfegRDOOBZigYa8edmGl=s680-w680-h510',
      alt: 'SmartFull Sistemas',
      title: 'SmartFull Sistemas - Desenvolvedor Web Jr.',
      width: '75%',
      height: '',
      periodo: 'Maio de 2024 - o momento',
      description: `<span>
                    Atualmente, trabalho como desenvolvedor <strong>Java</strong> focado no ecossistema <strong>Jakarta EE</strong>.  
                    Atuo na implementação de novas funcionalidades e na manutenção do sistema, garantindo sua estabilidade e desempenho.  

                    No dia a dia, utilizo <strong>JSF</strong> e <strong>PrimeFaces</strong> para desenvolver interfaces interativas e dinâmicas.  
                    Também trabalho com <strong>JasperReports</strong> para a geração de relatórios personalizados.  

                    Além disso, presto manutenção no sistema, corrigindo bugs e realizando ajustes para melhorar a experiência dos usuários.  
                    </span>

                    `,
      tecnologies: "",
      knowledge: [
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          alt: 'Ícone de conhecimento em Java'
        },
        {
          src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhg-f1CaCAoVA-QQ3RQykEYGMDCXXoQg0PWu_e87LtR8gyG1yq5wbEoZM2-oHFP98k6WZm9cBqcRpQTlzi3-T2LpiRwDOKqRDwK1AolN0aphDMS4OKxCqTMM1gArHaLLz5HPUT3sNOo5Q/s1600/JSF-Logo-2+-+small.png',
          alt: 'Ícone de conhecimento em JSF'
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
          src: 'https://images.sftcdn.net/images/t_app-icon-m/p/e6d790bb-aa65-4fab-aa1e-346af12710a0/1081729734/jaspersoft-studio-imgingest-4237344852768170016.png',
          alt: 'Ícone de conhecimento em JasperSoft'
        },

      ],

      links: [
        {
          name: "",
          href: ""
        },
        {
          name: "",
          href: ""
        },

      ]
    },
    {
      src: 'https://www.firjan.com.br/custom/FIRJAN/Portal/images/branding/brd-inst-firjansenai.png',
      alt: 'Firjan Senai',
      title: 'Firjan Senai - Nova Iguaçu - Instrutor de Robótica.',
      width: '75%',
      height: '',
      periodo: 'Setembro de 2023 - Janeiro de 2024',
      description: `<span>
                   Como instrutor de robótica, capacitei alunos em empreendedorismo, abordando diversificação de atividades e desenvolvimento de ideias inovadoras. Enfoquei características empreendedoras, análise de mercado, gestão de pessoas e empreendedorismo digital. Além disso, explorei conceitos de liderança, inovação na gestão de processos e gerenciamento de projetos. No âmbito da robótica, guiando os alunos na cultura maker, cobri áreas como mecânica, desenho, eletrônica e programação. Os projetos abrangem inclusão, sustentabilidade e qualidade de vida, proporcionando uma visão holística do empreendedorismo e suas aplicações práticas.</span>
                    `,
      tecnologies: "",
      knowledge: [
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
          alt: 'Ícone de conhecimento em C++'
        },
        {
          src: 'https://olimex.wordpress.com/wp-content/uploads/2017/06/arduino-logo-circle-thumb.png?w=584',
          alt: 'Ícone de conhecimento em Arduíno'
        },

      ],

      links: [
        {
          name: "",
          href: ""
        },
        {
          name: "",
          href: ""
        },

      ]
    },

  ])
  public openDialog(data: Projects) {
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS,

    });
  }
}
