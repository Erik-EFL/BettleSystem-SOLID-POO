import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addInstance();
  }

  static addInstance(): void {
    Ranger.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
