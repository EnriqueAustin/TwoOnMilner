export const BOOKING_URL = "https://www.booking.com/hotel/za/two-on-milner.en-gb.html";

export const CONTACT = {
  name: "Two on Milner",
  subtitle: "Oak Tree & Arum Cottage",
  address: "2 Milner Road, Rondebosch, Cape Town, 7700",
  phone: "+27 82 454 4001",
  email: "info@2onmilner.capetown",
  website: "https://2onmilner.capetown/",
  whatsapp:
    "https://wa.me/27824544001?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20availability%20at%20Two%20on%20Milner.",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Cottages", path: "/rooms" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Facilities", path: "/facilities" },
  { label: "Location", path: "/location" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

export const ROOMS = [
  {
    id: "oak-tree-cottage",
    name: "Oak Tree Cottage",
    price: "ZAR 3,510",
    refundablePrice: "ZAR 3,861",
    bookingRating: "9.2",
    reviewCount: "48 reviews",
    locationRating: "9.3",
    maxGuests: "2 adults",
    childPolicy: "Children welcome",
    size: "50 m²",
    type: "One-bedroom apartment",
    description:
      "A generous open-plan cottage with a queen bed, exposed brick, soft sage finishes, a kitchenette, work desk, private patio, and garden, pool, mountain, or courtyard views.",
    longDescription:
      "Oak Tree Cottage is the more apartment-like stay: spacious, self-contained, and calm. It suits guests who want a private Rondebosch base with a kitchenette, lounge area, bath or shower, daily housekeeping, and a terrace for slow mornings under the trees.",
    amenities: [
      "Queen Bed",
      "Private Kitchenette",
      "Bath or Shower",
      "Patio & Terrace",
      "Streaming TV",
      "Daily Housekeeping",
    ],
    badge: "50 m² · Self-contained",
    image: "/images/OAKTREECOTTAGE/490410722.jpg",
    gallery: [
      "/images/OAKTREECOTTAGE/490410722.jpg",
      "/images/OAKTREECOTTAGE/490410855.jpg",
      "/images/OAKTREECOTTAGE/490410720.jpg",
      "/images/OAKTREECOTTAGE/490410717.jpg",
    ],
  },
  {
    id: "arum-cottage",
    name: "Arum Cottage",
    price: "ZAR 3,150",
    refundablePrice: "ZAR 3,402",
    bookingRating: "9.0",
    reviewCount: "53 reviews",
    locationRating: "9.6",
    maxGuests: "2 adults",
    childPolicy: "Adults only",
    size: "48 m²",
    type: "Double room",
    description:
      "A light, boutique open-plan cottage with a large double bed, private bathroom, tea and coffee station, refrigerator, terrace, and the same quiet garden setting.",
    longDescription:
      "Arum Cottage is serene and polished: a spacious double room with private bathroom, outdoor seating, wardrobe, refrigerator, kettle, and daily housekeeping. It is ideal for couples, course attendees, and business travellers wanting a refined hideaway close to the airport and southern suburbs.",
    amenities: [
      "Large Double Bed",
      "Private Bathroom",
      "Terrace",
      "Tea & Coffee",
      "Refrigerator",
      "Free WiFi",
    ],
    badge: "48 m² · Guesthouse suite",
    image: "/images/ARUMCOTTAGE/490416797.jpg",
    gallery: [
      "/images/ARUMCOTTAGE/490416797.jpg",
      "/images/ARUMCOTTAGE/490416780.jpg",
      "/images/ARUMCOTTAGE/490416783.jpg",
      "/images/ARUMCOTTAGE/490416772.jpg",
    ],
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/OAKTREECOTTAGE/490410722.jpg", category: "Garden & Facade", caption: "White cottage facade framed by garden planting" },
  { src: "/images/ARUMCOTTAGE/490416793.jpg", category: "Garden & Facade", caption: "Covered cottage walkway at Two on Milner" },
  { src: "/images/OAKTREECOTTAGE/490410864.jpg", category: "Garden & Facade", caption: "Private terrace entrance under the trees" },
  { src: "/images/ARUMCOTTAGE/490416799.jpg", category: "Garden & Facade", caption: "Leafy Rondebosch cottage detail" },
  { src: "/images/OAKTREECOTTAGE/490410555.jpg", category: "Oak Tree Cottage", caption: "Oak Tree kitchenette and dining nook" },
  { src: "/images/OAKTREECOTTAGE/490410715.jpg", category: "Oak Tree Cottage", caption: "Oak Tree bedroom with exposed brick" },
  { src: "/images/OAKTREECOTTAGE/490410720.jpg", category: "Oak Tree Cottage", caption: "Double vanity with ornate mirrors" },
  { src: "/images/OAKTREECOTTAGE/490410865.jpg", category: "Oak Tree Cottage", caption: "Sofa and streaming TV lounge area" },
  { src: "/images/OAKTREECOTTAGE/490410861.jpg", category: "Oak Tree Cottage", caption: "Tea station with sage tiles" },
  { src: "/images/ARUMCOTTAGE/490416778.jpg", category: "Arum Cottage", caption: "Arum dining and kitchenette detail" },
  { src: "/images/ARUMCOTTAGE/490416780.jpg", category: "Arum Cottage", caption: "Arum bedroom with brick feature wall" },
  { src: "/images/ARUMCOTTAGE/490416783.jpg", category: "Arum Cottage", caption: "Fresh flowers and open-plan dining" },
  { src: "/images/ARUMCOTTAGE/490416784.jpg", category: "Arum Cottage", caption: "Compact lounge corner and TV" },
  { src: "/images/ARUMCOTTAGE/490416787.jpg", category: "Arum Cottage", caption: "In-room coffee and tea station" },
  { src: "/images/OAKTREECOTTAGE/490410721.jpg", category: "Garden & Facade", caption: "Arum lilies in the garden" },
  { src: "/images/ARUMCOTTAGE/490416791.jpg", category: "Garden & Facade", caption: "White arums from the garden" },
];

export const REVIEWS = [
  {
    text: "I loved the spacious room and rustling trees. This is a gem!",
    author: "Sylvia, South Africa",
  },
  {
    text: "Very well done, comfortable and clean, well serviced by the very friendly and helpful owners.",
    author: "Mark, United Kingdom",
  },
  {
    text: "Such a tranquil gorgeous hidden gem. Home away from home.",
    author: "Kholofelo, South Africa",
  },
  {
    text: "The cottage is beautifully decorated, well equipped and very comfortable.",
    author: "Emily, Italy",
  },
  {
    text: "Beautiful and spacious rooms, friendly service and convenient location.",
    author: "Lungile, South Africa",
  },
  {
    text: "Modern, clean, hosts very friendly and helpful. We will visit you again next year.",
    author: "Knoesen, South Africa",
  },
];

export const FAQ_ITEMS = [
  {
    q: "What are the check-in and check-out times?",
    a: "Oak Tree Cottage check-in is from 14:00 to 19:00. Arum Cottage check-in is from 14:00 to 18:00. Check-out is generally between 09:00 or 10:00 and 11:00, depending on the cottage.",
  },
  {
    q: "Is breakfast served?",
    a: "The cottages are self-catering style stays. Both include in-room tea and coffee facilities, and Oak Tree Cottage includes a private kitchenette.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Free private on-site parking is available. Oak Tree notes that reservation is not needed, while Arum notes parking reservation may be required.",
  },
  {
    q: "Do the cottages have WiFi?",
    a: "Yes. Free WiFi is available throughout the property.",
  },
  {
    q: "Are children allowed?",
    a: "Oak Tree Cottage welcomes children, although cribs and extra beds are not available. Arum Cottage is listed as adults-only.",
  },
  {
    q: "Are pets allowed?",
    a: "No. Pets are not allowed at the property.",
  },
  {
    q: "Is smoking allowed?",
    a: "No. The property is non-smoking throughout.",
  },
  {
    q: "How far is the property from Cape Town International Airport?",
    a: "The property is approximately 14 to 15 km from Cape Town International Airport, around 15 minutes by car depending on traffic.",
  },
  {
    q: "What attractions are nearby?",
    a: "Rondebosch Common, Common Ground Cafe, Irma Stern Museum, Groote Schuur, Newlands, Kirstenbosch National Botanical Garden, Table Mountain, and central Cape Town are all within easy reach.",
  },
  {
    q: "Can I host a party or event?",
    a: "No. Parties, bachelor or bachelorette groups, and similar events are not accommodated.",
  },
];
