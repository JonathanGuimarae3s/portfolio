import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {



  public arrayExperiences = signal([
    {
      summary: {
        strong: "Ilha das Rabanadas - Versão 2 (Java, MySQL)",
        p: "Desenvolvi a segunda versão do sistema web para a empresa 'Ilha das Rabanadas'"
      },
      text: "<h4> Tecnologias  e conceitos utilizadas</h4>\
    <ul>\
    <li>Arquitetura de Projeto: MVC(Model - View - Controller) com conceito singleton.</li>\
    <li > Banco de Dados: MySQL.</li>\
    <li > Java: \
    <ul>\
    <li>Servlets </li>\
    <li > JSP </li>\
    <li > JDBC </li>\
    <li > POO(Programação Orientada a Objetos) </li>\
    <li > Session Management </li>\
    </ul>\
    </li>\
    <li > JavaScript: \
    <ul>\
    <li>Validações de formulário </li>\
    <li > Consumo da API(Fetch API) </li>\
    </ul>\
    </li>\
    <li > Bootstrap: Framework para estilização e criação de interfaces responsivas.</li>\
    <li > Integrações Adicionais: \
    <ul>\
    <li>API Viacep para dados de endereço </li>\
    <li > Animações de ícones com Lordicon </li>\
    </ul>\
    </li>\
    </ul>"
    },
    {
      summary: {
        strong: "Ilha das Rabanadas - Sistema de Encomendas (PHP, MySQL)",
        p: " Colaborei no desenvolvimento de um sistema focado em otimizar o serviço de\
        encomendas da empresa 'Ilha das Rabanadas'"
      },
      text: "<h4> Tecnologias  e conceitos utilizadas</h4>\
      <ul>\
      <li>Arquitetura de Projeto: MVC (Model - View - Controller) com conceito singleton.</li>\
      <li>Banco de Dados: MySQL.</li>\
      <li>PHP:\
        <ul>\
          <li>SESSIONS</li>\
          <li>PDO</li>\
          <li>POO (Programação Orientada a Objetos)</li>\
        </ul>\
      </li>\
      <li>JavaScript: \
        <ul>\
          <li>Validações de formulário</li>\
          <li>Consumo de API</li>\
        </ul>\
      </li>\
      <li>Bootstrap: Estilização e criação de interfaces responsivas.</li>\
      <li>Integrações Adicionais:\
        <ul>\
          <li>API Viacep para dados de endereço</li>\
          <li>Animações de ícones com Lordicon</li>\
        </ul>\
      </li>\
    </ul>\
      "
    },
  ])
}
