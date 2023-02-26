const Chance = require('chance')
const players = require('./players')

const chance = new Chance();

const getTeam = () => ({
  "balance": chance.integer({
    min: 0,
    max: 25000
  }),
  "captain": chance.name(),
  "id": chance.hash(),
  "name": chance.name(),
  "num_of_players": chance.integer({
    min: 0,
    max: 15
  }),
  "players": chance.n(players.mockPlayerData, 13),
  "team_group": chance.word(),
  "team_zone": chance.pickone(['All', 'Zone 1', 'Zone 2', 'Zone 3']),
  "vice_captain": chance.name()
})

const getTeams = async (options) => {
  var data = chance.n(getTeam, 20),
    status = '200';

  return {
    status: status,
    data: data
  };  
};

module.exports = {
  getTeam, 
  getTeams
};
