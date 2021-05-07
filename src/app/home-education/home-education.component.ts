import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-education',
  templateUrl: './home-education.component.html',
  styleUrls: ['./home-education.component.scss']
})
export class HomeEducationComponent implements OnInit {

  educationList = [
    {
      period: '2013 - 2016', 
      local: 'Universidade Federal de Santa Maria',
      description: 'Bacharelado em Ciência da Computação' 
    },
    {
      period: '2017 - 2019', 
      local: 'Universidade Federal de Santa Maria',
      description: 'Mestrado em Ciência da Computação' 
    },
  ];

  experienceList = [
    {
      period: '2014 - 2016', 
      local: 'Universidade Federal de Santa Maria',
      description: 'Bolsista: Programa de Educação Tutorial (PET-CC)' 
    },
    {
      period: '2017 - 2018', 
      local: 'Universidade Federal de Santa Maria',
      description: 'Docência orientada - Laboratório de Programação I' 
    },
    {
      period: '2018 - atual', 
      local: 'Banco do Estado do Rio Grande do Sul',
      description: 'Analista de sistemas' 
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
