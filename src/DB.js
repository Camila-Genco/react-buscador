const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'The Catcher in the Rye',
    genre: 'coming-of-age',
    image:
    'https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg',
    price: 8.93,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: '1984',
    genre: 'science fiction',
    image:
    'https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg?resize=500%2C815&ssl=1',
    price: 7.48,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'The Spanish Love Deception',
    genre: 'romance',
    image:
    'https://m.media-amazon.com/images/I/61PfPLFZ+CL.jpg',
    price: 9.69,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'Dracula',
    genre: 'horror',
    image:
    'https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/62545414f3a6fb9f5d120730_6034d7d1f3e0f55ec6b2b1da_Dracula-bram-stocker-editorial-alma.jpeg',
    price: 7.69,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'Dune',
    genre: 'science fiction',
    image:
      'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677885.jpg',
    price: 12.01,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'The Love Hypothesis',
    genre: 'romance',
    image:
      'https://m.media-amazon.com/images/I/81kGXZeqYLL.jpg',
    price: 10.70,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'It',
    genre: 'horror',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334416842i/830502.jpg',
    price: 17.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'Little Women',
    genre: 'coming-of-age',
    image:
      'https://i.pinimg.com/originals/df/f9/b1/dff9b167d16a84b32bde5ebc13b22172.jpg',
    price: 8.99,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'The Girl on the Train',
    genre: 'thriller',
    image:
      'https://upload.wikimedia.org/wikipedia/en/5/50/The_Girl_On_The_Train_%28US_cover_2015%29.png',
    price: 10.33,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'Gone Girl',
    genre: 'thriller',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg',
    price: 12.94,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'Things We Never Got Over',
    genre: 'romance',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDo7-lX_NSAHRoCKl94hrXVkcdOKje2VqBEZur2bNxoi7Ne7a',
    price: 10.95,
  },
  {
    id: 'recyqtRglGNGopfO4Q5',
    title: 'The Lord of the Rings',
    genre: 'fantasy',
    image:
      'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg',
    price: 14.00,
  },
  {
    id: 'recioyqtRglGNGopfO4Q5',
    title: 'Pride and Prejudice',
    genre: 'romance',
    image:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159631.jpg',
    price: 15.19,
  },
  {
    id: 'recioyqtRglGNOPopfO4Q5',
    title: 'The Name of the Wind',
    genre: 'fantasy',
    image:
      'https://images.cdn3.buscalibre.com/fit-in/360x360/04/f8/04f8efa67ba5f8a337cdcf201a12d875.jpg',
    price: 9.89,
  },
  {
    id: 'recioyq98tRglGNOPopfO4Q5',
    title: 'The Bell Jar',
    genre: 'coming-of-age',
    image:
      'https://images.squarespace-cdn.com/content/v1/53efbdb8e4b0a6d42412cb58/1408978870263-ZBS4YB6ZWWRJDQG1QK25/thebelljar.jpeg',
    price: 13.99,
  },
  {
    id: 'recioyooiq98tRglGNOPopfO4Q5',
    title: 'To Kill a Mockingbird',
    genre: 'coming-of-age',
    image:
      "https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg",
    price: 8.89,
  },
  {
    id: 're90cioyooiq98tRglGNOPopfO4Q5',
    title: 'Frankenstein',
    genre: 'horror',
    image:
      "https://mpd-biblio-covers.imgix.net/9781466804807.jpg",
    price: 5.99,
  },
  {
    id: 're90cioyooiq0098tRglGNOPopfO4Q5',
    title: "Ender's Game",
    genre: 'science fiction',
    image:
      "https://images.booksense.com/images/084/932/9780312932084.jpg",
    price: 13.49,
  },
  {
    id: 're8ciojduyjdjdooiq0098tRglGNOPopfO4Q5',
    title: "The Da Vinci Code",
    genre: 'thriller',
    image:
      "https://productimages.worldofbooks.com/0552154016.jpg",
    price: 7.49,
  },
  {
    id: 're8cioyooiq0098tRglGNOPopfO4Q5',
    title: "Brave New World",
    genre: 'science fiction',
    image:
      "https://m.media-amazon.com/images/I/71aDrgLp9CL._AC_UF1000,1000_QL80_.jpg",
    price: 11.47,
  },
  {
    id: 're8chyioyooiq0098tRglGNOPopfO4Q5',
    title: "Six of Crows",
    genre: 'fantasy',
    image:
      "https://hachette.imgix.net/books/9781780622286.jpg?auto=compress",
    price: 7.99,
  },
  {
    id: 'rije8chyioyooiq0098tRglGNOPopfO4Q5',
    title: "A Court of Thorns and Roses",
    genre: 'fantasy',
    image:
      "http://1.bp.blogspot.com/-yD7xRcY2zJw/VFH7_gagB1I/AAAAAAAABIg/LSAU5VdtAo0/s1600/77113_original.jpg",
    price: 10.37,
  },
];

export default products;
