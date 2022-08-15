import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addInstance();
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance(): void {
    Elf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instance;
  }
}
