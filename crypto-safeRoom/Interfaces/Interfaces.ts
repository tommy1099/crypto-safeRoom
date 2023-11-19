import { TFunction } from "i18next";
import { PropsWithChildren } from "react";
type ItemType = "signals" | "news" | "plans" | "products" | "tutorials";
export interface CardProps {
    key: string;
    type: ItemType;
    state?: boolean;
    blur?: boolean;
    id: string;
    price?: number;
    vip?: boolean;
    crypto?: string;
    title?: string;
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
  }
  export interface DescProps {
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
  type orders = {
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
      state: boolean;
      method: string;
    };
    productName: [
      {
        productId: string;
        productName: string;
        quantity: number;
        price: number;
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
    refcode: string;
    phone?: string;
    orders: orders[];
  }
  export interface RadialProgressProps extends PropsWithChildren {
    value: number;
    style: { textColor: string; pathColor: string; trailColor: string };
    formatNumberToPersian(input: number | string): string,
    isFa: boolean,
  }
  export interface HeroProps {
    section1: string;
    section2: string;
    isFa: boolean;
  }