import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addInstance();
  }

  static addInstance(): void {
    Necromancer.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
