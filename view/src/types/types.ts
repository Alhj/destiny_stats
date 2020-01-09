export interface respons {
  statusCode: number
  message:string
  characters: characters[]
}

export interface characters {
  emblemBackgroundPath:string
  classType:number
  light:number
}

export interface allCharacters {
  pve:allPvP
  pvp:allPvP
}

export interface charactersStats {
  characterId: string
  deleted: boolean
  result: allPvP
}

interface allPvP {
  activitiesEntered:activitiesEnteredStats
  weaponKillsAutoRifle: weaponKillsStats
  weaponKillsFusionRifle: weaponKillsStats
  weaponKillsGrenade:weaponKillsStats
  weaponKillsGrenadeLauncher: weaponKillsStats
  weaponKillsHandCannon: weaponKillsStats
  weaponKillsTraceRifle: weaponKillsStats
  weaponKillsMachineGun:weaponKillsStats
  weaponKillsMelee:weaponKillsStats
  weaponKillsPulseRifle:weaponKillsStats
  weaponKillsRocketLauncher:weaponKillsStats
  weaponKillsScoutRifle:weaponKillsStats
  weaponKillsShotgun:weaponKillsStats
  weaponKillsSniper:weaponKillsStats
  weaponKillsSubmachinegun:weaponKillsStats
  weaponKillsSuper:weaponKillsStats
  weaponKillsSideArm:weaponKillsStats
  weaponKillsSword:weaponKillsStats
  weaponKillsRelic:weaponKillsStats
  weaponKillsBow:weaponKillsStats
}

 interface activitiesEnteredStats {
    statId:string
    basic: {
      value:number,
      displayValue:string
    }
 }

 interface weaponKillsStats {
  statsId:string
  basic:weaponsStatsBasic
}

interface weaponsStatsBasic {
  value: string
  displayValue: string
}