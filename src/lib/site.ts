export const site = {
  name: "Aurum Noir",
  legalName: "Aurum Noir Desk (demonstration site)",
  tagline: "From African ground to global hands.",
  url: "https://aurumnoir.house",
  email: "desk@aurumnoir.house",
  phone: "+44 20 0000 0000",
  address: "By appointment · London · Accra · Johannesburg",
  description:
    "An African gold-mine owner and authorised broker connecting verified mines and legitimate sellers with qualified refiners, bullion dealers, jewellery manufacturers, institutional buyers, and investors.",
};

export const nav = [
  { href: "/", label: "House" },
  { href: "/mining", label: "Origin" },
  { href: "/supply-chain", label: "Supply chain" },
  { href: "/sellers", label: "Sellers" },
  { href: "/buyers", label: "Buyers" },
  { href: "/market", label: "Market" },
  { href: "/calculator", label: "Calculator" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/about", label: "Broker" },
  { href: "/contact", label: "Mandate" },
] as const;

export const sellHref = "/sellers";
export const buyHref = "/buyers";

export const photos = {
  pit: "/photos/pit.jpg",
  bars: "/photos/bars.jpg",
  grain: "/photos/bars.jpg",
  mill: "/photos/truck.jpg",
  plant: "/photos/aerial.jpg",
  vault: "/photos/bars.jpg",
  jewellery: "/photos/jewellery.jpg",
  signet: "/photos/jewellery.jpg",
  coins: "/photos/coins.jpg",
  nugget: "/photos/bars.jpg",
  range: "/photos/range.jpg",
  ridge: "/photos/ridge.jpg",
  dusk: "/photos/dusk.jpg",
  savanna: "/photos/savanna.jpg",
  earth: "/photos/range.jpg",
  truck: "/photos/truck.jpg",
  aerial: "/photos/aerial.jpg",
};

export const opportunities = [
  {
    id: "dore",
    name: "Mine doré",
    form: "Doré bars",
    purity: "80–95% Au indicative",
    origin: "West Africa · demonstration",
    volume: "Trial 25–50 kg",
    stage: "Mine gate / bonded store",
    status: "Origin file in preparation",
    image: photos.bars,
  },
  {
    id: "bullion",
    name: "Refinery-delivered bullion",
    form: "999.9 cast / minted",
    purity: "999.0–999.9",
    origin: "Receiving LBMA-accredited house",
    volume: "Subject to mandate",
    stage: "After final assay",
    status: "Buyer-qualified only",
    image: photos.nugget,
  },
  {
    id: "concentrate",
    name: "Gold concentrate",
    form: "Gravity / flotation concentrate",
    purity: "Variable · assay-led",
    origin: "Southern Africa · demonstration",
    volume: "Lot-based",
    stage: "Plant, pre-export",
    status: "Independent assay required",
    image: photos.grain,
  },
  {
    id: "recurring",
    name: "Recurring mine production",
    form: "Scheduled doré",
    purity: "As poured",
    origin: "Licensed African operations",
    volume: "Monthly offtake discussion",
    stage: "Production calendar",
    status: "Licence review first",
    image: photos.pit,
  },
  {
    id: "trial",
    name: "Trial-lot opportunity",
    form: "Small controlled parcel",
    purity: "Assay on arrival",
    origin: "Named mine after NDA",
    volume: "Typically 5–25 kg Au equivalent",
    stage: "Structured first lift",
    status: "Demonstration structure",
    image: photos.mill,
  },
  {
    id: "refinery",
    name: "Refinery-delivered supply",
    form: "Allocated metal",
    purity: "Good-delivery equivalent",
    origin: "Refinery location of record",
    volume: "Mandate-defined",
    stage: "Post-refine",
    status: "Not an inventory claim",
    image: photos.plant,
  },
] as const;

export const materials = [
  {
    title: "Ore",
    copy: "Host rock is logged before it is flattered. Grade is a measurement taken in core and cuttings, not a story written after the blast.",
    image: photos.mill,
  },
  {
    title: "Concentrate",
    copy: "Gravity and flotation lift the metal into a smaller, heavier parcel. Moisture, mass, and sample splits travel with the lot.",
    image: photos.grain,
  },
  {
    title: "Doré",
    copy: "The first pour is still a mixture. Serials, weights, and melt cards are the beginning of title — not the end of due diligence.",
    image: photos.bars,
  },
  {
    title: "Assay",
    copy: "Independent fire assay or XRF is a control point, not a marketing line. Buyer and seller should agree the umpire laboratory before metal moves.",
    image: photos.nugget,
  },
  {
    title: "Refine",
    copy: "A receiving house inspects, melts, and reports. Until then, purity is an estimate and settlement is incomplete.",
    image: photos.plant,
  },
  {
    title: "Mint and jewellery",
    copy: "Cast bars, minted coins, and fabrication sit after refining. Retail premia are not the same number as a mine-gate parcel.",
    image: photos.jewellery,
  },
] as const;

export const miningSteps = [
  {
    n: "01",
    title: "Geological exploration",
    copy: "Mapping, geophysics, and drilling test whether a reef exists. No production story begins here as a promise of ounces.",
  },
  {
    n: "02",
    title: "Resource definition",
    copy: "Measured, indicated, and inferred categories describe confidence — not a warehouse of metal.",
  },
  {
    n: "03",
    title: "Licensing and mine planning",
    copy: "Mineral rights, environmental authorisations, and a mine plan decide whether extraction is lawful.",
  },
  {
    n: "04",
    title: "Extraction",
    copy: "Open pit or underground. Blast patterns, grade control, and dilution decide what actually reaches the mill.",
  },
  {
    n: "05",
    title: "Crushing and processing",
    copy: "Ore is reduced so gold can be liberated. Water, reagents, and tailings become part of the operating ledger.",
  },
  {
    n: "06",
    title: "Recovery and concentration",
    copy: "Gravity, flotation, or leach circuits concentrate metal. Recovery rates are empirical, not decorative.",
  },
  {
    n: "07",
    title: "Doré production",
    copy: "Smelting produces a bar that still requires independent assay and a receiving refinery.",
  },
  {
    n: "08",
    title: "Assay and quality verification",
    copy: "Split samples, umpire labs, and sealed bags protect both sides when the number on the bar is disputed.",
  },
  {
    n: "09",
    title: "Environmental rehabilitation",
    copy: "Closure bonds, water, and landform restoration are operating costs, not afterthoughts.",
  },
  {
    n: "10",
    title: "Community and workforce",
    copy: "Lawful labour, no child labour, and documented community agreements are conditions of a credible route to market.",
  },
] as const;

export const logistics = [
  {
    n: "01",
    title: "Mine production",
    party: "Licensed operator",
    evidence: "Shift logs, weights, serials",
    risk: "Undeclared production",
    control: "Site dual control",
  },
  {
    n: "02",
    title: "Initial assay",
    party: "Mine lab / independent",
    evidence: "Certificate, sample splits",
    risk: "Biased grade",
    control: "Umpire protocol",
  },
  {
    n: "03",
    title: "Aggregation and secure storage",
    party: "Vault or bonded store",
    evidence: "Inward receipt, CCTV, dual keys",
    risk: "Substitution",
    control: "Seal numbers",
  },
  {
    n: "04",
    title: "Seller and origin documentation",
    party: "Seller counsel / broker",
    evidence: "Title, BO, licences",
    risk: "Opaque ownership",
    control: "KYC file",
  },
  {
    n: "05",
    title: "Export permits and tax",
    party: "Exporter of record",
    evidence: "Permits, royalties, invoices",
    risk: "Illicit export",
    control: "Government filings",
  },
  {
    n: "06",
    title: "Customs clearance",
    party: "Customs broker",
    evidence: "Export declaration",
    risk: "Misdeclaration",
    control: "HS code + assay",
  },
  {
    n: "07",
    title: "Insured secure transport",
    party: "Specialist carrier",
    evidence: "Policy, itinerary, seals",
    risk: "Loss in transit",
    control: "All-risk cover",
  },
  {
    n: "08",
    title: "Receiving-refinery inspection",
    party: "Refinery intake",
    evidence: "Weight, seals, photos",
    risk: "Damaged lot",
    control: "Joint inspection",
  },
  {
    n: "09",
    title: "Final refinery assay",
    party: "Refinery laboratory",
    evidence: "Settlement assay",
    risk: "Pay-metal dispute",
    control: "Contractual umpire",
  },
  {
    n: "10",
    title: "Refining",
    party: "Accredited refinery",
    evidence: "Outturn, account metal",
    risk: "Unallocated confusion",
    control: "Allocated instruction",
  },
  {
    n: "11",
    title: "Fabrication",
    party: "Mint / manufacturer",
    evidence: "Bar list, hallmarks",
    risk: "Wrong product form",
    control: "Specification sheet",
  },
  {
    n: "12",
    title: "Wholesale distribution",
    party: "Dealer / offtaker",
    evidence: "Invoice, title transfer",
    risk: "Failed settlement",
    control: "PvP / escrow counsel",
  },
  {
    n: "13",
    title: "Retail or custody",
    party: "Retailer / custodian",
    evidence: "Allocated statement",
    risk: "Pool-account opacity",
    control: "Named bars",
  },
] as const;

export const sellerPath = [
  "Introduce the mine or authorised seller",
  "Verify corporate and beneficial ownership",
  "Confirm mining or dealer licences",
  "Document production and product form",
  "Obtain an independent assay",
  "Establish legal export capability",
  "Build a controlled opportunity data room",
  "Match with suitable qualified buyers",
];

export const buyerPath = [
  "Submit a precise buyer mandate",
  "Complete KYC and capability checks",
  "Define product, purity, and volume",
  "Define destination and receiving refinery",
  "Confirm pricing basis and settlement method",
  "Review suitable opportunities",
  "Structure a controlled trial lot",
  "Independent legal and compliance review",
];

export const sourcing = [
  {
    title: "Licensing",
    copy: "Mining, dealing, and export authorities must be current and attributable to the seller of record.",
  },
  {
    title: "Beneficial ownership",
    copy: "Natural persons behind the vehicle are identified. Nominee opacity is a stop, not a delay.",
  },
  {
    title: "KYC and AML",
    copy: "Buyer and seller files follow a risk-based approach. We coordinate; we are not your bank’s MLRO.",
  },
  {
    title: "Sanctions",
    copy: "Parties, vessels, banks, and corridors are screened before metal or money is instructed to move.",
  },
  {
    title: "Human rights",
    copy: "Child labour is prohibited. Conflict and forced-labour red flags halt an introduction.",
  },
  {
    title: "Environment",
    copy: "Water, tailings, mercury, and cyanide practices are documented. Illegal processing is not dressed as artisanal heritage.",
  },
  {
    title: "Community",
    copy: "Agreements, grievances, and workforce conditions sit in the data room with the assay.",
  },
  {
    title: "Assay and custody",
    copy: "Independent assay, seals, insurance, and a receiving refinery are control points — not optional theatre.",
  },
  {
    title: "Legal export",
    copy: "Royalties, permits, and customs must exist in fact. Paper from a café is not an export file.",
  },
  {
    title: "Settlement",
    copy: "Title transfer follows contracted inspection. Advance fees for mythical permits are a scam pattern.",
  },
] as const;

export const marketSources = [
  {
    name: "Yahoo Finance",
    href: "https://finance.yahoo.com/quote/GC=F",
    note: "COMEX gold futures (GC=F)",
  },
  {
    name: "Investing.com",
    href: "https://www.investing.com/commodities/gold",
    note: "Gold futures and related quotes",
  },
  {
    name: "GoldPrice.org",
    href: "https://goldprice.org",
    note: "Published gold price references",
  },
];

export const guidance = [
  {
    name: "LBMA Responsible Gold Guidance",
    href: "https://www.lbma.org.uk/responsible-sourcing/gold",
  },
  {
    name: "OECD Due Diligence Guidance",
    href: "https://www.oecd.org/en/topics/policy-issues/due-diligence.html",
  },
  {
    name: "World Gold Council RGMP",
    href: "https://www.gold.org/responsible-gold-mining-principles",
  },
];
