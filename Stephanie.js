/**/

WeaponsList["Khopesh of Sand"] = {
name : "Khopesh of Sand",
source : ["HB", 1],
regExpSearch : /Khopesh of Sand/i,
type: "Martial",
ability : 2,
abilitytodamage : true,
damage : [2, 6, "slashing"],
range : "Melee",
description : "Finesse, light",
tooltip : "I have a +2 on attack rolls for this Magic Weapon. If in one attack you do half enemy max health, it turns to sand.",
list : "melee",
modifiers : [2, 2],
isMagicWeapon : true,
}
MagicItemsList["Khopesh of Sand"] = {
name : "Khopesh of Sand",
source : ["HB", 0],
type : "weapon",
rarity : "Rare",
attunement : true,
weight : 7,
description : "I have a +2 on attack rolls for this Magic Weapon. If in one attack you do half enemy max health, it turns to sand.",
descriptionLong : "Golden Blade with Dunes across its blade."}

/**/

WeaponsList["The Flametongue"] = {
name : "The Flametongue",
source : ["HB", 1],
regExpSearch : /The Flametongue/i,
type: "Simple",
ability : 4,
abilitytodamage : true,
damage : [10, 8, "fire"],
range : "100 ft",
description : "Finesse, light",
tooltip : "Enemies make a Dex save throw against this wand. 10d8 Fire on a Fail, half on a Save.",
list : "ranged",
modifiers : ["dc Prof+Int", 0],
isMagicWeapon : true,
}
MagicItemsList["The Flametongue"] = {
name : "The Flametongue",
source : ["HB", 0],
type : "weapon",
rarity : "Rare",
attunement : true,
weight : 1,
description : "Enemies make a Dex save throw against this wand. 10d8 Fire on a Fail, half on a Save.",
descriptionLong : "Flamethrower Wand."}

/**/

WeaponsList["Kunai of Teleportation"] = {
name : "Kunai of Teleportation",
source : ["HB", 1],
regExpSearch : /Kunai of Teleportation/i,
type: "Martial",
ability : 2,
abilitytodamage : true,
damage : [1, 4, "piercing"],
range : "Melee 20/60 ft",
description : "Finesse, light",
tooltip : "I can teleport to wherever this weapon lands, assuming it pierces into something.",
list : "melee",
modifiers : ["Dex", 0],
isMagicWeapon : true,
}
MagicItemsList["Kunai of Teleportation"] = {
name : "Kunai of Teleportation",
source : ["HB", 0],
type : "weapon",
rarity : "Rare",
attunement : true,
weight : 3,
description : "I can teleport to wherever this weapon lands, assuming it pierces into something.",
descriptionLong : "Kunai with a purple handle and half crescent pommel."}

/**/

MagicItemsList["Three-Layer Compass"] = {
name : "Three-Layer Compass",
source : ["HB", 0],
type : "tool",
rarity : "Rare",
attunement : false,
weight : 3,
description : "This compass has three layers: Top Layer = Desire, Middle Layer = Quest, Bottom Layer = North.",
descriptionLong : "Bronze-Trimmed compass."}

