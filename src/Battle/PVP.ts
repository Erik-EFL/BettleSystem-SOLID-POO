import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, private _playerTwo: Fighter) {
    super(player);
  }

  isDead(): boolean {
    return (this.player.lifePoints === -1 || this._playerTwo.lifePoints === -1);
  }

  fight(): number {
    while (!this.isDead()) {
      this.player.attack(this._playerTwo);
      this._playerTwo.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
