//USANDO IF, ELSE IF
let nome = "Reaper"
let xp = 1500

const niveis = ["ferro", "bronze", "prata ouro", "platina diamante", "ascendente", "imortal", "radiante"]

if (xp <= 1000){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [0])

}
else if (xp => 1001 || xp <= 2000){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [1])
}
else if (xp => 2001 || xp <= 5000){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [2])
}
else if (xp => 5001 || xp <= 8000){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [3])
}
else if (xp => 8001 || xp <= 9000){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [4])
}
else if (xp => 9001 || xp <= 10000){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [5])
}
else if (xp => 10001){
    console.log ("o nivel do héroi: " + nome + " é " + niveis [6])
}