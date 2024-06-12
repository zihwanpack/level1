function solution(bandage, health, attacks) {
  const [coolTime, healTick, additHeal] = bandage;
  let curTime = 0;
  let curHealth = health;
  let result = curHealth;

  attacks.forEach(([attackTime, damage]) => {
    if (result <= 0) return;
    const attackDelay = attackTime - curTime - 1;
    const additHealCount = Math.floor(attackDelay / coolTime);
    result += additHealCount * additHeal + attackDelay * healTick;
    if (result > health) result = health;
    result -= damage;
    if (result <= 0) result = -1;
    curTime = attackTime;
  });

  return result;
}
