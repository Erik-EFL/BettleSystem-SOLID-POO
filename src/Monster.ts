import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  receiveDamage(attackPoints: number) {
    const damage = this._lifePoints - attackPoints;
    const newLifePoints = damage > 0
      ? damage
      : -1;
    this._lifePoints = newLifePoints;
    return newLifePoints;
  }

  attack(enemy: SimpleFighter) {
    const damage = this._strength;
    return enemy.receiveDamage(damage);
  }
}
