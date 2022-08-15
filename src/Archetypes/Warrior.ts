import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addInstance();
  }

  static addInstance(): void {
    Warrior.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
