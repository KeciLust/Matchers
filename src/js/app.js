export default function comparisonHealth(item) {
  const itemHealth = Object.values(item).sort((a, b) => b.health - a.health);

  return itemHealth;
}
