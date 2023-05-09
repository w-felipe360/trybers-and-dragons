import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _type: EnergyType;
  private static _quantityMage = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Mage._quantityMage += 1;
  }

  get energyType():EnergyType {
    return this._type;
  }
  
  static createdArchetypeInstances(): number {
    return Mage._quantityMage;
  }
}
export default Mage;
