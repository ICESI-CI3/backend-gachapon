import { Weapon } from '../../weapon/schema/weapon.schema';

export const weaponSeed: Weapon[]=[
    {
        "_id": "1",
        "name":"Aqua Simulacra",
        "type":"BOW",
        "level":90,
        "subStats":"Daño CRIT",
        "effect":"Aumenta la vida en un 32%. Cuando haya algún enemigo cerca, el daño del personaje que lleva esta arma equipada aumenta en un 40%. Este efecto se puede activar cuando dicho personaje está en uso o cuando está en tu equipo pero no en combate.",
        "rarity":5,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/a/af/Arma_Aqua_Simulacra.png/revision/latest?cb=20220603025428&path-prefix=es"
    },
    {
        "_id": "2",
        "name":"Arco de Favonius",
        "type":"BOW",
        "level":90,
        "subStats":"Recarga de Energía",
        "effect":"Los Golpes CRIT tienen un 100% probabilidad de generar una pequeña cantidad de Partículas Elementales, que regenerarán 6 de Energía para el personaje. Solo puede ocurrir una vez cada 6 s.",
        "rarity":4,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/c/c7/Arma_Arco_de_Favonius.png/revision/latest?cb=20201223215002&path-prefix=es"
    },
    {
        "_id": "3",
        "name":"Juramento del Arquero",
        "type":"BOW",
        "level":90,
        "subStats":"Daño CRIT",
        "effect":"Aumenta el daño contra los puntos débiles en un 48%.",
        "rarity":3,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/a/a3/Arma_Juramento_del_Arquero.png/revision/latest?cb=20210114224205&path-prefix=es"
    },
    {
        "_id": "4",
        "name":"Cortador de Jade Primordial",
        "type":"SWORD",
        "level":90,
        "subStats":"Prob. CRIT",
        "effect":"Aumenta la Vida en un 40%. Además, el personaje que lleve esta arma equipada obtendrá un 2.4% de Bono de ATQ en proporción a su Vida Máx.",
        "rarity":5,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/0/0a/Arma_Cortador_de_Jade_Primordial.png/revision/latest?cb=20210204002207&path-prefix=es"
    },
    {
        "_id": "5",
        "name":"Espada de Favonius",
        "type":"SWORD",
        "level":90,
        "subStats":"Recarga de Energía",
        "effect":"Los Golpes CRIT tienen un 100% probabilidad de generar una pequeña cantidad de Partículas Elementales, que regenerarán 6 de Energía para el personaje. Solo puede ocurrir una vez cada 6 s.",
        "rarity":4,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/d/d6/Arma_Espada_de_Favonius.png/revision/latest?cb=20210411025630&path-prefix=es"
    },
    {
        "_id": "6",
        "name":"Espada Surcacielos",
        "type":"SWORD",
        "level":90,
        "subStats":"Recarga de Energía",
        "effect":"Al usar la Habilidad Definitiva, el ATQ y la Vel. Movimiento aumentaran en un 24%. Durante 15 s.",
        "rarity":3,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/0/0c/Arma_Espada_Surcacielos.png/revision/latest?cb=20210411030132&path-prefix=es"
    },
    {
        "_id": "7",
        "name":"Emblema del Mar de Juncos",
        "type":"CLAYMORE",
        "level":90,
        "subStats":"Prob. CRIT",
        "effect":"Tras golpear a un enemigo con una Habilidad Elemental, el ATQ aumenta en un 40% durante 8 s. Asimismo, cuando el personaje recibe daño, su ATQ aumenta en un 40% durante 8 s. Estos dos efectos se pueden activar incluso cuando el personaje está en tu equipo pero no en combate. Además, si el portador de esta arma no está bajo la protección de un escudo, su Vida Máx. aumenta en un 64%.",
        "rarity":5,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/0/00/Arma_Emblema_del_Mar_de_Juncos.png/revision/latest?cb=20230301174414&path-prefix=es"
    },
    {
        "_id": "8",
        "name":"Rey de los Mares",
        "type":"CLAYMORE",
        "level":90,
        "subStats":"Ataque",
        "effect":"Aumenta el daño infligido por la Habilidad Definitiva en un 24%. Cuando la Habilidad Definitiva golpea a un enemigo. hay una probabilidad del 100% de invocar unos atunes que atacan e infligen un Daño en el ME equivalente al 200% del ATQ. Este efecto solo se puede activar una vez cada 15 s.",
        "rarity":4,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/9/94/Arma_Rey_de_los_Mares.png/revision/latest?cb=20211007074709&path-prefix=es"
    },
    {
        "_id": "9",
        "name":"Garrote del Debate",
        "type":"CLAYMORE",
        "level":90,
        "subStats":"Ataque",
        "effect":"Después de usar una Habilidad Elemental, los Ataques Normales o Cargados infligirán un daño de ATQ adicional del 120% en un área pequeña durante 15s. Solo puede ocurrir una vez cada 3s.",
        "rarity":3,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/e/e4/Arma_Garrote_del_Debate.png/revision/latest?cb=20210411033443&path-prefix=es"
    },
    {
        "_id": "10",
        "name":"Axioma de la Kagura",
        "type":"CATALYST",
        "level":90,
        "subStats":"Daño CRIT",
        "effect":"Al usar la Habilidad Elemental, obtienes el efecto de \"danza kagura\", el cual aumenta en un 24% el daño de laHabilidad Elemental del personaje que equipa esta arma. Este efecto dura 16 s y puede acumularse hasta 3 veces. Al tener 3 acumulaciones, dicho personaje obtienen un 24% de todos los Bonos de Daño Elemental.",
        "rarity":5,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/7/78/Arma_Axioma_de_la_Kagura.png/revision/latest?cb=20220218154535&path-prefix=es"
    },
    {
        "_id": "11",
        "name":"Carta Náutica",
        "type":"CATALYST",
        "level":90,
        "subStats":"Maestría Elemental",
        "effect":"La activación de una Reacción Elemental otorga un 16% adicional de Daño Elemental durante 10 s, y puede acumularse hasta 2 veces.",
        "rarity":4,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/1/10/Arma_Carta_N%C3%A1utica.png/revision/latest?cb=20210411021048&path-prefix=es"
    },
    {
        "_id": "12",
        "name":"Cuentos de Cazadores de Dragones",
        "type":"CATALYST",
        "level":90,
        "subStats":"Vida",
        "effect":"Al cambiar de personaje, el ATQ del nuevo personaje aumenta en un 48% durante 10s. Este efecto ocurre una vez cada 20s.",
        "rarity":3,
        "img":"https://static.wikia.nocookie.net/gen-impact/images/3/3f/Arma_Cuentos_de_Cazadores_de_Dragones.png/revision/latest?cb=20210411020920&path-prefix=es"
    }
];
