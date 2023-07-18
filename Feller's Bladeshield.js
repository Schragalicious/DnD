ArmourList["Bladeshield"] = {
name : "Bladeshield",
source : ["HB", 1],
regExpSearch : /Bladeshield/i,
ac : 11,
type : "Shield",
list : "magic",
}
WeaponsList["Bladeshield"] = {
name : "Bladeshield",
source : ["HB", 1],
regExpSearch : /Bladeshield/i,
type: "Martial",
ability : 1,
abilitytodamage : true,
damage : [1, 8, "slashing"],
range : "Melee, 20/60 ft",
description : "Thrown, Martial",
tooltip : "Bladeshield can lodge into targets. As a reaction, if an opponent misses my AC by 5, I can counter-attack with the shield. Twice per Long Rest",
list : "melee",
modifiers : [0, "Prof"],
isMagicWeapon : true,
}
MagicItemsList["Bladeshield"] = {
name : "Bladeshield",
source : ["HB", 0],
type : "weapon",
rarity : "Uncommon",
attunement : false,
weight : 1,
description : "I add Strength to my To Hit. Bladeshield can lodge into targets. As a reaction, if an opponent misses my AC by 5, I can counter-attack with the shield. Twice per Long Rest",
descriptionLong : "Bladeshield used to cut trees. It can lodge into targets."}
