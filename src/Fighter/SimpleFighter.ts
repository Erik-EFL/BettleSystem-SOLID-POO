export default interface SimpleFighter {
  attack(enemy: SimpleFighter): void;
  lifePoints: number;
  receiveDamage(attackPoints: number): number;
  strength: number;
}
