var iFileName = "Homebrew Syntax - MidnightBlade.js";
WeaponsList["Midnight Blade"] = {
name : "Midnight Blade",
source : ["HB", 0],
regExpSearch : /^(?=.*Midnight)(?=.*Blade).*$/i,
type: "Martial",
ability : 2,
abilitytodamage : true,
damage : [1, 8, "slashing"],
range : "Melee",
description : "Finesse, light",
modifiers : [prof+dex+3, ""],
isMagicWeapon : true,
}
