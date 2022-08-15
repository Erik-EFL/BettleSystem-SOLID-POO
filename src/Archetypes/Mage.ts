import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addInstance();
  }

  static addInstance(): void {
    Mage.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
