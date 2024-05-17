export type AboutCoworkingType = {
  icon: string
  value: string
}

export type SpaceType = {
  colClass: string
  imageSrc: string
  thumbnailSrc: string
  alt: string
}

export type PricingType = {
  name: string
  price: string
  frequency: string
  description: string
}

export type testiminialCoworkingType = {
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

export const aboutCoworking: AboutCoworkingType[] = [
  {
    icon: 'ai-space',
    value: '362 m²',
  },
  {
    icon: 'ai-shower',
    value: '5 showers',
  },
  {
    icon: 'ai-clock',
    value: '24/7 acces',
  },
  {
    icon: 'ai-parking',
    value: '2 parkings',
  },
  {
    icon: 'ai-stairs',
    value: '3 floors',
  },
  {
    icon: 'ai-canteen',
    value: '2 cafes',
  },
]

export const ourSpace: SpaceType[] = [
  {
    colClass: 'col-sm-5',
    imageSrc: 'assets/img/landing/coworking-space/gallery/01.jpg',
    thumbnailSrc: 'assets/img/landing/coworking-space/gallery/th01.jpg',
    alt: 'Open space',
  },
  {
    colClass: 'col-sm-7',
    imageSrc: 'assets/img/landing/coworking-space/gallery/02.jpg',
    thumbnailSrc: 'assets/img/landing/coworking-space/gallery/th02.jpg',
    alt: 'Kitchen',
  },
  {
    colClass: 'col-sm-4',
    imageSrc: 'assets/img/landing/coworking-space/gallery/03.jpg',
    thumbnailSrc: 'assets/img/landing/coworking-space/gallery/th03.jpg',
    alt: 'Lounge zone',
  },
  {
    colClass: 'col-sm-3',
    imageSrc: 'assets/img/landing/coworking-space/gallery/04.jpg',
    thumbnailSrc: 'assets/img/landing/coworking-space/gallery/th04.jpg',
    alt: 'Open space',
  },
  {
    colClass: 'col-sm-5',
    imageSrc: 'assets/img/landing/coworking-space/gallery/05.jpg',
    thumbnailSrc: 'assets/img/landing/coworking-space/gallery/th05.jpg',
    alt: 'Cafe',
  },
]

export const pricingSpace: PricingType[] = [
  {
    name: 'Light',
    price: '8',
    frequency: 'per day',
    description:
      'Phasellus in hendrerit interdum lorem proin pretium dictum urna',
  },
  {
    name: 'Pro',
    price: '97',
    frequency: 'per month',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim aucibus',
  },
  {
    name: 'Medium',
    price: '36',
    frequency: 'per week',
    description:
      'Enim aenean phasellus in hendrerit interdum lorem proin pretium',
  },
]

export const testiminialCoworking: testiminialCoworkingType[] = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, a vulputate dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut luctus molestie massa sit amet dapibus. Cras pulvinar lacinia sollicitudin malesuada vestibulum.',
    author: {
      name: 'Jenny Wilson',
      role: 'Head of Marketing',
      avatar: 'assets/img/avatar/30.jpg',
    },
  },
  {
    content:
      'Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa.',
    author: {
      name: 'Esther Howard',
      role: 'CEO, Co-Founder',
      avatar: 'assets/img/avatar/31.jpg',
    },
  },
  {
    content:
      'Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra. Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris.',
    author: {
      name: 'Nick Wenirten',
      role: 'Web Developer',
      avatar: 'assets/img/avatar/32.jpg',
    },
  },
]
