import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _type: EnergyType;
  private static _quantityRanger = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger._quantityRanger += 1;
  }

  get energyType():EnergyType {
    return this._type;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger._quantityRanger;
  }
}
export default Ranger;
