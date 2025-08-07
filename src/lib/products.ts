
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  price: number;
  description: string;
  materials: string;
  dimensions: string;
  weight: string;
  images: string[];
  dataAiHint: string;
  tabs?: Tabs[];
  tags?: Tag[];
};

export type Tag = {
  slug: string;
  title: string;
}

export type Tabs = {
  slug: string;
  title: string;
}

export type Subcategory = {
  name: string;
  slug: string;
  description: string;
  image: string;
  dataAiHint: string;
  tags?: Tag[]
  tabs?: Tabs[]
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
  dataAiHint: string;
  subcategories?: Subcategory[];
};

export type FeatureProducts = {
  name: string;
  slug: string;
  description: string;
  image: string;
  dataAiHint: string;
  href?: string;
};

const featureProducts: FeatureProducts[] = [
  {
    name: 'Alaska Series',
    slug: 'handlers-and-knobs',
    description: 'Exquisite handles and knobs to elevate any space.',
    image: '/img/series/alaska.jpg',
    dataAiHint: 'designer door handles',
    href: "/products/handlers-and-knobs?subcategory=mortise-handles&tab=alaska"
  },
  {
    name: 'Berlin Series',
    slug: 'handlers-and-knobs',
    description: 'Exquisite handles and knobs to elevate any space.',
    image: '/img/series/berlin.jpg',
    dataAiHint: 'designer door handles',
    href: "/products/handlers-and-knobs?subcategory=mortise-handles&tab=berlin"
  },
  {
    name: 'Chicago Series',
    slug: 'handlers-and-knobs',
    description: 'Exquisite handles and knobs to elevate any space.',
    image: '/img/series/chicago.jpg',
    dataAiHint: 'designer door handles',
    href: "/products/handlers-and-knobs?subcategory=mortise-handles&tab=chicago"
  }
];



const categories: Category[] = [
  {
    name: 'HANDLES & KNOBS',
    slug: 'handlers-and-knobs',
    description: 'Exquisite handles and knobs to elevate any space.',
    image: '/img/slider/1.jpg',
    dataAiHint: 'designer door handles',
    subcategories: [
      {
        name: 'Mortise Handles',
        slug: 'mortise-handles',
        description: 'Elegant and secure mortise handles, perfect for main entrances and interior doors that require a classic touch.',
        image: '/img/product/subcategories/mortise-handles.jpg',
        dataAiHint: 'mortise handle',
        tags: [

        ],
        tabs: [
          {
            slug: 'alaska',
            title: 'Alaska'
          },
          {
            slug: 'berlin',
            title: 'Berlin'
          },
          {
            slug: 'chicago',
            title: 'Chicago'
          }
        ]
      },
      {
        name: 'Cabinet & Pull Handles',
        slug: 'cabinet-handles-and-pull-handles',
        description: 'A wide range of cabinet handles to complement your kitchen, bathroom, or furniture design, from modern to traditional.',
        image: '/img/product/subcategories/cabinet-handles.jpg',
        dataAiHint: 'cabinet handle & pull handle',
        tabs: [
          {
            slug: 'pull-handles',
            title: 'Pull Handles'
          },
          {
            slug: 'cabinet-handles',
            title: 'Cabinet Handles'
          },
          {
            slug: 'glass-handles',
            title: 'Pull & Glass Handles'
          }
        ]
      },
      {
        name: 'Knobs',
        slug: 'knobs',
        description: 'Discover our collection of knobs, perfect for adding a touch of personality to cabinets, drawers, and doors.',
        image: '/img/product/subcategories/door-knobs.jpg',
        dataAiHint: 'door knob',
        tabs: [],
        tags: []
      },
      {
        name: 'Lock Body & Cylinder',
        slug: 'lock-body-and-cylinder',
        description: 'Discover our collection of knobs, perfect for adding a touch of personality to cabinets, drawers, and doors.',
        image: '/img/product/subcategories/lock-handle.jpg',
        dataAiHint: 'door knob',
        tabs: [
          {
            slug: 'lock-body',
            title: 'Lock Body'
          },
          {
            slug: 'cylinder',
            title: 'Cylinder'
          }
        ],
        tags: []
      },
    ],
  }
];

// mortise handles --------------------------------------
const MortiseHandles: Product[] = [
  // agra
  {
    id: '1',
    // product details page
    slug: 'a-1',
    name: 'A1 - Mortise Handle',
    price: 4500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/87.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '2',
    // product details page
    slug: 'a-2',
    name: 'A2 - Mortise Handle',
    price: 3123,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/88.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '3',
    // product details page
    slug: 'a-3',
    name: 'A3 - Mortise Handle',
    price: 2867,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/89.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '4',
    // product details page
    slug: 'a-4',
    name: 'A4 - Mortise Handle',
    price: 2815,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/137.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '5',
    // product details page
    slug: 'a-5',
    name: 'A5 - Mortise Handle',
    price: 2554,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/146.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '6',
    // product details page
    slug: 'a-6',
    name: 'A6 - Mortise Handle',
    price: 2507,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/43.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '7',
    // product details page
    slug: 'a-7',
    name: 'A7 - Mortise Handle',
    price: 2491,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/28.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '8',
    // product details page
    slug: 'a-8',
    name: 'A8 - Mortise Handle',
    price: 2448,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/40.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '9',
    // product details page
    slug: 'a-9',
    name: 'A9 - Mortise Handle',
    price: 2448,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/58.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '10',
    // product details page
    slug: 'a-10',
    name: 'A10 - Mortise Handle',
    price: 2403,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/22.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '11',
    // product details page
    slug: 'a-11',
    name: 'A11 - Mortise Handle',
    price: 2396,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/04.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [
      {
        slug: 'alaska',
        title: 'Alaska'
      },
    ],
  },
  {
    id: '12',
    slug: 'a-12',
    name: 'A12 - Mortise Handle',
    price: 2394,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/49.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'alaska', title: 'Alaska' }],
  },
  {
    id: '13',
    slug: 'a-13',
    name: 'A13 - Mortise Handle',
    price: 2394,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/52.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'alaska', title: 'Alaska' }],
  },
  {
    id: '14',
    slug: 'a-14',
    name: 'A14 - Mortise Handle',
    price: 2340,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/13.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'alaska', title: 'Alaska' }],
  },
  {
    id: '15',
    slug: 'a-15',
    name: 'A15 - Mortise Handle',
    price: 2302,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/25.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'alaska', title: 'Alaska' }],
  },
  {
    id: '16',
    slug: 'a-16',
    name: 'A16 - Mortise Handle',
    price: 2266,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/01.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'alaska', title: 'Alaska' }],
  },
  {
    id: '17',
    slug: 'a-17',
    name: 'A17 - Mortise Handle',
    price: 2225,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/16.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'alaska', title: 'Alaska' }],
  },

  // Berlin
  {
    id: '18',
    slug: 'b-1',
    name: 'B1 - Mortise Handle',
    price: 2000,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/34.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '19',
    slug: 'b-2',
    name: 'B2 - Mortise Handle',
    price: 1940,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/07.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '20',
    slug: 'b-3',
    name: 'B3 - Mortise Handle',
    price: 1933,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/10.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '21',
    slug: 'b-4',
    name: 'B4 - Mortise Handle',
    price: 1717,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/020.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '22',
    slug: 'b-5',
    name: 'B5 - Mortise Handle',
    price: 1697,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/024.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '23',
    slug: 'b-6',
    name: 'B6 - Mortise Handle',
    price: 1692,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/034.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '24',
    slug: 'b-7',
    name: 'B7 - Mortise Handle',
    price: 1692,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/035.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '25',
    slug: 'b-8',
    name: 'B8 - Mortise Handle',
    price: 1679,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/025.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '26',
    slug: 'b-9',
    name: 'B9 - Mortise Handle',
    price: 1679,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/027.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '27',
    slug: 'b-10',
    name: 'B10 - Mortise Handle',
    price: 1679,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/029.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  {
    id: '28',
    slug: 'b-11',
    name: 'B11 - Mortise Handle',
    price: 1679,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/030.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
    {
    id: '28-1',
    slug: 'b-12',
    name: 'B12 - Mortise Handle',
    price: 1679,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/031.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'berlin', title: 'Berlin' }],
  },
  // {
  //   id: '29',
  //   slug: 'c-1',
  //   name: 'C1 - Mortise Handle',
  //   price: 1638,
  //   description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
  //   materials: 'Brass',
  //   dimensions: '',
  //   weight: '',
  //   images: ['/img/product/products/mortise-handles/031.jpg'],
  //   dataAiHint: 'Brass handle',
  //   category: 'HANDLES & KNOBS',
  //   categorySlug: 'handlers-and-knobs',
  //   subcategory: 'Mortise Handles',
  //   subcategorySlug: 'mortise-handles',
  //   tags: [],
  //   tabs: [{ slug: 'chicago', title: 'Chicago' }],
  // },
  {
    id: '30',
    slug: 'c-1',
    name: 'C1 - Mortise Handle',
    price: 1625,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/032.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '31',
    slug: 'c-2',
    name: 'C2 - Mortise Handle',
    price: 1593,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/026.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '32',
    slug: 'c-3',
    name: 'C3 - Mortise Handle',
    price: 1586,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/028.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '33',
    slug: 'c-4',
    name: 'C4 - Mortise Handle',
    price: 1575,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/016.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '34',
    slug: 'c-5',
    name: 'C5 - Mortise Handle',
    price: 1517,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/015.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '35',
    slug: 'c-6',
    name: 'C6 - Mortise Handle',
    price: 1517,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/033.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '36',
    slug: 'c-7',
    name: 'C7 - Mortise Handle',
    price: 1508,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/023.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '37',
    slug: 'c-8',
    name: 'C8 - Mortise Handle',
    price: 1496,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/017.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '38',
    slug: 'c-9',
    name: 'C9 - Mortise Handle',
    price: 1496,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/018.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '39',
    slug: 'c-10',
    name: 'C10 - Mortise Handle',
    price: 1496,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/019.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '39',
    slug: 'c-11',
    name: 'C11 - Mortise Handle',
    price: 1400,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/021.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },
  {
    id: '39-1',
    slug: 'c-12',
    name: 'C12 - Mortise Handle',
    price: 1400,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/mortise-handles/022.jpg'],
    dataAiHint: 'Brass handle',
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Mortise Handles',
    subcategorySlug: 'mortise-handles',
    tags: [],
    tabs: [{ slug: 'chicago', title: 'Chicago' }],
  },

]

// lock body & cylinder ---------------------------------
const LockBodyAndCylinder: Product[] = [
  // lock body
  {
    id: '40',
    // product details page
    slug: 'lb-1',
    name: 'LB-1 - Lock Body',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/79.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'lock-body',
        title: 'Lock Body'
      },
    ],
  },
  {
    id: '41',
    // product details page
    slug: 'lb-2',
    name: 'LB-2 - Lock Body',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/80.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'lock-body',
        title: 'Lock Body'
      },
    ],
  },
  {
    id: '42',
    // product details page
    slug: 'lb-3',
    name: 'LB-3 - Lock Body',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/81.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'lock-body',
        title: 'Lock Body'
      },
    ],
  },
  {
    id: '43',
    // product details page
    slug: 'lb-4',
    name: 'LB-4 - Lock Body',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/82.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'lock-body',
        title: 'Lock Body'
      },
    ],
  },
  {
    id: '44',
    // product details page
    slug: 'lb-5',
    name: 'LB-5 - Lock Body',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/83.jpg'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'lock-body',
        title: 'Lock Body'
      },
    ],
  },
  // cylinder
  {
    id: '45',
    // product details page
    slug: 'cly-1',
    name: 'CLY-1 - Cylinder',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'cylinder',
        title: 'Cylinder'
      }
    ],
  },
  {
    id: '46',
    // product details page
    slug: 'cly-2',
    name: 'CLY-2 - Cylinder',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'cylinder',
        title: 'Cylinder'
      }
    ],
  },
  {
    id: '47',
    // product details page
    slug: 'cly-3',
    name: 'CLY-3 - Cylinder',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'cylinder',
        title: 'Cylinder'
      }
    ],
  },
  {
    id: '48',
    // product details page
    slug: 'cly-4',
    name: 'CLY-4 - Cylinder',
    price: 500,
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.',
    materials: 'Brass',
    dimensions: '',
    weight: '',
    images: ['/img/product/products/lock-body-and-cylinder/'],
    dataAiHint: 'Brass handle',
    // category, subcategory, tabs, tags - filters
    category: 'HANDLES & KNOBS',
    categorySlug: 'handlers-and-knobs',
    subcategory: 'Lock Body & Cylinder',
    subcategorySlug: 'lock-body-and-cylinder',
    tags: [],
    tabs: [
      {
        slug: 'cylinder',
        title: 'Cylinder'
      }
    ],
  },
]

// pull and cabinet handle
const PullAndCabinetHandle: Product[] = [
  { id: '49', slug: 'ph-1', name: 'PH-1 - Pull handle', price: 800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/11.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '50', slug: 'ph-2', name: 'PH-2 - Pull handle', price: 700, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/56.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '51', slug: 'ph-3', name: 'PH-3 - Pull handle', price: 1100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/36.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '52', slug: 'ph-4', name: 'PH-4 - Pull handle', price: 500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/12.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '53', slug: 'ph-5', name: 'PH-5 - Pull handle', price: 300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/35.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '54', slug: 'ph-6', name: 'PH-6 - Pull handle', price: 250, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/44.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '55', slug: 'ph-7', name: 'PH-7 - Pull handle', price: 1500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/24.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '56', slug: 'ph-8', name: 'PH-8 - Pull handle', price: 800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/32.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '57', slug: 'ph-9', name: 'PH-9 - Pull handle', price: 700, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/60.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '58', slug: 'ph-10', name: 'PH-10 - Pull handle', price: 1100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/42.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '59', slug: 'ph-11', name: 'PH-11 - Pull handle', price: 500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/57.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '60', slug: 'ph-12', name: 'PH-12 - Pull handle', price: 300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/41.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '61', slug: 'ph-13', name: 'PH-13 - Pull handle', price: 250, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/53.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '62', slug: 'ph-14', name: 'PH-14 - Pull handle', price: 1500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/06.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '63', slug: 'ph-15', name: 'PH-15 - Pull handle', price: 800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/30.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '64', slug: 'ph-16', name: 'PH-16 - Pull handle', price: 700, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/05.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '65', slug: 'ph-17', name: 'PH-17 - Pull handle', price: 1100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/47.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '66', slug: 'ph-18', name: 'PH-18 - Pull handle', price: 500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/20.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '67', slug: 'ph-19', name: 'PH-19 - Pull handle', price: 300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/48.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '68', slug: 'ph-20', name: 'PH-20 - Pull handle', price: 250, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/15.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '69', slug: 'ph-21', name: 'PH-21 - Pull handle', price: 1500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/59.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '70', slug: 'ph-22', name: 'PH-22 - Pull handle', price: 800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/14.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '71', slug: 'ph-23', name: 'PH-23 - Pull handle', price: 700, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/21.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '72', slug: 'ph-24', name: 'PH-24 - Pull handle', price: 1100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/02.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '73', slug: 'ph-25', name: 'PH-25 - Pull handle', price: 500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/39.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '74', slug: 'ph-26', name: 'PH-26 - Pull handle', price: 300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/23.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '75', slug: 'ph-27', name: 'PH-27 - Pull handle', price: 250, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/03.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '76', slug: 'ph-28', name: 'PH-28 - Pull handle', price: 1500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/54.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '77', slug: 'ph-29', name: 'PH-29 - Pull handle', price: 800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/45.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '78', slug: 'ph-30', name: 'PH-30 - Pull handle', price: 700, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/33.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '79', slug: 'ph-31', name: 'PH-31 - Pull handle', price: 1100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/17.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '80', slug: 'ph-32', name: 'PH-32 - Pull handle', price: 500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/18.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '81', slug: 'ph-33', name: 'PH-33 - Pull handle', price: 300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/51.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '82', slug: 'ph-34', name: 'PH-34 - Pull handle', price: 250, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/50.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '83', slug: 'ph-35', name: 'PH-35 - Pull handle', price: 1500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/29.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '84', slug: 'ph-36', name: 'PH-36 - Pull handle', price: 800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/09.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '85', slug: 'ph-37', name: 'PH-37 - Pull handle', price: 700, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/08.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '86', slug: 'ph-38', name: 'PH-38 - Pull handle', price: 1100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/38.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '87', slug: 'ph-39', name: 'PH-39 - Pull handle', price: 500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/27.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  { id: '88', slug: 'ph-40', name: 'PH-40 - Pull handle', price: 300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/26.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'pull-handles', title: 'Pull Handles' }] },
  // pull and glass handle
  { id: '89', slug: 'gh-1', name: 'GH-1 - Glass handle', price: 2500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/71.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '90', slug: 'gh-2', name: 'GH-2 - Glass handle', price: 2800, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/72.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '91', slug: 'gh-3', name: 'GH-3 - Glass handle', price: 3200, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/61.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '92', slug: 'gh-4', name: 'GH-4 - Glass handle', price: 3400, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/65.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '93', slug: 'gh-5', name: 'GH-5 - Glass handle', price: 2500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/67.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '94', slug: 'gh-6', name: 'GH-6 - Glass handle', price: 2100, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/63.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '95', slug: 'gh-7', name: 'GH-7 - Glass handle', price: 2500, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/65.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '96', slug: 'gh-8', name: 'GH-8 - Glass handle', price: 2400, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/68.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },
  { id: '97', slug: 'gh-9', name: 'GH-9 - Glass handle', price: 2300, description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', materials: 'Brass', dimensions: '', weight: '', images: ['/img/product/products/cabinet-handles-and-pull-handles/69.jpg'], dataAiHint: 'Brass handle', category: 'HANDLES & KNOBS', categorySlug: 'handlers-and-knobs', subcategory: 'Cabinet & Pull Handles', subcategorySlug: 'cabinet-handles-and-pull-handles', tags: [], tabs: [{ slug: 'glass-handles', title: 'Pull & Glass Handles' }] },

];

// knobs
const Knobs: Product[] = [
  { 
    id: '98', 
    slug: 'knb-1', 
    name: 'KNB-1 - Knob', 
    price: 350, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/75.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '99', 
    slug: 'knb-2', 
    name: 'KNB-2 - Knob', 
    price: 400, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/76.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '100', 
    slug: 'knb-3', 
    name: 'KNB-3 - Knob', 
    price: 500, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/73.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '101', 
    slug: 'knb-4', 
    name: 'KNB-4 - Knob', 
    price: 150, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/74.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '102', 
    slug: 'knb-5', 
    name: 'KNB-5 - Knob', 
    price: 250, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/77.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '103', 
    slug: 'knb-6', 
    name: 'KNB-6 - Knob', 
    price: 150, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/36.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '104', 
    slug: 'knb-7', 
    name: 'KNB-7 - Knob', 
    price: 200, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/041.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '105', 
    slug: 'knb-8', 
    name: 'KNB-8 - Knob', 
    price: 250, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/039.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '106', 
    slug: 'knb-9', 
    name: 'KNB-9 - Knob', 
    price: 150, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/038.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '107', 
    slug: 'knb-10', 
    name: 'KNB-10 - Knob', 
    price: 200, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/040.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '108', 
    slug: 'knb-11', 
    name: 'KNB-11 - Knob', 
    price: 250, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/037.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
  { 
    id: '109', 
    slug: 'knb-12', 
    name: 'KNB-12 - Knob', 
    price: 300, 
    description: 'A timeless mortise handle crafted from solid Brass, offering both security and a classic aesthetic for your main doors.', 
    materials: 'Brass', 
    dimensions: '', 
    weight: '', 
    images: ['/img/product/products/knobs/78.jpg'], 
    dataAiHint: 'Brass handle', 
    category: 'HANDLES & KNOBS', 
    categorySlug: 'handlers-and-knobs', 
    subcategory: 'Knobs', 
    subcategorySlug: 'knobs', 
    tags: [], tabs: [] 
  },
]



const products: Product[] = [
  ...MortiseHandles,
  ...LockBodyAndCylinder,
  ...PullAndCabinetHandle,
  ...Knobs
];



export function getCategories() {
  return categories;
}

export function getFeatureProducts() {
  return featureProducts;
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProducts() {
  return products;
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter(
    (p) =>
      p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug
  );
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
