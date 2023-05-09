import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _quantityElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._quantityElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Elf._quantityElf;
  }
}
export default Elf;
