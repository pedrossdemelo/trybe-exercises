const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength - 15) + 15);

const getWarriorDamage = (warrior) => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);

const getMageDamage = (mage) => {
  const damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence);
  const manaCost = 15;
  if (mage.mana < manaCost) {
    return {
      damage: 'Não possui mana suficiente',
      mana: mage.mana,
    };
  }
  return {
    damage: damage,
    mana: mage.mana - manaCost,
  };
}

// Part II

const gameActions = {
  
};