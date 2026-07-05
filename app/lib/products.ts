export interface Product {
  name: string;
  price: string;
  image: string;
  whatsappMessage: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "iphone-x",
    title: "iPhone X Range",
    description: "Click your desired iPhone X model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPhone X 64GB", price: "R3 000", image: "iphonex64.png", whatsappMessage: "Hey there, I am interested in your iPhone X 64GB" },
      { name: "iPhone X 128GB", price: "R3 500", image: "iphonex64.png", whatsappMessage: "Hey there, I am interested in your iPhone X 128GB" },
      { name: "iPhone X 256GB", price: "R3 800", image: "iphonex256.png", whatsappMessage: "Hey there, I am interested in your iPhone X 256GB" },
      { name: "iPhone XS 64GB", price: "R3 500", image: "iphonexs64.png", whatsappMessage: "Hey there, I am interested in your iPhone XS 64GB" },
      { name: "iPhone XS 128GB", price: "R3 750", image: "iphonexs128.png", whatsappMessage: "Hey there, I am interested in your iPhone XS 128GB" },
      { name: "iPhone XS Max 64GB", price: "R4 000", image: "iphonexs256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone XS Max 64GB" },
      { name: "iPhone XR 64GB", price: "R4 500", image: "iphonexr64.png", whatsappMessage: "Hey there, I am interested in your iPhone XR 64GB" },
      { name: "iPhone XR 128GB", price: "R4 800", image: "iphonexr128.png", whatsappMessage: "Hey there, I am interested in your iPhone XR 128GB" },
      { name: "iPhone XR 256GB", price: "R5 000", image: "iphonexr256.png", whatsappMessage: "Hey there, I am interested in your iPhone XR 256GB" },
    ],
  },
  {
    slug: "iphone-11",
    title: "iPhone 11 Range",
    description: "Click your desired iPhone 11 model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPhone 11 64GB", price: "R5 000", image: "iphone11.64.png", whatsappMessage: "Hey there, I am interested in your iPhone 11 64GB" },
      { name: "iPhone 11 128GB", price: "R5 300", image: "iphone11.128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 11 128GB" },
      { name: "iPhone 11 256GB", price: "R5 600", image: "iphone11.256.png", whatsappMessage: "Hey there, I am interested in your iPhone 11 256GB" },
      { name: "iPhone 11 Pro 64GB", price: "R6 000", image: "iphone11pro64.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 11 Pro 64GB" },
      { name: "iPhone 11 Pro 128GB", price: "R6 350", image: "iphone11pro128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 11 Pro 128GB" },
      { name: "iPhone 11 Pro 256GB", price: "R6 600", image: "iphone11pro256.png", whatsappMessage: "Hey there, I am interested in your iPhone 11 Pro 256GB" },
      { name: "iPhone 11 Pro Max 64GB", price: "R6 800", image: "iphone11promax64.png", whatsappMessage: "Hey there, I am interested in your iPhone 11 Pro Max 64GB" },
      { name: "iPhone 11 Pro Max 128GB", price: "R7 000", image: "iphone11promax128.png", whatsappMessage: "Hey there, I am interested in your iPhone 11 Pro Max 128GB" },
      { name: "iPhone 11 Pro Max 256GB", price: "R7 400", image: "iphone11promax256.png", whatsappMessage: "Hey there, I am interested in your iPhone 11 Pro Max 256GB" },
    ],
  },
  {
    slug: "iphone-12",
    title: "iPhone 12 Range",
    description: "Click your desired iPhone 12 model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPhone 12 mini 64GB", price: "R4 200", image: "iphone12mini64.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 mini 64GB" },
      { name: "iPhone 12 mini 128GB", price: "R4 500", image: "iphone12mini128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 mini 128GB" },
      { name: "iPhone 12 64GB", price: "R5 500", image: "iphone12.64.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 64GB" },
      { name: "iPhone 12 128GB", price: "R5 800", image: "iphone12.128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 128GB" },
      { name: "iPhone 12 256GB", price: "R6 400", image: "iphone12.256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 256GB" },
      { name: "iPhone 12 Pro 64GB", price: "R7 000", image: "iphone12pro64.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 Pro 64GB" },
      { name: "iPhone 12 Pro 128GB", price: "R7 400", image: "iphone12pro128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 Pro 128GB" },
      { name: "iPhone 12 Pro 256GB", price: "R7 700", image: "iphone12pro256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 Pro 256GB" },
      { name: "iPhone 12 Pro Max 64GB", price: "R8 500", image: "iphone12promax64.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 Pro Max 64GB" },
      { name: "iPhone 12 Pro Max 128GB", price: "R8 800", image: "iphone12promax128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 Pro Max 128GB" },
      { name: "iPhone 12 Pro Max 256GB", price: "R9 000", image: "iphone12promax256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 12 Pro Max 256GB" },
    ],
  },
  {
    slug: "iphone-13",
    title: "iPhone 13 Range",
    description: "Click your desired iPhone 13 model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPhone 13 mini 128GB", price: "R7 700", image: "iphone13mini128.png", whatsappMessage: "Hey there, I am interested in your iPhone 13 mini 128GB" },
      { name: "iPhone 13 mini 256GB", price: "R8 000", image: "iphone13mini256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 13 mini 256GB" },
      { name: "iPhone 13 128GB", price: "R8 000", image: "iphone13.128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 13 128GB" },
      { name: "iPhone 13 256GB", price: "R8 600", image: "iphone13.256.png", whatsappMessage: "Hey there, I am interested in your iPhone 13 256GB" },
      { name: "iPhone 13 Pro 128GB", price: "R9 000", image: "iphone13pro128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 13 Pro 128GB" },
      { name: "iPhone 13 Pro 256GB", price: "R9 500", image: "iphone13pro256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 13 Pro 256GB" },
      { name: "iPhone 13 Pro Max 128GB", price: "R9 400", image: "iphone13promax128.png", whatsappMessage: "Hey there, I am interested in your iPhone 13 Pro Max 128GB" },
      { name: "iPhone 13 Pro Max 256GB", price: "R9 900", image: "iphone13promax256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 13 Pro Max 256GB" },
    ],
  },
  {
    slug: "iphone-14",
    title: "iPhone 14 Range",
    description: "Click your desired iPhone 14 model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPhone 14 128GB", price: "R10 000", image: "iphone14.128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 14 128GB" },
      { name: "iPhone 14 256GB", price: "R10 400", image: "iphone14.256.jpeg", whatsappMessage: "Hey there, I am interested in your iPhone 14 256GB" },
      { name: "iPhone 14 Pro 128GB", price: "R10 500", image: "iphone14pro128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 14 Pro 128GB" },
      { name: "iPhone 14 Pro 256GB", price: "R10 900", image: "iphone14pro256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 14 Pro 256GB" },
      { name: "iPhone 14 Pro Max 128GB", price: "R11 000", image: "iphone14promax128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 14 Pro Max 128GB" },
      { name: "iPhone 14 Pro Max 256GB", price: "R11 500", image: "iphone14promax256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 14 Pro Max 256GB" },
    ],
  },
  {
    slug: "iphone-15",
    title: "iPhone 15 Range",
    description: "Click your desired iPhone 15 model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPhone 15 128GB", price: "R12 000", image: "iphone15.128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 128GB" },
      { name: "iPhone 15 256GB", price: "R12 400", image: "iphone15.256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 256GB" },
      { name: "iPhone 15 Plus 128GB", price: "R12 400", image: "iphone15plus128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 Plus 128GB" },
      { name: "iPhone 15 Plus 256GB", price: "R13 000", image: "iphone15plus256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 Plus 256GB" },
      { name: "iPhone 15 Pro 128GB", price: "R12 600", image: "iphone15pro128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 Pro 128GB" },
      { name: "iPhone 15 Pro 256GB", price: "R13 400", image: "iphone15pro256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 Pro 256GB" },
      { name: "iPhone 15 Pro Max 128GB", price: "R13 200", image: "iphone15promax128.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 Pro Max 128GB" },
      { name: "iPhone 15 Pro Max 256GB", price: "R13 700", image: "iphone15promax256.jpg", whatsappMessage: "Hey there, I am interested in your iPhone 15 Pro Max 256GB" },
    ],
  },
  {
    slug: "apple-airpods",
    title: "Apple AirPods Range",
    description: "Click your desired AirPods model below to start your purchase via WhatsApp.",
    products: [
      { name: "AirPods Pro 2nd Gen", price: "R4 000", image: "airpodspro2nd gen.jpeg", whatsappMessage: "Hey there, I am interested in your AirPods Pro 2nd Gen" },
      { name: "AirPods Max", price: "R9 000", image: "airpodsmax.png", whatsappMessage: "Hey there, I am interested in your AirPods Max" },
    ],
  },
  {
    slug: "ipads",
    title: "iPads Range",
    description: "Click your desired iPad model below to start your purchase via WhatsApp.",
    products: [
      { name: "iPad Pro 4th Gen", price: "R15 000", image: "ipadpro4thgen.jpg", whatsappMessage: "Hey there, I am interested in your iPad Pro 4th Gen" },
      { name: "iPad Pro 5th Gen", price: "R17 000", image: "ippadpro5thgen.png", whatsappMessage: "Hey there, I am interested in your iPad Pro 5th Gen" },
      { name: "iPad Air 4th Gen", price: "R6 000", image: "ipadair4thgen.jpg", whatsappMessage: "Hey there, I am interested in your iPad Air 4th Gen" },
      { name: "iPad Air 5th Gen", price: "R8 000", image: "ipadair5thgen.png", whatsappMessage: "Hey there, I am interested in your iPad Air 5th Gen" },
    ],
  },
  {
    slug: "macbooks",
    title: "MacBooks Range",
    description: "Click your desired MacBook model below to start your purchase via WhatsApp.",
    products: [
      { name: 'MacBook Air 13" M1 256GB', price: "R15 000", image: "macbookair13m1.jpg", whatsappMessage: "Hey there, I am interested in your MacBook Air 13\" M1 256GB" },
      { name: 'MacBook Air 13" M2 256GB', price: "R16 000", image: "macbookair13m2.jpg", whatsappMessage: "Hey there, I am interested in your MacBook Air 13\" M2 256GB" },
      { name: 'MacBook Air 15" M2 256GB', price: "R17 000", image: "macbookair15m2.png", whatsappMessage: "Hey there, I am interested in your MacBook Air 15\" M2 256GB" },
      { name: 'MacBook Air 15" M3 512GB', price: "R18 000", image: "macbookair15m3.jpg", whatsappMessage: "Hey there, I am interested in your MacBook Air 15\" M3 512GB" },
      { name: "Mac Mini M1 512GB", price: "R8 000", image: "macminim1.512.jpg", whatsappMessage: "Hey there, I am interested in your Mac Mini M1 512GB" },
    ],
  },
];