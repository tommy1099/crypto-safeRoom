import { TFunction } from "i18next";
import { PropsWithChildren } from "react";
type ItemType = "signals" | "news" | "plans" | "products" | "tutorials" | "checkout" | "userData" | "plan" | "login";
export interface CardProps extends PropsWithChildren {
  onChildValue?: (value: string)=> void;
    handleAddToCart?: () => void;
  shouldFormatNumbers?: boolean;
  t?: TFunction<"translation", undefined>;
  formatNumberToPersian?(input: number | string): string;
  isFa?: boolean,
  isFullscreen?: boolean;
  handleImageClick?: () => void;
    showModal?: boolean;
  handleClose: () => void;
    order?: orders;
    orders?: orders[];
    user?: userState;
    key?: string;
    type: ItemType;
    state?: boolean;
    blur?: boolean;
    id: string;
    price?: number;
    vip?: boolean;
    crypto?: string;
    title?: string;
    entryPoint?: string;
    alertDesc?: string;
    desc?: {
      desc1: string;
      desc2?: string;
      desc3?: string;
    };
    img?: string;
    tags?: {
      tag1: string;
      tag2?: string;
      tag3?: string;
      tag4?: string;
    };
    inStock?: boolean;
    tp?: {
      tp1: boolean;
      tp2: boolean;
      tp3: boolean;
    };
    tpPrices?: {
      tp1Price: string;
      tp2Price: string;
      tp3Price: string;
  };
    physical?: boolean
  }
  export interface DescProps {
    vip?:boolean,
    desc?: {
      desc1: string;
      desc2?: string;
      desc3?: string;
    };
    blur?: boolean;
    tp?: {
      tp1: boolean;
      tp2: boolean;
      tp3: boolean;
    };
    formatNumberToPersian(input: number | string): string;
    t: TFunction<"translation", undefined>;
    isFa: boolean;
    id: string;
    type: ItemType;
  }
  export interface StateProps {
    blur?: boolean;
    state?: boolean;
    t: TFunction<"translation", undefined>;
  }
  export interface TagsProps {
    tags?: {
        tag1: string;
        tag2?: string;
        tag3?: string;
        tag4?: string;
      },
      user: userState,
      vip?: boolean,
      blur?: boolean,
      t: TFunction<"translation", undefined>,
      formatNumberToPersian(input: number | string): string,
      isFa: boolean,
      type: ItemType,
      
      
      
  }
  export type orders = {
    userInfo: {
      username: string;
      shippingAddress: {
        firstname: string;
        lastname: string;
        country: string;
        city: string;
        zipCode: string;
        address: string;
      };
    };
    orderDate: Date;
    paymentMethod: {
      paid: boolean;
      method: string;
      timer?: number;
    };
    productName: [
      {
        id: string
      title: string
      price: number
      physical: number
      quantity: number
      img?: string,
      }
    ];
    totalPrice: number;
    userNote: string;
    done: boolean;
    _id: string;
  };

  export interface userState {
    pic?: string;
    email: {email: string; confirm: boolean;};
    username: string;
    plan: {
      remaining: number;
      maxDays: number;
      type: string;
    };
    firstname?: string;
    lastname?: string;
    refcode: {userCode: string; enteredCodes: string[]};
    phone?: string;
    orders: orders[];
    role: string;
    ban: boolean;
  }

  export interface RadialProgressProps extends PropsWithChildren {
    value: number;
    style: { textColor: string; pathColor: string; trailColor: string };
    formatNumberToPersian(input: number | string): string,
    isFa: boolean,
    maxValue: number,
    textSize: string,
    type: string
  }
  export interface HeroProps {
    section1: string;
    section2: string;
    isFa: boolean;
  }

  export interface ISignalsProps {
    id: string;
    img: string;
    crypto: string;
    entryPoint: string;
    desc: {
      desc1: string;
      desc2: string;
      desc3: string;
    };
    alertDesc: string;
    tags: {
      tag1: string;
      tag2: string;
    };
    vip: boolean;
    blur: boolean;
    state: boolean;
    tp: {
      tp1: boolean;
      tp2: boolean;
      tp3: boolean;
    };
    tpPrices: {
      tp1Price: string;
      tp2Price: string;
      tp3Price: string;
    };
  }
  //============order

// interface Address {
//   firstname: string;
//   lastname: string;
//   country: string;
//   city: string;
//   town: string;
//   zipCode: string;
//   address: string;
//   phone: string;
// }

// interface User {
//   username: string;
//   userID: string;
//   shippingAddress: Address;
// }


// interface Product {
//   id: string;
//   title: string;
//   price: number;
//   physical: number;
//   quantity: number;
//   img?: string;
// }

// export interface Order extends Document {
//   userInfo: User;
//   orderDate: Date;
//   paymentMethod: {
//     state: boolean;
//     method: string;
//   };
//   productName: Product[];
//   totalPrice: number;
//   userNote?: string;
//   done: boolean;
// }
  //============order

 export interface ModalFooterProps {
    type: string;
    tpPrices?: {
      tp1Price: string;
      tp2Price: string;
      tp3Price: string;
    };
    tags?: {
      tag1: string;
      tag2?: string;
    };
    price?: number;
    handleAddToCart?: () => void;
    handleSubmitPaid?: () => void;
    handleSubmitPlan?: () => void;
    order?: orders;
    orders?: orders[];
  }

  export interface IloginData {
    email: string;
    password: string;
  }
  export interface IProfileDropDownProps {
    isModalOpen: boolean;
  }
  export type NewsItem = {
    id: string;
    //   key: string;
    img: string;
    title: string;
    desc: {
      desc1: string;
    };
  };