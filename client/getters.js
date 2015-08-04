const players = ['players'];

const lineupPlayers = [
  ['players'],
  ['lineup', 'playerSalary'],
  (players, playerSalary) => {
    return playerSalary.map((salary, playerId) => {
      var player = players.get(playerId);
      return player
        .set('inLineup', true)
        .remove('display'); // display shouldn't be known in cart
    }).toList();
  }
];

const lineupSalaryTotal = [
  lineupPlayers,
  (players) => {
    const total = players.reduce((total, player) => {
      return total + player.get('salary');
    }, 0) || 0;
    return total.toFixed(2);
  }
];

export default { players, lineupPlayers, lineupSalaryTotal };
