const unsplash = (id: string, w: number, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: unsplash("1414235077428-338989a2e8c0", 1920),
  aboutInterior: unsplash("1550966871-3ed3cdb5ed0c", 900),
  aboutAccent: unsplash("1533777857889-4be7c70b33f7", 700),
  menu: [
    unsplash("1476224203421-9ac39bcb3327", 640),
    unsplash("1467003909585-2f8a72700288", 640),
    unsplash("1512621776951-a57141f2eefd", 640),
    unsplash("1551183053-bf91a1d81141", 640),
    unsplash("1571997478779-2adcbbe9ab2f", 640),
    unsplash("1595295333158-4742f28fbd85", 640),
  ],
  gallery: [
    unsplash("1555396273-367ea4eb4db5", 800),
    unsplash("1552566626-52f8b828add9", 800),
    unsplash("1481833761820-0509d3217039", 800),
    unsplash("1517248135467-4c7edcad34c4", 800),
    unsplash("1560624052-449f5ddf0c31", 800),
    unsplash("1592861956120-e524fc739696", 800),
  ],
};

export const avatar = (n: number) => `https://i.pravatar.cc/150?img=${n}`;
