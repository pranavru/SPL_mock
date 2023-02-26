var Chance = require('chance');

var chance = new Chance();

const mockPlayerData = () => ({
  "availability": chance.string(),
  "base_price": chance.string(),
  "batsman": chance.pickone([
    'Right Handed batsman', 
    'Left Handed Batsman'
  ]),
  "bowler": chance.pickone([
    'Right Arm Fast Medium',
    'Right Arm Spin',
    'Left Arm Fast Medium',
    'Left Arm Spin'
  ]),
  "city": chance.pickone([
    'Parsipanny',
    'Jersey city',
    'Clifton',
    'Edison',
    'Scranton',
    'Boston',
  ]),
  "email": chance.email(),
  "id": chance.hash(),
  "is_cap": chance.pickone(['YES', 'NO']),
  "is_debut": chance.pickone(['YES', 'NO']),
  "keeping": chance.bool(),
  "matches": chance.integer({
    min: 0,
    max: 50
  }),
  "name": chance.name(),
  "payment": chance.pickone(['YES', 'NO']),
  "phone_num": chance.phone(),
  "photo_url": chance.string(),
  "player_group": `${chance.character()}${chance.integer({
    min: 1,
    max: 3
  })}`,
  "priority": chance.integer({
    min: 1,
    max: 3
  }),
  "reference": chance.name(),
  "runs": chance.integer({
    min: 0,
    max: 50
  }),
  "skills": chance.pickone([
    "batsman",
    "bowler",
    "all_rounder"
  ]),
  "sold_price": chance.string(),
  "state": chance.string(),
  "status": chance.string(),
  "team_id": chance.hash(),
  "wickets": chance.integer({
    min: 0,
    max: 50
  }),
});

const getPlayers = async (options) => {
  var data = chance.n(mockPlayerData, 300),
    status = '200';

  return {
    status: status,
    data: data
  };  
};

module.exports = {
  getPlayers,
  mockPlayerData
};
