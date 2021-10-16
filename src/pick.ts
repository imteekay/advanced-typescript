type Product = {
  name?: string;
  price?: number;
  imageUrl?: string;
  description?: string;
  isShippingFree?: boolean;
  discount?: number;
};

type ImageProps = {
  imageUrl: string;
};

type ImagePropsWithPick = Pick<Product, 'imageUrl'>;

const image: ImageProps = {
  imageUrl:
    'https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html',
};

const imageWithPick: ImagePropsWithPick = {
  imageUrl:
    'https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html',
};
