import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _type: EnergyType;
  private static _quantityNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer._quantityNecromancer += 1;
  }

  get energyType():EnergyType {
    return this._type;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer._quantityNecromancer;
  }
}
export default Necromancer;
