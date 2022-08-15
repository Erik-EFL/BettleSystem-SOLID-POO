import Race from './Race';

export default class Dwarf extends Race {
  _maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addInstance();
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance(): void {
    Dwarf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instance;
  }
}
