import { Product } from '@/types/product';

export const products: Product[] = [
  // KURTAS
  {
    id: 'k1',
    name: 'Ivory Floral Chikankari Kurta',
    category: 'Kurtas',
    description: 'A timeless ivory cotton straight kurta adorned with delicate hand-embroidered Lucknowi Chikankari motifs. Perfect for breezy daytime wear.',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop',
    details: [
      '100% Breathable Cotton fabric',
      'Hand-embroidered chikankari work',
      'Straight-fit silhouette',
      'Side slits for comfort',
      'Mild hand wash recommended'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 'k2',
    name: 'Mustard Silk Zari Kurta',
    category: 'Kurtas',
    description: 'Lustrous mustard-yellow raw silk kurta featuring minimal gold zari embroidery along the band collar and sleeves.',
    price: 2290,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    details: [
      'Premium Raw Silk blend',
      'Fine gold zari thread work',
      'High collar neckline with keyhole',
      '3/4th sleeves',
      'Dry clean only'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 'k3',
    name: 'Ruby Wine Georgette Kurta',
    category: 'Kurtas',
    description: 'Chic georgette kurta in a rich wine shade with self-colored sequence detailing and a comfortable inner lining.',
    price: 1950,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    details: [
      'Premium faux georgette fabric',
      'Subtle monochrome sequin embellishment',
      'Sweetheart neck pattern',
      'Super soft lining included',
      'Gentle machine wash'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'k4',
    name: 'Olive Green Cotton Slub Kurta',
    category: 'Kurtas',
    description: 'An easy-going everyday olive green kurta in textured slub cotton with wooden buttons and front pocket detail.',
    price: 1299,
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    details: [
      'Textured slub cotton fabric',
      'Wooden button placket',
      'Utility front pocket',
      'Comfort regular fit',
      'Home wash safe'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },

  // KURTA SETS
  {
    id: 'ks1',
    name: 'Ruby Velvet Festive Kurta Set',
    category: 'Kurta Sets',
    description: 'A majestic deep ruby velvet kurta adorned with golden zardozi embroidery, paired with coordinating velvet pants and an organza dupatta.',
    price: 4890,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    details: [
      'Luxurious Micro-Velvet fabric',
      'Detailed zardozi and bead handwork',
      'Straight pants with elasticated waistband',
      'Delicate sheer organza dupatta with scalloped borders',
      'Dry clean only'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ks2',
    name: 'Peach Blossom Organza Suit Set',
    category: 'Kurta Sets',
    description: 'A romantic pastel peach suit featuring hand-painted floral motifs on pure organza, complete with straight pants and a coordinating dupatta.',
    price: 3850,
    originalPrice: 4800,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    details: [
      'Pure organza kurta and dupatta',
      'Hand-painted floral motifs with golden highlights',
      'Soft cotton lining inside',
      'Tailored pants included',
      'Dry clean only'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ks3',
    name: 'Magenta Silk Gota Patti Set',
    category: 'Kurta Sets',
    description: 'Make a statement in this striking magenta silk blend kurta set featuring authentic Rajasthani Gota Patti borders and sitara detailing.',
    price: 4200,
    originalPrice: 5200,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop',
    details: [
      'Silk blend festive fabric',
      'Gota Patti hand embroidery',
      'Matching silk pants and chanderi dupatta',
      'Deep round neckline',
      'Dry clean only'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 'ks4',
    name: 'Emerald Floral Anarkali Pant Set',
    category: 'Kurta Sets',
    description: 'Breathable emerald green cotton flared kurta featuring traditional prints, matched with slim pants and a matching floral dupatta.',
    price: 3499,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
    details: [
      '100% Premium Cotton fabric',
      'Beautiful ethnic block print design',
      'Flared silhouette with borders',
      'Lightweight cotton dupatta',
      'Wash separately'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },

  // ANARKALI
  {
    id: 'a1',
    name: 'Mint Pastel Flowing Anarkali',
    category: 'Anarkali',
    description: 'A dreamlike floor-length Anarkali gown in a fresh mint pastel tone, featuring a heavily gathered skirt and delicate beadwork on the yoke.',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    details: [
      'Flowing soft georgette fabric',
      'Handcrafted beadwork and sequins',
      'Huge 4-meter flare for graceful twirling',
      'Comes with knit leggings and net dupatta',
      'Dry clean recommended'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'a2',
    name: 'Deep Forest Green Silk Anarkali',
    category: 'Anarkali',
    description: 'A regal Banarasi silk blend Anarkali in rich forest green, boasting a beautiful woven zari border and detailed button placket.',
    price: 4990,
    originalPrice: 6500,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop',
    details: [
      'Banarasi Art Silk fabric',
      'Woven golden zari threadwork',
      'Full sleeves with zari cuffs',
      'Matching silk dupatta',
      'Dry clean only'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 'a3',
    name: 'Gulabi Pink Heavily Flared Anarkali',
    category: 'Anarkali',
    description: 'A radiant pink georgette Anarkali dress highlighting intricate floral prints, borders, and a matching hand-printed chiffon dupatta.',
    price: 3750,
    originalPrice: 4500,
    image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    details: [
      'Light georgette base with print',
      'Elegant V-neck with gold trim',
      'Chiffon dupatta with tassels',
      'Breathable inner lining',
      'Gentle wash'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'a4',
    name: 'Desert Rose Tiered Anarkali',
    category: 'Anarkali',
    description: 'A contemporary layered tiered Anarkali gown in a dusty rose hue, showcasing a modern silhouette with traditional print bands.',
    price: 4200,
    originalPrice: 5400,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    details: [
      'Rayon and linen blend',
      'Tiered flowy pattern',
      'Adjustable drawstring side tassels',
      'Embroidery highlights on neck',
      'Hand wash only'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },

  // SKIRT SETS
  {
    id: 'ss1',
    name: 'Midnight Gold Skirt & Blouse Set',
    category: 'Skirt Sets',
    description: 'An elegant festive ensemble featuring a black raw silk crop top with gold motifs and a heavily flared matching skirt and red highlights.',
    price: 5499,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    details: [
      'Raw silk top and skirt',
      'Golden foil prints and zari detailing',
      'Side zip opening on skirt',
      'Comes with a contrast red organza dupatta',
      'Dry clean only'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ss2',
    name: 'Cream & Gold Jacquard Skirt Set',
    category: 'Skirt Sets',
    description: 'A sophisticated ivory white set with an elegant jacquard woven skirt, paired with a matching crop blouse and golden net dupatta.',
    price: 4999,
    originalPrice: 6200,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop',
    details: [
      'Premium jacquard and banarasi weave',
      'Comfort elasticated back skirt',
      'Intricate gold threads',
      'Beautiful heavy borders',
      'Dry clean only'
    ],
    sizes: ['M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ss3',
    name: 'Purple Shimmer Crop Top Skirt',
    category: 'Skirt Sets',
    description: 'A glamorous violet purple skirt set with a sequinned high-neck crop blouse and a shimmering georgette skirt with border embroidery.',
    price: 5200,
    originalPrice: 6500,
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    details: [
      'Shimmering georgette fabric',
      'All-over sequin blouse work',
      'Embroidered border details',
      'Flowy flare skirt',
      'Dry clean only'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ss4',
    name: 'Rust Floral Printed Skirt Set',
    category: 'Skirt Sets',
    description: 'A bohemian rust orange cotton skirt set featuring gorgeous kalamkari inspired floral prints, matched with a tie-up crop top.',
    price: 3290,
    originalPrice: 4200,
    image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    details: [
      '100% fine cotton',
      'Kalamkari inspired prints',
      'Adjustable wrap/tie crop blouse',
      'Flared tiered skirt',
      'Wash in cold water'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },

  // ETHNIC DRESSES
  {
    id: 'ed1',
    name: 'Deep Purple Fuchsia Halter Dress',
    category: 'Ethnic Dresses',
    description: 'An elegant halter-neck gown in deep fuchsia purple, decorated with gold foil accents along the tiered gathers and hemline.',
    price: 2899,
    originalPrice: 3800,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    details: [
      'Soft rayon crepe fabric',
      'Chic halter neck detailing',
      'Foil-printed tiers and accents',
      'Perfect one-piece festive dress',
      'Dry clean or cold wash'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ed2',
    name: 'Sky Blue Indigo Midi Dress',
    category: 'Ethnic Dresses',
    description: 'A refreshing light-blue midi dress in organic cotton, featuring beautiful indigo handblock prints and a fabric belt.',
    price: 1890,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
    details: [
      'Organic slub cotton',
      'Indigo handblock printing',
      'Smart midi length with front buttons',
      'Matching fabric waist tie belt',
      'Wash separately'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 'ed3',
    name: 'Peach Coral Printed Maxi Dress',
    category: 'Ethnic Dresses',
    description: 'A light and flowy peach coral flared maxi dress featuring delicate floral motifs, ruffled sleeve hems, and a smart collared neckline.',
    price: 2490,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    details: [
      'Premium muslin fabric',
      'Elegant ruffle details',
      'Collared shirt-dress design',
      'Belt detailing on waist',
      'Hand wash safe'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 'ed4',
    name: 'Crimson Rose Floral Dress',
    category: 'Ethnic Dresses',
    description: 'A showstopper crimson red flared maxi dress printed with handblock rose patterns and borders, ideal for elegant evenings.',
    price: 2750,
    originalPrice: 3600,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop',
    details: [
      'Premium cotton fabric',
      'Stunning block printed rose panels',
      'Sweetheart neckline with pipings',
      'Calf-length flared dress',
      'Wash inside out'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },

  // TUNICS
  {
    id: 't1',
    name: 'White Meadows Embroidered Tunic',
    category: 'Tunics',
    description: 'A pristine white cotton short tunic featuring delicate self-colored thread embroidery on the yoke and sleeves.',
    price: 1199,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop',
    details: [
      'Light cotton mul fabric',
      'Elegant tone-on-tone embroidery',
      'Hip-length short design',
      'Comfortable loose fitting',
      'Normal home wash'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 't2',
    name: 'Lilac Grace Printed Cotton Tunic',
    category: 'Tunics',
    description: 'A charming short tunic in lilac purple decorated with floral patterns, high-low hem, and a buttoned front.',
    price: 999,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    details: [
      '100% Cotton fabric',
      'Trendy high-low hemline',
      'Classic collar neck structure',
      'Lilac ethnic floral prints',
      'Machine wash'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  },
  {
    id: 't3',
    name: 'Teal Meadow Cotton Slub Tunic',
    category: 'Tunics',
    description: 'A sophisticated teal blue tunic featuring a band collar and delicate pin-tucks on the front chest panel.',
    price: 1250,
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    details: [
      'Slub cotton fabric',
      'Front pin-tuck details',
      'Mandarin collar with V cutout',
      'Side slits, 3/4 sleeves',
      'Color-fast wash'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    available: true
  },
  {
    id: 't4',
    name: 'Mint Breeze Georgette Tunic',
    category: 'Tunics',
    description: 'A semi-sheer mint green georgette short tunic featuring a relaxed silhouette and gold bead outline details on the neckline.',
    price: 1350,
    originalPrice: 1800,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    details: [
      'Faux georgette fabric',
      'Delicate golden bead linings',
      'Comes with standard inner spaghetti lining',
      'Flared bell sleeve detail',
      'Dry clean or gentle hand wash'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    available: true
  }
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  // Return the first product from each category to show on the main page
  const featuredIds = ['k1', 'ks1', 'a1', 'ss1', 'ed1', 't1'];
  return products.filter(p => featuredIds.includes(p.id));
}
