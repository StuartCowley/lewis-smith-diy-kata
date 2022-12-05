const reachDestination = (distance, speed) => {
  let time = distance / speed;
  time = Math.round(time * 2) / 2;
  const message1 = `I should be there in ${time} hours.`;
  const message2 = `I should be there in ${time} hour.`;
  if (time === 1) {
    return message2;
  }
  return message1;
};

module.exports = reachDestination;
