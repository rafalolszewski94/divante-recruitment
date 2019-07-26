export const PRODUCTS = [
  {
    id: 1,
    title: 'Mushroom - Lg - Cello',
    desc:
      'venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit',
    img: 'http://dummyimage.com/220x220.png/5fa2dd/ffffff',
    price: 19.99,
  },
  {
    id: 2,
    title: 'Quail - Jumbo Boneless',
    desc:
      'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
    img: 'http://dummyimage.com/220x220.png/ff4444/ffffff',
    price: 14.99,
  },
  {
    id: 3,
    title: 'Asparagus - Frozen',
    desc:
      'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac',
    img: 'http://dummyimage.com/220x220.png/dddddd/000000',
    price: 2.49,
  },
  {
    id: 4,
    title: 'Chinese Lemon Pork',
    desc:
      'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
    img: 'http://dummyimage.com/220x220.png/cc0000/ffffff',
    price: 39,
  },
  {
    id: 5,
    title: 'Container - Hngd Cll Blk 7x7x3',
    desc:
      'faucibus orci luctus et ultrices posuere cubilia curae donec pharetra',
    img: 'http://dummyimage.com/220x220.png/cc0000/ffffff',
    price: 3,
  },
  {
    id: 6,
    title: 'Melon - Watermelon, Seedless',
    desc:
      'amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi',
    img: 'http://dummyimage.com/220x220.png/5fa2dd/ffffff',
    price: 10.99,
  },
  {
    id: 7,
    title: 'Tobasco Sauce',
    desc: 'enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
    img: 'http://dummyimage.com/220x220.png/ff4444/ffffff',
    price: 1.99,
  },
  {
    id: 8,
    title: 'Edible Flower - Mixed',
    desc: 'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed',
    img: 'http://dummyimage.com/220x220.png/5fa2dd/ffffff',
    price: 1.99,
  },
  {
    id: 9,
    title: 'Bread - White, Sliced',
    desc:
      'condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui',
    img: 'http://dummyimage.com/220x220.png/ff4444/ffffff',
    price: 0.99,
  },
  {
    id: 10,
    title: 'Ice Cream - Super Sandwich',
    desc:
      'odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla',
    img: 'http://dummyimage.com/220x220.png/5fa2dd/ffffff',
    price: 8.99,
  },
  {
    id: 11,
    title: 'Peppercorns - Green',
    desc:
      'purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac',
    img: 'http://dummyimage.com/220x220.png/5fa2dd/ffffff',
    price: 3.99,
  },
  {
    id: 12,
    title: 'Tendrils - Baby Pea, Organic',
    desc:
      'nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
    img: 'http://dummyimage.com/220x220.png/cc0000/ffffff',
    price: 5.99,
  },
  {
    id: 13,
    title: 'Wine - Segura Viudas Aria Brut',
    desc:
      'mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies',
    img: 'http://dummyimage.com/220x220.png/dddddd/000000',
    price: 11.99,
  },
  {
    id: 14,
    title: 'Bread - Pumpernickle, Rounds',
    desc:
      'phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in',
    img: 'http://dummyimage.com/220x220.png/ff4444/ffffff',
    price: 7.99,
  },
  {
    id: 15,
    title: 'Bread - Assorted Rolls',
    desc:
      'convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in',
    img: 'http://dummyimage.com/220x220.png/cc0000/ffffff',
    price: 9.99,
  },
];

export const getProductById = id => {
  return PRODUCTS.find(product => product.id === Number(id));
};
