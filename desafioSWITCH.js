let nome = "Reaper"
let xp = 15000

const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

switch (true) {
    case xp <= 1000:
        console.log ("o nivel do héroi: " + nome + " é " + niveis [0]);
        break;

    case xp >= 1001 && xp <= 2000:
        console.log ("o nivel do héroi: " + nome + " é " +niveis [1]);
        break;

    case xp >= 2001 && xp <= 5000:
        console.log ("o nivel do héroi: " + nome +  " é " +niveis [2]);
        break;

    case xp >= 5001 && xp <= 7000:
        console.log ("o nivel do héroi: " + nome + " é " +niveis [3]);
        break;

    case xp >= 5001 && xp <= 8000:
        console.log ("o nivel do héroi: " + nome + " é " +niveis [4]);
        break;

    case xp >= 8001 && xp <= 9000:
        console.log ("o nivel do héroi: " + nome + " é " +niveis [5]);
        break;

    case xp >= 9001 && xp <= 10000:
        console.log ("o nivel do héroi: " + nome + " é " + niveis [6]);
        break;

    
    case xp >= 10001:
        console.log ("o nivel do héroi: " + nome + " é " + niveis [7]);
        break;
    }