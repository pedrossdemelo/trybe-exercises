class Person {
  constructor(protected _name: string, protected _birthDate: Date) {
    if (_name.length > 3) this._name = _name;
    if (
      new Date().getFullYear() - _birthDate.getFullYear() < 120 &&
      new Date().getFullYear() - _birthDate.getFullYear() > 0
    )
      this._birthDate = _birthDate;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (name.length > 3) this._name = name;
  }

  get birthDate(): Date {
    return this.birthDate;
  }
  set birthDate(birthDate: Date) {
    if (
      new Date().getFullYear() - birthDate.getFullYear() < 120 &&
      new Date().getFullYear() - birthDate.getFullYear() > 0
    )
      this._birthDate = birthDate;
  }
}
