import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _archetype: Archetype;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number;
  private _maxLifePoints: number;
  private _name: string;
  private _race: Race;
  private _strength: number;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get archetype() { return this._archetype; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy() { return { ...this._energy }; }
  get lifePoints() { return this._lifePoints; }
  get name() { return this._name; }
  get race() { return this._race; }
  get strength() { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const defense = this._defense;
    const damage = attackPoints - defense;
    let actualLifePoints = this._lifePoints;
    if (damage > 0) actualLifePoints -= damage;
    if (actualLifePoints <= 0) actualLifePoints = -1;
    return actualLifePoints;
  }

  attack(enemy: Fighter): void {
    const attack = this._strength;
    enemy.receiveDamage(attack);
  }

  levelUp(): void {
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special() {
    const randomValue = getRandomInt(1, 5);
    const increaseDamage = this._strength + randomValue;
    let newLifePoints = this._lifePoints;
    newLifePoints -= increaseDamage;
    return newLifePoints;
  }
}
