// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows

function towerBreakers(n, m) {
    if(m ==1 || n%2 == 0){
        return 2
    } else {
        return 1
    }
}