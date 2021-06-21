import { Component, OnInit } from '@angular/core';
import state_lga from '../../../shared/state_lga.json';
import song from '../../../shared/song.json';
import politicalParty from '../../../shared/politicalParty.json';
@Component({
  selector: 'app-register-voter',
  templateUrl: './register-voter.component.html',
  styleUrls: ['./register-voter.component.scss'],
})
export class RegisterVoterComponent implements OnInit {
  constructor() {}
  //title = 'Jesus';
  voterName: string = '';
  voterState: string = '';
  voterLga: string = '';
  voterPoliticalParty: string = '';

  stateOfOrigin: string = '';
  localGovernmentArea: any = [{ id: 0, name: '' }];

  public songList: { name: string; code: string }[] = song;
  public stateAndLgas: { state: any; locals: any }[] = state_lga;
  public politicalParties: { id: number; party: string }[] = politicalParty;

  ngOnInit(): void {}

  getStateOfOrigin(event: any) {
    this.stateOfOrigin = event.target.value;
    const state = this.stateAndLgas.filter((el) => {
      return el.state === this.stateOfOrigin;
    })[0];
    const { locals } = state;

    this.localGovernmentArea = locals;
  }
  registerVoter() {
    const registration: any = {
      name: this.voterName,
      state: this.voterName,
      lga: this.voterLga,
      party: this.voterPoliticalParty,
    };
    console.log(registration);
  }
}
