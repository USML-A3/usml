import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  members: Members[] = [
    { name: 'Kicillof', branch: 'Sable', rank: 'Sargento', status: false },
    { name: 'JDSimoza', branch: 'Sable', rank: 'Sargento', status: false },
    { name: 'Ghost', branch: 'Sable', rank: 'Cabo 2do', status: true },
    { name: 'JBenison', branch: 'Hades', rank: 'Capitan', status: false },
    { name: 'Ponce', branch: 'Sable', rank: 'Cabo', status: true },
    {
      name: 'Deknop',
      branch: 'Hades',
      rank: 'Airman First Class',
      status: true,
    },
    {
      name: 'GustavoCR',
      branch: 'Sable',
      rank: 'Soldado de 2da',
      status: true,
    },
    {
      name: 'Cerberus',
      branch: 'Sable',
      rank: 'Soldado de 1ra',
      status: true,
    },
    {
      name: 'Maxialfre',
      branch: 'Sable',
      rank: 'Soldado de 1ra',
      status: false,
    },
    {
      name: 'Varko',
      branch: 'Sable',
      rank: 'Soldado de 1ra',
      status: true,
    },
    {
      name: 'Userkaft',
      branch: 'Sable',
      rank: 'Soldado de 2da',
      status: true,
    },
    {
      name: 'Chaza601',
      branch: 'Sable',
      rank: 'Soldado de 2da',
      status: true,
    },
    {
      name: 'DinoVelvet',
      branch: 'Sable',
      rank: 'Soldado de 2da',
      status: true,
    },
    {
      name: 'Kombuchaman',
      branch: 'Sable',
      rank: 'Soldado de 2da',
      status: true,
    },
    { name: 'Andre', branch: 'Cratos', rank: 'Soldado', status: true },
    { name: 'EngelxD', branch: 'Sable', rank: 'Soldado', status: false },
    { name: 'Lukas', branch: 'Cratos', rank: 'Soldado', status: true },
    { name: 'Chino', branch: 'Cratos', rank: 'Recluta', status: true },
    { name: 'Chuchas', branch: 'Cratos', rank: 'Recluta', status: true },
  ];

  filterByBranchAndActive: (branch: string) => Members[] = (branch) => {
    return this.members.filter(
      (member) => member.branch === branch && member.status
    );
  };
  filterByRank: (rank: string, toFilterArray: Members[]) => Members[] = (
    rank,
    toFilterArray
  ) => {
    return toFilterArray.filter((member) => member.rank === rank);
  };
  cratosActiveMembers = this.filterByBranchAndActive('Cratos');
  sableActiveMembers = this.filterByBranchAndActive('Sable');
  hadesActiveMembers = this.filterByBranchAndActive('Hades');

  cratosSoldado = this.filterByRank('Soldado', this.cratosActiveMembers);
  cratosCadete = this.filterByRank('Cadete', this.cratosActiveMembers);
  cratosRecluta = this.filterByRank('Recluta', this.cratosActiveMembers);
  
  hadesSeniorAirman = this.filterByRank('Senior Airman', this.hadesActiveMembers);
  hadesAirmanFirstClass = this.filterByRank('Airman First Class', this.hadesActiveMembers);
  hadesAirman = this.filterByRank('Airman', this.hadesActiveMembers);

  sableSoldado = this.filterByRank('Soldado', this.sableActiveMembers);
  sableSoldado2da = this.filterByRank('Soldado de 2da', this.sableActiveMembers);
  sableSoldado1ra = this.filterByRank('Soldado de 1ra', this.sableActiveMembers);
  sableCabo = this.filterByRank('Cabo', this.sableActiveMembers);
  sableCabo2do = this.filterByRank('Cabo 2do', this.sableActiveMembers);
  sableCabo1ero = this.filterByRank('Cabo 1ero', this.sableActiveMembers);
  sableSargento = this.filterByRank('Sargento', this.sableActiveMembers);

  constructor() {};
};

type Members = {
  name: string;
  branch: string;
  rank: string;
  status: boolean;
};
