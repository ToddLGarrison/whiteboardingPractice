const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    let bestTeam = "";
    let scores = {[bestTeam]: 0};

    for (let i = 0; i < competitions.length; i++) {
        const result = results[i]
        const [homeTeam, awayTeam] = competitions[i]

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[bestTeam]) {
            bestTeam = winningTeam;
        }
    }

    return bestTeam
}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0

    scores[team] += points
}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

let results = [0 ,0 , 1]

console.log(tournamentWinner(competitions, results))