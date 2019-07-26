export const PRODUCTS = [
  {
    id: 1,
    title: 'Ostre koło',
    desc:
      'venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit',
    img: '/static/photos/ostre.jpg',
    price: 1999.99,
  },
  {
    id: 2,
    title: '1 but',
    desc:
      'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
    img: '/static/photos/but.jpg',
    price: 99.99,
  },
  {
    id: 3,
    title: 'Fajna butelka',
    desc:
      'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac',
    img: '/static/photos/butelka.jpg',
    price: 25.99,
  },
  {
    id: 4,
    title: 'Mega szklanka',
    desc:
      'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
    img: '/static/photos/glass.jpg',
    price: 39,
  },
  {
    id: 5,
    title: 'Magic Keyboard',
    desc:
      'faucibus orci luctus et ultrices posuere cubilia curae donec pharetra',
    img: '/static/photos/klawiatura.jpg',
    price: 39.99,
  },
  {
    id: 6,
    title: 'Headphones H30',
    desc:
      'amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi',
    img: '/static/photos/sluchawki.jpg',
    price: 109.99,
  },
  {
    id: 7,
    title: 'Grape Smartwatch',
    desc: 'enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
    img: '/static/photos/smartwatch.jpg',
    price: 199.99,
  },
  {
    id: 8,
    title: 'Road Bike X99',
    desc: 'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed',
    img: '/static/photos/szosa.jpg',
    price: 3999.99,
  },
  {
    id: 9,
    title: 'Daniel Wellington',
    desc:
      'condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui',
    img: '/static/photos/zegarek.jpg',
    price: 1000,
  },
];

export const getProductById = id => {
  return PRODUCTS.find(product => product.id === Number(id));
};
