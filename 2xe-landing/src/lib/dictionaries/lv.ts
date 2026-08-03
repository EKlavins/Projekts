import type { Dictionary } from "./types";

export const lv: Dictionary = {
  meta: {
    htmlLang: "lv",
    title: "2XE: plastmasas un metāla detaļu izgatavošana, 3D druka un skenēšana Rīgā",
    description:
      "Pilna cikla tehniskā 3D druka, detaļu projektēšana, 3D skenēšana un restaurācija. Plastmasa un metāls, drukas temperatūra līdz 390 °C. Rīga, piegāde visā Latvijā un Eiropā.",
    ogAlt: "2XE: tehniskā 3D druka un detaļu izgatavošana",
  },

  nav: {
    label: "Galvenā navigācija",
    services: "Pakalpojumi",
    work: "Darbi",
    materials: "Materiāli",
    process: "Process",
    capabilities: "Iespējas",
    contact: "Kontakti",
    cta: "Saņemt piedāvājumu",
    openMenu: "Atvērt izvēlni",
    closeMenu: "Aizvērt izvēlni",
    skipToContent: "Pāriet uz saturu",
    switchLanguage: "Switch to English",
  },

  hero: {
    eyebrow: "Piegāde visā Latvijā un Eiropā",
    titleLead: "No idejas līdz",
    titleAccent: "gatavai detaļai",
    subtitle:
      "Pilna cikla tehniskā 3D druka, detaļu projektēšana un 3D skenēšana. Izgatavojam plastmasas un metāla detaļas no skices uz papīra vai salauztas oriģināldetaļas līdz gatavam produktam.",
    primaryCta: "Saņemt piedāvājumu",
    secondaryCta: "Apskatīt materiālus",
    specs: [
      { value: "līdz 390 °C", label: "Drukas temperatūra" },
      { value: "0,2-0,8 mm", label: "Sprauslu diapazons" },
      { value: "STL · STEP · IGES", label: "Failu formāti" },
    ],
    /** Alt text for the decorative technical illustration. */
    figureAlt:
      "Tehniskais rasējums 3D drukātai detaļai ar izmēru līnijām un slāņu struktūru",
  },

  trust: {
    heading: "Nozares, kurām izgatavojam detaļas",
    industries: [
      { label: "Auto un moto", icon: "car" },
      { label: "Sadzīves tehnika", icon: "appliance" },
      { label: "Industriālās iekārtas", icon: "factory" },
      { label: "Elektronika", icon: "chip" },
      { label: "Hobiji un modelisms", icon: "hobby" },
      { label: "Ražošana", icon: "boxes" },
    ],
    stats: [
      {
        numeric: 390,
        suffix: " °C",
        label: "Maksimālā drukas temperatūra",
        note: "Ļauj strādāt ar PEEK un PEI",
      },
      {
        numeric: 14,
        suffix: "",
        label: "Materiālu veidi",
        note: "No PLA līdz oglekļa šķiedrai un metālam",
      },
      {
        numeric: 0.2,
        decimals: 1,
        suffix: " mm",
        label: "Minimālā sprausla",
        note: "Maksimālai detalizācijai",
      },
      {
        text: "LV + ES",
        label: "Piegādes zona",
        note: "Pakomāti un kurjers",
      },
    ],
  },

  services: {
    eyebrow: "Pakalpojumi",
    heading: "Viss ceļš no ieceres līdz detaļai jūsu rokās",
    subtitle:
      "Nav svarīgi, kurā posmā jūs atrodaties: ar ideju galvā vai ar gatavu rasējumu. Pārņemam projektu no tās vietas, kur tas ir.",
    items: [
      {
        icon: "cycle",
        title: "Pilna cikla izstrāde",
        body: "Realizējam jebkuru ieceri neatkarīgi no tā, vai jums ir tikai ideja, aptuveni izmēri, skice uz papīra vai gatavs rasējums.",
      },
      {
        icon: "scan",
        title: "3D skenēšana un kopēšana",
        body: "Sarežģītas formas vai salauztu detaļu ieskenējam un izveidojam precīzu 3D modeli tālākai ražošanai.",
      },
      {
        icon: "restore",
        title: "Restaurācija un aizvietošana",
        body: "Atjaunojam salauztas, nodilušas vai no ražošanas izņemtas plastmasas un metāla detaļas arī tad, ja oriģināls vairs nav nopērkams.",
      },
      {
        icon: "assembly",
        title: "Mezgli un mehānismi",
        body: "Stiprinājumi, korpusi, adapteri, kronšteini un augstas slodzes zobrati, kas iztur reālu ekspluatāciju.",
      },
      {
        icon: "metal",
        title: "Metāla detaļu izgatavošana",
        body: "Ja plastmasas izturība nav pietiekama, izgatavojam detaļu no alumīnija, tērauda vai cita metāla pēc tā paša 3D modeļa.",
      },
      {
        icon: "tune",
        title: "Modeļa optimizācija",
        body: "Sagatavojam un uzlabojam modeli pirms drukas. Sienu biezumu un pildījumu pielāgojam reālajām slodzēm, nevis noklusējuma iestatījumiem.",
      },
    ],
  },

  why: {
    eyebrow: "Kāpēc 2XE",
    heading: "Tehniskā druka, nevis suvenīru printēšana",
    subtitle:
      "Atšķirība starp detaļu, kas izskatās pareizi, un detaļu, kas strādā, ir materiālā un sagatavošanā. Mēs strādājam ar abiem.",
    items: [
      {
        title: "Industriāla temperatūra, ne hobija līmenis",
        body: "Drukas temperatūra līdz 390 °C nozīmē PEEK, PEI un oglekļa šķiedras kompozītus, ko standarta printeris fiziski nespēj apstrādāt.",
      },
      {
        title: "Nav faila? Nav problēmu",
        body: "Ieskenēsim esošo detaļu vai uzmodelēsim no nulles pēc skices, foto vai izmēriem. Jums nav jābūt inženierim.",
      },
      {
        title: "Projektējam slodzei, ne printerim",
        body: "Sienu biezumu, pildījumu un slāņu orientāciju pielāgojam reālajām slodzēm un ekspluatācijas apstākļiem, nevis noklusējuma profilam.",
      },
      {
        title: "Plastmasa un metāls vienuviet",
        body: "Viens 3D modelis, divi ražošanas ceļi. Ja plastmasa neiztur, tā pati detaļa nonāk metālā bez atkārtotas projektēšanas.",
      },
    ],
  },

  work: {
    eyebrow: "Darbi",
    heading: "Reāli projekti no mūsu darbgalda",
    subtitle:
      "Katrs no šiem modeļiem sākās ar esošu detaļu, skici vai izmēriem un beidzās ar gatavu, uzstādāmu detaļu.",
    items: {
      "vent-insert": {
        title: "Ventilācijas restes ieliktnis",
        body: "Oriģinālā detaļa ieskenēta, un uz skenējuma virsmas uzmodelētas jaunas žalūzijas, tāpēc jaunā detaļa precīzi atkārto oriģinālo formu.",
        tags: ["3D skenēšana", "Virsmu modelēšana"],
        alt: "Ventilācijas restes ieliktņa 3D modelis ar skenētu ārējo virsmu un modelētām žalūzijām",
      },
      "duct-elbow": {
        title: "Mitsubishi Lancer Evolution VI gaisa kanāls",
        body: "Oriģinālā detaļa ieskenēta, un pēc skenējuma modelis uzzīmēts no jauna, tā iegūstot precīzu, ražošanai gatavu gaisa kanālu.",
        tags: ["3D skenēšana", "Auto detaļa"],
        alt: "Mitsubishi Lancer Evolution VI gaisa kanāla 3D modelis, uzzīmēts pēc oriģinālās detaļas skenējuma",
      },
      "surface-model": {
        title: "Rekonstrukcija pēc skenējuma",
        body: "Modelis būvēts tieši uz skenējuma, izmantojot atskaites plaknes un šķērsgriezumus, tāpēc jaunā detaļa saderas ar esošo mezglu.",
        tags: ["Rekonstrukcija", "3D skenēšana"],
        alt: "Detaļas 3D modelis ar atskaites plaknēm un šķērsgriezuma skicēm",
      },
      "cad-session": {
        title: "Virsmu modelēšana CAD vidē",
        body: "Katra detaļa tiek uzbūvēta no virsmām un pārbaudīta pirms drukas, nevis vienkārši izgriezta no gatava faila.",
        tags: ["CAD", "Sagatavošana"],
        alt: "CAD programmas darba skats ar detaļas virsmu modeli un elementu koku",
      },
    },
  },

  materials: {
    eyebrow: "Materiāli",
    heading: "Materiāls katram uzdevumam",
    subtitle:
      "Pateicoties industriālajai drukas temperatūrai strādājam gan ar standarta plastmasām, gan ar augstākās izturības kompozītmateriāliem un metālu.",
    groups: [
      {
        name: "Standarta plastmasas",
        tags: ["PLA", "PETG"],
        body: "Ideāli piemēroti prototipiem, korpusiem un standarta detaļām, kur galvenais ir forma un cena.",
      },
      {
        name: "Inženiertehniskās plastmasas",
        tags: ["ABS", "ASA", "Nylon (PA)", "PC"],
        body: "UV un temperatūras izturīgas detaļas auto eksterjeram un interjeram. Poliamīds un polikarbonāts ir īpaši triecienizturīgi, tāpēc noder slīdgultņiem un zobratiem.",
      },
      {
        name: "Kompozīti un augstas temperatūras",
        tags: ["PA+CF", "PETG+CF", "PEEK", "PEI (Ultem)"],
        body: "Ar oglekļa šķiedru pastiprināti materiāli maksimālai strukturālajai stingrībai. Super-plastmasas ekstremāliem apstākļiem, ķīmiskajai un termoizturībai.",
        featured: true,
      },
      {
        name: "Elastīgie materiāli",
        tags: ["TPU", "TPE"],
        body: "Gumijotas detaļas, blīvējumi, bukses un amortizatori dažādās cietības pakāpēs.",
      },
      {
        name: "Metāls",
        tags: ["Alumīnijs", "Tērauds", "u.c."],
        body: "Ja plastmasas izturība nav pietiekama, izgatavojam detaļu no metāla pēc izstrādātā vai ieskenētā 3D modeļa.",
      },
    ],
    featuredBadge: "Augstākā izturība",
  },

  process: {
    eyebrow: "Process",
    heading: "Četri soļi līdz gatavai detaļai",
    steps: [
      {
        title: "Konsultācija",
        body: "Atsūtiet ideju, foto, skici, izmērus vai pašu detaļu. Kopā noskaidrojam, kādos apstākļos tā strādās.",
      },
      {
        title: "Modelis vai skenēšana",
        body: "Ja faila nav, ieskenējam esošo detaļu vai uzmodelējam no nulles. Strādājam ar STL, OBJ, STEP, IGES un citiem formātiem.",
      },
      {
        title: "Ražošana",
        body: "Izvēlamies materiālu un drukas parametrus atbilstoši slodzēm. Ja nepieciešams, izgatavojam metālā.",
      },
      {
        title: "Piegāde",
        body: "Nosūtām ar pakomātu vai kurjeru visā Latvijā un Eiropā. Rīgā iespējama saņemšana uz vietas.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Tehniskās iespējas",
    heading: "Skaitļi, pēc kuriem varat plānot projektu",
    subtitle:
      "Nekādu solījumu, tikai tehniskie parametri, ar kuriem strādājam katru dienu.",
    specs: [
      {
        label: "Drukas temperatūra",
        value: "līdz 390 °C",
        body: "Industriāls sprauslas bloks, kas ļauj strādāt ar PEEK, PEI un oglekļa šķiedras kompozītiem.",
      },
      {
        label: "Sprauslu diapazons",
        value: "0,2-0,8 mm",
        body: "0.2 mm maksimālai detalizācijai, 0.8 mm ātrumam un masīvām, izturīgām detaļām.",
      },
      {
        label: "Failu formāti",
        value: "STL · OBJ · STEP · IGES",
        body: "Strādājam arī ar citiem formātiem. Ja faila nav, ieskenēsim vai uztaisīsim no nulles.",
      },
      {
        label: "Materiālu klāsts",
        value: "14 veidi",
        body: "No PLA un PETG līdz PEEK, PEI, oglekļa šķiedras kompozītiem un metālam.",
      },
      {
        label: "Modeļa sagatavošana",
        value: "Iekļauta cenā",
        body: "Pildījums, sienu biezums un slāņu orientācija tiek pielāgoti pirms katras drukas.",
      },
      {
        label: "Piegāde",
        value: "Latvija un ES",
        body: "Pakomāti un kurjers. Rīgā iespējama saņemšana uz vietas.",
      },
    ],
  },

  cta: {
    heading: "Atsūtiet detaļu, skici vai vienkārši ideju",
    subtitle:
      "Novērtēsim iespējas un pateiksim, kā to izgatavot. Bez maksas un bez saistībām.",
    primary: "Rakstīt e-pastu",
    secondary: "Zvanīt",
    note: "Atbildam darba dienās 24 stundu laikā.",
  },

  footer: {
    tagline:
      "Plastmasas un metāla detaļu izgatavošana, modelēšana un 3D skenēšana. Pilna cikla tehniskā 3D druka Rīgā.",
    columns: {
      services: "Pakalpojumi",
      company: "Uzņēmums",
      contact: "Kontakti",
    },
    companyLinks: {
      process: "Kā tas notiek",
      capabilities: "Tehniskās iespējas",
      materials: "Materiāli",
    },
    location: "Rīga, Latvija",
    delivery: "Piegāde visā Latvijā un Eiropā",
    rights: "Visas tiesības aizsargātas.",
    socialLabel: "2XE sociālajos tīklos",
  },
};
