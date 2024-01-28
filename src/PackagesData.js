const packages = [
    {
      id: '1',
      src: 'destination1.jpg',
      src2: 'dubai.jpg',
      srcDay1: 'burj.jpg',
      srcDay2: 'ancient.jpg',
      srcDay3: 'desert.jpg',
      srcDay4: 'shops.jpg',
      text: "Explore the beautiful beaches and vibrant culture of this glamorous City.",
      short1: "Explore the City",
      description1: `
      Visit the iconic Burj Khalifa. Book tickets in advance to skip the lines.
      Head to the Dubai Mall, adjacent to Burj Khalifa. Explore the mall, shop, and have lunch.
      Witness the captivating Dubai Fountain show just outside the mall.
      `,
      short2: "Historical Dubai",
      description2: `
      Visit the Dubai Museum in Al Fahidi Fort to learn about the city's history.
      Explore the Al Fahidi Historic District. Wander through the narrow lanes and visit art galleries and museums.
      Take an abra (traditional boat) ride along Dubai Creek. Explore the Spice and Gold Souks.
      `,
      short3: "Desert Adventure",
      description3: `
      Take a morning desert safari for a thrilling experience on the sand dunes.
      Visit the Dubai Miracle Garden (seasonal), a beautiful flower garden.
      Enjoy a traditional Bedouin-style dinner at a desert camp with cultural performances.
      `,
      short4: "Beach Day and Shopping",
      description4: `
      Relax at Jumeirah Beach or Kite Beach. You can also explore the Dubai Marina Walk.
      Visit the Mall of the Emirates for shopping and indoor skiing at Ski Dubai.
      Explore the vibrant nightlife at JBR (Jumeirah Beach Residences).
      `,
      label: 'Luxury',
      path: '/services',
      city: 'DUBAI',
      price: '1000$',
    },
    {
    id: '2',
    src: 'destination2.jpg',
    src2: 'istanbul.jpg',
    srcDay1: 'burj.jpg',
    srcDay2: 'ancient.jpg',
    srcDay3: 'desert.jpg',
    srcDay4: 'shops.jpg',
    text: 'Discover the historic landmarks and delicious cuisine of historic masterpiece.',
    short1: "Explore the City",
    description1: `
    Visit the iconic Burj Khalifa. Book tickets in advance to skip the lines.
    Head to the Dubai Mall, adjacent to Burj Khalifa. Explore the mall, shop, and have lunch.
    Witness the captivating Dubai Fountain show just outside the mall.
    `,
    short2: "Historical Dubai",
    description2: `
    Visit the Dubai Museum in Al Fahidi Fort to learn about the city's history.
    Explore the Al Fahidi Historic District. Wander through the narrow lanes and visit art galleries and museums.
    Take an abra (traditional boat) ride along Dubai Creek. Explore the Spice and Gold Souks.
    `,
    short3: "Desert Adventure",
    description3: `
    Take a morning desert safari for a thrilling experience on the sand dunes.
    Visit the Dubai Miracle Garden (seasonal), a beautiful flower garden.
    Enjoy a traditional Bedouin-style dinner at a desert camp with cultural performances.
    `,
    short4: "Beach Day and Shopping",
    description4: `
    Relax at Jumeirah Beach or Kite Beach. You can also explore the Dubai Marina Walk.
    Visit the Mall of the Emirates for shopping and indoor skiing at Ski Dubai.
    Explore the vibrant nightlife at JBR (Jumeirah Beach Residences).
    `,
    label: 'Sightseeing',
    path: '/services',
    city: 'ISTANBUL',
    price: '500$',
    },
    {
    id: '3',
    src: 'destination3.jpg',
    src2: 'maldives.jpg',
    srcDay1: 'burj.jpg',
    srcDay2: 'ancient.jpg',
    srcDay3: 'desert.jpg',
    srcDay4: 'shops.jpg',
    text: 'Experience the natural beauty and adventure activities on multiple Islands.',
    short1: "Explore the City",
    description1: `
    Visit the iconic Burj Khalifa. Book tickets in advance to skip the lines.
    Head to the Dubai Mall, adjacent to Burj Khalifa. Explore the mall, shop, and have lunch.
    Witness the captivating Dubai Fountain show just outside the mall.
    `,
    short2: "Historical Dubai",
    description2: `
    Visit the Dubai Museum in Al Fahidi Fort to learn about the city's history.
    Explore the Al Fahidi Historic District. Wander through the narrow lanes and visit art galleries and museums.
    Take an abra (traditional boat) ride along Dubai Creek. Explore the Spice and Gold Souks.
    `,
    short3: "Desert Adventure",
    description3: `
    Take a morning desert safari for a thrilling experience on the sand dunes.
    Visit the Dubai Miracle Garden (seasonal), a beautiful flower garden.
    Enjoy a traditional Bedouin-style dinner at a desert camp with cultural performances.
    `,
    short4: "Beach Day and Shopping",
    description4: `
    Relax at Jumeirah Beach or Kite Beach. You can also explore the Dubai Marina Walk.
    Visit the Mall of the Emirates for shopping and indoor skiing at Ski Dubai.
    Explore the vibrant nightlife at JBR (Jumeirah Beach Residences).
    `,
    label: 'Relax',
    path: '/services',
    city: 'MALDIVES',
    price: '200$',
    },
    {
    id: '4',
    src: 'destination4.jpg',
    src2: 'porto.jpg',
    srcDay1: 'burj.jpg',
    srcDay2: 'ancient.jpg',
    srcDay3: 'desert.jpg',
    srcDay4: 'shops.jpg',
    text: 'Discover the timeless beauty historic architecture and scenic riverfront.',
    short1: "Explore the City",
    description1: `
    Visit the iconic Burj Khalifa. Book tickets in advance to skip the lines.
    Head to the Dubai Mall, adjacent to Burj Khalifa. Explore the mall, shop, and have lunch.
    Witness the captivating Dubai Fountain show just outside the mall.
    `,
    short2: "Historical Dubai",
    description2: `
    Visit the Dubai Museum in Al Fahidi Fort to learn about the city's history.
    Explore the Al Fahidi Historic District. Wander through the narrow lanes and visit art galleries and museums.
    Take an abra (traditional boat) ride along Dubai Creek. Explore the Spice and Gold Souks.
    `,
    short3: "Desert Adventure",
    description3: `
    Take a morning desert safari for a thrilling experience on the sand dunes.
    Visit the Dubai Miracle Garden (seasonal), a beautiful flower garden.
    Enjoy a traditional Bedouin-style dinner at a desert camp with cultural performances.
    `,
    short4: "Beach Day and Shopping",
    description4: `
    Relax at Jumeirah Beach or Kite Beach. You can also explore the Dubai Marina Walk.
    Visit the Mall of the Emirates for shopping and indoor skiing at Ski Dubai.
    Explore the vibrant nightlife at JBR (Jumeirah Beach Residences).
    `,
    label: 'Nature',
    path: '/services',
    city: 'PORTO',
    price: '1200$',
    },
    {
    id: '5',
    src: 'destination5.jpg',
    src2: 'edinburgh.jpg',
    srcDay1: 'burj.jpg',
    srcDay2: 'ancient.jpg',
    srcDay3: 'desert.jpg',
    srcDay4: 'shops.jpg',
    text: 'Cobblestone streets, iconic castle, and festivals. Enchanting Scottish adventure.',
    short1: "Explore the City",
    description1: `
    Visit the iconic Burj Khalifa. Book tickets in advance to skip the lines.
    Head to the Dubai Mall, adjacent to Burj Khalifa. Explore the mall, shop, and have lunch.
    Witness the captivating Dubai Fountain show just outside the mall.
    `,
    short2: "Historical Dubai",
    description2: `
    Visit the Dubai Museum in Al Fahidi Fort to learn about the city's history.
    Explore the Al Fahidi Historic District. Wander through the narrow lanes and visit art galleries and museums.
    Take an abra (traditional boat) ride along Dubai Creek. Explore the Spice and Gold Souks.
    `,
    short3: "Desert Adventure",
    description3: `
    Take a morning desert safari for a thrilling experience on the sand dunes.
    Visit the Dubai Miracle Garden (seasonal), a beautiful flower garden.
    Enjoy a traditional Bedouin-style dinner at a desert camp with cultural performances.
    `,
    short4: "Beach Day and Shopping",
    description4: `
    Relax at Jumeirah Beach or Kite Beach. You can also explore the Dubai Marina Walk.
    Visit the Mall of the Emirates for shopping and indoor skiing at Ski Dubai.
    Explore the vibrant nightlife at JBR (Jumeirah Beach Residences).
    `,
    label: 'City break',
    path: '/services',
    city: 'EDINBURGH',
    price: '1000$',
    },
    ];

    export default packages;