import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, private playerTwo: Fighter) {
    super(player);
  }

  isDead(): boolean {
    return this.player.lifePoints === -1 || this.playerTwo.lifePoints === -1;
  }

  override fight(): number {
    while (!this.isDead()) {
      this.player.attack(this.playerTwo);
      this.playerTwo.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
