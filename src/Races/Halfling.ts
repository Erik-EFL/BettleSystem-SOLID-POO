import Race from './Race';

export default class Halfling extends Race {
  _maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.addInstance();
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance(): void {
    Halfling.instance += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instance;
  }
}
