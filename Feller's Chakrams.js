WeaponsList["Chakram"] = {
name : "Chakram",
source : ["HB", 1],
regExpSearch : /Chakram/i,
type: "Martial",
ability : 2,
abilitytodamage : true,
damage : [1, 6, "slashing"],
range : "Melee, 20/60 ft",
description : "Finesse, light",
tooltip : "Chakrams return to me after they are thrown",
list : "melee",
modifiers : [0, "Prof"],
isMagicWeapon : true,
}
MagicItemsList["Chakrams"] = {
name : "Chakrams",
source : ["HB", 0],
type : "weapon",
rarity : "Uncommon",
attunement : false,
weight : 1,
description : "I add Dexterity to my To Hit. Chakrams return to me after they are thrown.",
descriptionLong : "Chakrams made to return after cutting tree branches."}
