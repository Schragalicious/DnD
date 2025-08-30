var iFileName = "Sword of Karstag";
WeaponsList["Sword of Karstag"] = {
name : "Sword of Karstag",
source : ["HB", 1],
regExpSearch : /Sword of Karstag/i,
type: "Martial",
ability : 1,
abilitytodamage : true,
damage : [2, 8, "slashing"],
range : "Melee",
description : "Martial, Versatile",
tooltip : "You have a +2 on attack rolls for this Magic Weapon.",
"This weapon has 3 charges. When you roll a critical hit, you can expend a charge to deal an additional damage die of damage. The weapon regains 1d3 expended charges at dawn.",
"As a Bonus Action, You can activate the Sword of Karstag's Wrath. For 1 minute, the sword emits an aura of power, shedding dim light in a 10-foot radius. While the aura is active, you gain the following benefits:",
"Whenever you hit a creature with an attack using the sword, they must make a DC 18 Constitution saving throw or be stunned until the start of your next turn.",
"After the Sword of Karstag’s Wrath ends, it cannot be used until after 1d6 days.",
list : "melee",
modifiers : [2,"2"],
isMagicWeapon : true,
}
MagicItemsList["Booming Hammer"] = {
name : "Booming Hammer",
source : ["HB", 0],
type : "weapon",
rarity : "artifact",
attunement : true,
weight : 7,
description : "I have a +2 to hit with this magical hammer. I have a +2 on attack rolls for this Magic Weapon. his weapon has 7 charges. When you hit with an attack using this weapon, you can use a bonus action and expend a charge to deal an additional 3d8 force damage to the target, or you can expend 2 charges to force each other creature within 15 feet line of you to make a DC 15 Constitution saving throw. On a failed save, a creature takes 2d12 thunder damage",
}
