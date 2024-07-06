let fighters = ["🐉", "🐥", "🐊",
"💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageOp = document.getElementById("stage")
let fightOp = document.getElementById("fightButton")

function fight(){
    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    stageOp.textContent = fighters[randomIndexOne] + "   vs   " + fighters[randomIndexTwo]
}