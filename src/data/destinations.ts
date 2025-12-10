import { Locale } from '@/lib/i18n';

export interface Destination {
  slug: string;
  featured: boolean;
  // External Swedish sites for these destinations
  externalSvSite?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  translations: {
    [key in Locale]: {
      name: string;
      description: string;
      shortDescription: string;
    };
  };
}

export const destinations: Destination[] = [
  {
    slug: 'benidorm',
    featured: true,
    externalSvSite: 'https://benidorm.se',
    coordinates: { lat: 38.5411, lng: -0.1225 },
    translations: {
      sv: {
        name: 'Benidorm',
        description: 'Benidorm är Costa Blancas mest populära badort med fantastiska stränder, pulserande nattliv och ett brett utbud av hotell för alla budgetar.',
        shortDescription: 'Spaniens mest populära badort med fantastiska stränder och nattliv',
      },
      en: {
        name: 'Benidorm',
        description: 'Benidorm is Costa Blanca\'s most popular beach resort with fantastic beaches, vibrant nightlife, and a wide range of hotels for all budgets.',
        shortDescription: 'Spain\'s most popular beach resort with amazing beaches and nightlife',
      },
      de: {
        name: 'Benidorm',
        description: 'Benidorm ist Costa Blancas beliebtester Badeort mit fantastischen Stränden, pulsierendem Nachtleben und einer großen Auswahl an Hotels für jedes Budget.',
        shortDescription: 'Spaniens beliebtester Badeort mit tollen Stränden und Nachtleben',
      },
      no: {
        name: 'Benidorm',
        description: 'Benidorm er Costa Blancas mest populære badeby med fantastiske strender, pulserende natteliv og et bredt utvalg av hoteller for alle budsjetter.',
        shortDescription: 'Spanias mest populære badeby med fantastiske strender og natteliv',
      },
    },
  },
  {
    slug: 'javea',
    featured: true,
    externalSvSite: 'https://javea.se',
    coordinates: { lat: 38.7894, lng: 0.1660 },
    translations: {
      sv: {
        name: 'Jávea',
        description: 'Jávea är en charmig kuststad känd för sin vackra natur, kristallklara vatten och autentiska spanska atmosfär. Perfekt för familjer och naturälskare.',
        shortDescription: 'Charmig kuststad med kristallklart vatten och autentisk atmosfär',
      },
      en: {
        name: 'Jávea',
        description: 'Jávea is a charming coastal town known for its beautiful nature, crystal-clear waters, and authentic Spanish atmosphere. Perfect for families and nature lovers.',
        shortDescription: 'Charming coastal town with crystal-clear waters and authentic atmosphere',
      },
      de: {
        name: 'Jávea',
        description: 'Jávea ist eine charmante Küstenstadt, bekannt für ihre schöne Natur, kristallklares Wasser und authentische spanische Atmosphäre. Perfekt für Familien und Naturliebhaber.',
        shortDescription: 'Charmante Küstenstadt mit kristallklarem Wasser und authentischer Atmosphäre',
      },
      no: {
        name: 'Jávea',
        description: 'Jávea er en sjarmerende kystby kjent for sin vakre natur, krystallklart vann og autentisk spansk atmosfære. Perfekt for familier og naturelskere.',
        shortDescription: 'Sjarmerende kystby med krystallklart vann og autentisk atmosfære',
      },
    },
  },
  {
    slug: 'la-zenia',
    featured: true,
    externalSvSite: 'https://lazenia.se',
    coordinates: { lat: 37.9267, lng: -0.7350 },
    translations: {
      sv: {
        name: 'La Zenia',
        description: 'La Zenia erbjuder vackra stränder, utmärkt shopping på La Zenia Boulevard och ett avslappnat semesterliv. Populärt bland skandinaver.',
        shortDescription: 'Vackra stränder och utmärkt shopping på Costa Blanca Syd',
      },
      en: {
        name: 'La Zenia',
        description: 'La Zenia offers beautiful beaches, excellent shopping at La Zenia Boulevard, and a relaxed holiday atmosphere. Popular among Scandinavians.',
        shortDescription: 'Beautiful beaches and excellent shopping on Costa Blanca South',
      },
      de: {
        name: 'La Zenia',
        description: 'La Zenia bietet schöne Strände, hervorragendes Einkaufen im La Zenia Boulevard und eine entspannte Urlaubsatmosphäre. Beliebt bei Skandinaviern.',
        shortDescription: 'Schöne Strände und hervorragendes Einkaufen an der Costa Blanca Süd',
      },
      no: {
        name: 'La Zenia',
        description: 'La Zenia tilbyr vakre strender, utmerket shopping på La Zenia Boulevard og en avslappet ferieatmosfære. Populært blant skandinaver.',
        shortDescription: 'Vakre strender og utmerket shopping på Costa Blanca Syd',
      },
    },
  },
  {
    slug: 'alicante',
    featured: true,
    coordinates: { lat: 38.3452, lng: -0.4810 },
    translations: {
      sv: {
        name: 'Alicante',
        description: 'Alicante är Costa Blancas huvudstad med historiska Santa Barbara-slottet, vacker strandpromenad och livlig atmosfär. En perfekt mix av kultur och strand.',
        shortDescription: 'Costa Blancas huvudstad med historia, kultur och fantastiska stränder',
      },
      en: {
        name: 'Alicante',
        description: 'Alicante is the capital of Costa Blanca with the historic Santa Barbara Castle, beautiful promenade, and lively atmosphere. A perfect mix of culture and beach.',
        shortDescription: 'Costa Blanca\'s capital with history, culture, and fantastic beaches',
      },
      de: {
        name: 'Alicante',
        description: 'Alicante ist die Hauptstadt der Costa Blanca mit der historischen Burg Santa Barbara, schöner Promenade und lebhafter Atmosphäre. Eine perfekte Mischung aus Kultur und Strand.',
        shortDescription: 'Costa Blancas Hauptstadt mit Geschichte, Kultur und fantastischen Stränden',
      },
      no: {
        name: 'Alicante',
        description: 'Alicante er hovedstaden på Costa Blanca med det historiske Santa Barbara-slottet, vakker strandpromenade og livlig atmosfære. En perfekt blanding av kultur og strand.',
        shortDescription: 'Costa Blancas hovedstad med historie, kultur og fantastiske strender',
      },
    },
  },
  {
    slug: 'calpe',
    featured: true,
    coordinates: { lat: 38.6447, lng: 0.0445 },
    translations: {
      sv: {
        name: 'Calpe',
        description: 'Calpe är känt för den imponerande klippan Peñón de Ifach, fina stränder och charmig gammal stad. En favorit bland både badgäster och vandrare.',
        shortDescription: 'Dramatisk klippa, fina stränder och charmig gammal stad',
      },
      en: {
        name: 'Calpe',
        description: 'Calpe is known for the impressive Peñón de Ifach rock, fine beaches, and charming old town. A favorite among beach lovers and hikers alike.',
        shortDescription: 'Dramatic rock formation, fine beaches, and charming old town',
      },
      de: {
        name: 'Calpe',
        description: 'Calpe ist bekannt für den beeindruckenden Felsen Peñón de Ifach, feine Strände und eine charmante Altstadt. Ein Favorit bei Strandliebhabern und Wanderern.',
        shortDescription: 'Dramatische Felsformation, feine Strände und charmante Altstadt',
      },
      no: {
        name: 'Calpe',
        description: 'Calpe er kjent for den imponerende klippen Peñón de Ifach, fine strender og sjarmerende gamlebyen. En favoritt blant både strandgjester og turgåere.',
        shortDescription: 'Dramatisk klippe, fine strender og sjarmerende gamleby',
      },
    },
  },
  {
    slug: 'altea',
    featured: true,
    coordinates: { lat: 38.5989, lng: -0.0513 },
    translations: {
      sv: {
        name: 'Altea',
        description: 'Altea är en konstnärsby med vitkallade hus, kullerstensgator och fantastisk utsikt. Känd som Costa Blancas vackraste by.',
        shortDescription: 'Pittoresk konstnärsby med vitkallade hus och fantastisk utsikt',
      },
      en: {
        name: 'Altea',
        description: 'Altea is an artist village with whitewashed houses, cobblestone streets, and fantastic views. Known as Costa Blanca\'s most beautiful village.',
        shortDescription: 'Picturesque artist village with whitewashed houses and fantastic views',
      },
      de: {
        name: 'Altea',
        description: 'Altea ist ein Künstlerdorf mit weißgetünchten Häusern, Kopfsteinpflasterstraßen und fantastischer Aussicht. Bekannt als Costa Blancas schönstes Dorf.',
        shortDescription: 'Malerisches Künstlerdorf mit weißgetünchten Häusern und fantastischer Aussicht',
      },
      no: {
        name: 'Altea',
        description: 'Altea er en kunstnerby med hvitkalkede hus, brosteingater og fantastisk utsikt. Kjent som Costa Blancas vakreste landsby.',
        shortDescription: 'Pittoresk kunstnerby med hvitkalkede hus og fantastisk utsikt',
      },
    },
  },
  {
    slug: 'torrevieja',
    featured: true,
    coordinates: { lat: 37.9786, lng: -0.6822 },
    translations: {
      sv: {
        name: 'Torrevieja',
        description: 'Torrevieja är känt för sina rosa saltsjöar, långa stränder och stora skandinaviska community. Perfekt för långtidsvistelse.',
        shortDescription: 'Rosa saltsjöar, långa stränder och stor skandinavisk community',
      },
      en: {
        name: 'Torrevieja',
        description: 'Torrevieja is known for its pink salt lakes, long beaches, and large Scandinavian community. Perfect for long-term stays.',
        shortDescription: 'Pink salt lakes, long beaches, and large Scandinavian community',
      },
      de: {
        name: 'Torrevieja',
        description: 'Torrevieja ist bekannt für seine rosa Salzseen, langen Strände und große skandinavische Gemeinschaft. Perfekt für Langzeitaufenthalte.',
        shortDescription: 'Rosa Salzseen, lange Strände und große skandinavische Gemeinschaft',
      },
      no: {
        name: 'Torrevieja',
        description: 'Torrevieja er kjent for sine rosa saltsjøer, lange strender og stort skandinavisk miljø. Perfekt for langtidsopphold.',
        shortDescription: 'Rosa saltsjøer, lange strender og stort skandinavisk miljø',
      },
    },
  },
  {
    slug: 'denia',
    featured: true,
    coordinates: { lat: 38.8408, lng: 0.1056 },
    translations: {
      sv: {
        name: 'Dénia',
        description: 'Dénia erbjuder milslånga sandstränder, historiskt slott och utsökt gastronomi. Utgångspunkt för färjor till Balearerna.',
        shortDescription: 'Milslånga stränder, historiskt slott och utsökt gastronomi',
      },
      en: {
        name: 'Dénia',
        description: 'Dénia offers miles of sandy beaches, a historic castle, and exquisite gastronomy. Departure point for ferries to the Balearic Islands.',
        shortDescription: 'Miles of beaches, historic castle, and exquisite gastronomy',
      },
      de: {
        name: 'Dénia',
        description: 'Dénia bietet kilometerlange Sandstrände, eine historische Burg und exquisite Gastronomie. Ausgangspunkt für Fähren zu den Balearen.',
        shortDescription: 'Kilometerlange Strände, historische Burg und exquisite Gastronomie',
      },
      no: {
        name: 'Dénia',
        description: 'Dénia tilbyr milevis med sandstrender, historisk slott og utsøkt gastronomi. Utgangspunkt for ferger til Balearene.',
        shortDescription: 'Milevis med strender, historisk slott og utsøkt gastronomi',
      },
    },
  },
  // Secondary destinations
  {
    slug: 'albir',
    featured: false,
    coordinates: { lat: 38.5672, lng: -0.0670 },
    translations: {
      sv: {
        name: 'Albir',
        description: 'Albir är en lugn badort mellan Benidorm och Altea med stenstrand och vacker strandpromenad.',
        shortDescription: 'Lugn badort med stenstrand och vacker promenad',
      },
      en: {
        name: 'Albir',
        description: 'Albir is a peaceful resort between Benidorm and Altea with a pebble beach and beautiful promenade.',
        shortDescription: 'Peaceful resort with pebble beach and beautiful promenade',
      },
      de: {
        name: 'Albir',
        description: 'Albir ist ein ruhiger Badeort zwischen Benidorm und Altea mit Kiesstrand und schöner Promenade.',
        shortDescription: 'Ruhiger Badeort mit Kiesstrand und schöner Promenade',
      },
      no: {
        name: 'Albir',
        description: 'Albir er et rolig badested mellom Benidorm og Altea med steinstrand og vakker strandpromenade.',
        shortDescription: 'Rolig badested med steinstrand og vakker promenade',
      },
    },
  },
  {
    slug: 'benissa',
    featured: false,
    coordinates: { lat: 38.7131, lng: 0.0489 },
    translations: {
      sv: {
        name: 'Benissa',
        description: 'Benissa är en charmig historisk stad med vacker kust och gömda vikar.',
        shortDescription: 'Charmig historisk stad med gömda vikar',
      },
      en: {
        name: 'Benissa',
        description: 'Benissa is a charming historic town with beautiful coastline and hidden coves.',
        shortDescription: 'Charming historic town with hidden coves',
      },
      de: {
        name: 'Benissa',
        description: 'Benissa ist eine charmante historische Stadt mit schöner Küste und versteckten Buchten.',
        shortDescription: 'Charmante historische Stadt mit versteckten Buchten',
      },
      no: {
        name: 'Benissa',
        description: 'Benissa er en sjarmerende historisk by med vakker kyst og skjulte bukter.',
        shortDescription: 'Sjarmerende historisk by med skjulte bukter',
      },
    },
  },
  {
    slug: 'cabo-roig',
    featured: false,
    coordinates: { lat: 37.9167, lng: -0.7333 },
    translations: {
      sv: {
        name: 'Cabo Roig',
        description: 'Cabo Roig har vackra klippstränder och den populära söndagsmarknaden.',
        shortDescription: 'Vackra klippstränder och populär söndagsmarknad',
      },
      en: {
        name: 'Cabo Roig',
        description: 'Cabo Roig has beautiful rocky beaches and the popular Sunday market.',
        shortDescription: 'Beautiful rocky beaches and popular Sunday market',
      },
      de: {
        name: 'Cabo Roig',
        description: 'Cabo Roig hat schöne Felsenstrände und den beliebten Sonntagsmarkt.',
        shortDescription: 'Schöne Felsenstrände und beliebter Sonntagsmarkt',
      },
      no: {
        name: 'Cabo Roig',
        description: 'Cabo Roig har vakre klippestrender og det populære søndagsmarkedet.',
        shortDescription: 'Vakre klippestrender og populært søndagsmarked',
      },
    },
  },
  {
    slug: 'campoamor',
    featured: false,
    coordinates: { lat: 37.8833, lng: -0.7500 },
    translations: {
      sv: {
        name: 'Campoamor',
        description: 'Campoamor är en exklusiv badort med golfbanor och marina.',
        shortDescription: 'Exklusiv badort med golf och marina',
      },
      en: {
        name: 'Campoamor',
        description: 'Campoamor is an exclusive resort with golf courses and marina.',
        shortDescription: 'Exclusive resort with golf and marina',
      },
      de: {
        name: 'Campoamor',
        description: 'Campoamor ist ein exklusiver Badeort mit Golfplätzen und Yachthafen.',
        shortDescription: 'Exklusiver Badeort mit Golf und Yachthafen',
      },
      no: {
        name: 'Campoamor',
        description: 'Campoamor er et eksklusivt feriested med golfbaner og marina.',
        shortDescription: 'Eksklusivt feriested med golf og marina',
      },
    },
  },
  {
    slug: 'ciudad-quesada',
    featured: false,
    coordinates: { lat: 38.0667, lng: -0.8000 },
    translations: {
      sv: {
        name: 'Ciudad Quesada',
        description: 'Ciudad Quesada är populärt bland utlandsboende med golf och nära till stränderna.',
        shortDescription: 'Populärt bland utlandsboende med golf',
      },
      en: {
        name: 'Ciudad Quesada',
        description: 'Ciudad Quesada is popular among expats with golf and close to beaches.',
        shortDescription: 'Popular among expats with golf',
      },
      de: {
        name: 'Ciudad Quesada',
        description: 'Ciudad Quesada ist bei Auswanderern beliebt mit Golf und Strandnähe.',
        shortDescription: 'Bei Auswanderern beliebt mit Golf',
      },
      no: {
        name: 'Ciudad Quesada',
        description: 'Ciudad Quesada er populært blant utlendinger med golf og nærhet til strendene.',
        shortDescription: 'Populært blant utlendinger med golf',
      },
    },
  },
  {
    slug: 'guardamar-del-segura',
    featured: false,
    coordinates: { lat: 38.0897, lng: -0.6544 },
    translations: {
      sv: {
        name: 'Guardamar del Segura',
        description: 'Guardamar har milslånga sandstränder kantade av pinjeskogar.',
        shortDescription: 'Milslånga stränder kantade av pinjeskogar',
      },
      en: {
        name: 'Guardamar del Segura',
        description: 'Guardamar has miles of sandy beaches lined with pine forests.',
        shortDescription: 'Miles of beaches lined with pine forests',
      },
      de: {
        name: 'Guardamar del Segura',
        description: 'Guardamar hat kilometerlange Sandstrände, gesäumt von Pinienwäldern.',
        shortDescription: 'Kilometerlange Strände gesäumt von Pinienwäldern',
      },
      no: {
        name: 'Guardamar del Segura',
        description: 'Guardamar har milevis med sandstrender kantet av furuskoger.',
        shortDescription: 'Milevis med strender kantet av furuskoger',
      },
    },
  },
  {
    slug: 'la-manga',
    featured: false,
    coordinates: { lat: 37.6431, lng: -0.7150 },
    translations: {
      sv: {
        name: 'La Manga',
        description: 'La Manga är en unik landtunga mellan Medelhavet och Mar Menor.',
        shortDescription: 'Unik landtunga mellan två hav',
      },
      en: {
        name: 'La Manga',
        description: 'La Manga is a unique sandbar between the Mediterranean and Mar Menor.',
        shortDescription: 'Unique sandbar between two seas',
      },
      de: {
        name: 'La Manga',
        description: 'La Manga ist eine einzigartige Landzunge zwischen Mittelmeer und Mar Menor.',
        shortDescription: 'Einzigartige Landzunge zwischen zwei Meeren',
      },
      no: {
        name: 'La Manga',
        description: 'La Manga er en unik landtunge mellom Middelhavet og Mar Menor.',
        shortDescription: 'Unik landtunge mellom to hav',
      },
    },
  },
  {
    slug: 'playa-flamenca',
    featured: false,
    coordinates: { lat: 37.9333, lng: -0.7500 },
    translations: {
      sv: {
        name: 'Playa Flamenca',
        description: 'Playa Flamenca erbjuder fina stränder och La Zenia Boulevard i närheten.',
        shortDescription: 'Fina stränder nära shopping',
      },
      en: {
        name: 'Playa Flamenca',
        description: 'Playa Flamenca offers fine beaches and La Zenia Boulevard nearby.',
        shortDescription: 'Fine beaches near shopping',
      },
      de: {
        name: 'Playa Flamenca',
        description: 'Playa Flamenca bietet feine Strände und La Zenia Boulevard in der Nähe.',
        shortDescription: 'Feine Strände nahe Einkaufsmöglichkeiten',
      },
      no: {
        name: 'Playa Flamenca',
        description: 'Playa Flamenca tilbyr fine strender og La Zenia Boulevard i nærheten.',
        shortDescription: 'Fine strender nær shopping',
      },
    },
  },
  {
    slug: 'santa-pola',
    featured: false,
    coordinates: { lat: 38.1917, lng: -0.5564 },
    translations: {
      sv: {
        name: 'Santa Pola',
        description: 'Santa Pola är en charmig fiskestad med saltsjöar och flamingos.',
        shortDescription: 'Fiskestad med saltsjöar och flamingos',
      },
      en: {
        name: 'Santa Pola',
        description: 'Santa Pola is a charming fishing town with salt lakes and flamingos.',
        shortDescription: 'Fishing town with salt lakes and flamingos',
      },
      de: {
        name: 'Santa Pola',
        description: 'Santa Pola ist eine charmante Fischerstadt mit Salzseen und Flamingos.',
        shortDescription: 'Fischerstadt mit Salzseen und Flamingos',
      },
      no: {
        name: 'Santa Pola',
        description: 'Santa Pola er en sjarmerende fiskerlandsby med saltsjøer og flamingoer.',
        shortDescription: 'Fiskerlandsby med saltsjøer og flamingoer',
      },
    },
  },
  {
    slug: 'villajoyosa',
    featured: false,
    coordinates: { lat: 38.5075, lng: -0.2342 },
    translations: {
      sv: {
        name: 'Villajoyosa',
        description: 'Villajoyosa är känd för sina färgglada hus och chokladtillverkning.',
        shortDescription: 'Färgglada hus och chokladtillverkning',
      },
      en: {
        name: 'Villajoyosa',
        description: 'Villajoyosa is known for its colorful houses and chocolate making.',
        shortDescription: 'Colorful houses and chocolate making',
      },
      de: {
        name: 'Villajoyosa',
        description: 'Villajoyosa ist bekannt für seine bunten Häuser und Schokoladenherstellung.',
        shortDescription: 'Bunte Häuser und Schokoladenherstellung',
      },
      no: {
        name: 'Villajoyosa',
        description: 'Villajoyosa er kjent for sine fargerike hus og sjokoladeproduksjon.',
        shortDescription: 'Fargerike hus og sjokoladeproduksjon',
      },
    },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}

export function getAllDestinations(): Destination[] {
  return destinations;
}
