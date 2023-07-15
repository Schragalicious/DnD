ArmourList["Bladeshield"] = {
name : "Bladeshield",
source : ["HB", 1],
regExpSearch : /Bladeshield/i,
ac : 12,
type : "heavy",
list : "magic",
}
WeaponsList["Bladeshield"] = {
name : "Bladeshield",
source : ["HB", 1],
regExpSearch : /Bladeshield/i,
type: "Martial",
ability : 1,
abilitytodamage : true,
damage : [1, 10, "slashing"],
range : "Melee, 20/60 ft",
description : "Thrown, Heavy",
tooltip : "Bladeshield can lodge into targets",
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
description : "I add Strength to my To Hit. Bladeshield can lodge into targets.",
descriptionLong : "Bladeshield used to cut trees. It can lodge into targets."}
