const baseUsers = {
  you: {
    id: 'u-you',
    username: 'Sangay',
    fullName: 'Sangay Rinchen',
    avatarUrl: 'https://i.pinimg.com/736x/85/e6/47/85e64767b129d2cae2d1c47b1ed0aece.jpg',
  },
  dzong: {
    id: 'u1',
    username: 'Monastries',
    fullName: 'Bhutan Monastries',
    avatarUrl: 'https://drukcdn.blob.core.windows.net/www/images/media/why-dzong1.png',
    verified: true,
  },
  royal: {
    id: 'u2',
    username: 'Royal_family',
    fullName: 'Royal Family',
    avatarUrl: 'https://jetsun.org/media/rlak1oqm/hrh-sonam-yangden-wangchuck-family-portrait.jpeg?width=500&height=333.251953125',
  },
  himalaya: {
    id: 'u3',
    username: 'himalayan_kid',
    fullName: 'Himalayan Kid',
    avatarUrl: 'https://sustainability.stanford.edu/sites/sustainability/files/styles/card_1900x950/public/media/image/tibetuplift_himalayas_raimond-klavins-l6jxljmeuoo-unsplash_0.jpeg?h=56d0ca2e&itok=9Ej2p45Q',
    verified: true,
  },
  cst: {
    id: 'u4',
    username: 'cst_campus',
    fullName: 'CST Campus Life',
    avatarUrl: 'https://www.bbs.bt/wp-content/uploads/2023/10/cst.jpg',
  },
  jonny: {
    id: 'u5',
    username: 'jonny_depp',
    fullName: 'Jonny Depp',
    avatarUrl: 'https://m.media-amazon.com/images/M/MV5BZjA3NzZiZDktZjc2My00MzY2LThhOWMtZGFjYzg4ZDI2ZWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  bhutantele: {
    id: 'u6',
    username: 'bhutan_telecom',
    fullName: 'Bhutan Telecom',
    avatarUrl: 'https://play-lh.googleusercontent.com/ZUSqx5A2SOjyOl8-DdVEfSbXw9E-KnTH2iBeR6ipD1IpXa8GxUFCse7IYZezY5PMs_4=w416-h235-rw',
  },
}

export const currentUser = baseUsers.you

export const stories = [
  { id: 's1', user: baseUsers.you, viewed: true },
  { id: 's2', user: baseUsers.dzong },
  { id: 's3', user: baseUsers.royal },
  { id: 's4', user: baseUsers.himalaya },
  { id: 's5', user: baseUsers.cst },
  { id: 's6', user: baseUsers.jonny },
  { id: 's7', user: baseUsers.bhutantele },
]

export const posts = [
  {
    id: 'p1',
    user: baseUsers.dzong,
    imageUrl: 'https://s7d1.scene7.com/is/image/wbcollab/Punakha-Dzong-Mussi-Katz?qlt=90&fmt=webp&resMode=sharp2',
    alt: 'Punakah Dzong',
    likes: 1240,
    caption:
      'Morning mist over the dzong — nothing beats this view. #bhutan #dzong',
    timeAgo: '2 hours ago',
    commentsPreview: [
      { user: { username: 'himalayan_kid' }, text: 'Stunning shot!' },
    ],
  },
  {
    id: 'p2',
    user: baseUsers.royal,
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlV4kY6r_xlbM3DcPA6JhpQ2tNMZEc4pmKMQslLAuxUdUFp6ALBUg4A62Zisatcjnsd6N3X-XbXv3_c2O48-lAuXN4EomO29g3GrIuxdBN52O1xzI3SRj8gjMHQsbt5uVeyaXr-gorz2MnB67kWIRGf__yreSLjC-TdrZXELK7-qvFyc42VnDsviiLEQak/s1220/Bhutan-Royal-Family-4.jpg',
    alt: 'Royal family portrait',
    likes: 892,
    caption: 'Who we would be without them.',
    timeAgo: '5 hours ago',
    commentsPreview: [
      { user: { username: 'cst_campus' }, text: 'Our precious Gems.' },
    ],
  },
  {
    id: 'p3',
    user: baseUsers.himalaya,
    imageUrl: 'https://i.natgeofe.com/n/bbaad247-d68d-4003-836c-93d88e77d2a9/Himalayas-prepped_16x9.jpg?w=1200',
    alt: 'Snowy path with sunlight',
    likes: 2103,
    caption: 'Golden cold hour walk. Camera: phone, vibes: unlimited.',
    timeAgo: '1 day ago',
  },
]

export const suggestions = [
  {
    ...baseUsers.cst,
    reason: 'Followed by bhutan_trails + 3 more',
  },
  {
    ...baseUsers.jonny,
    reason: 'New to Instagram',
  },
  {
    ...baseUsers.bhutantele,
    reason: 'Suggested for you',
  },
]
