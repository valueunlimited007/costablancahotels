import { Locale } from '@/lib/i18n';

export interface Attraction {
  name: string;
  description: string;
  type: 'beach' | 'nature' | 'culture' | 'entertainment' | 'shopping';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DestinationContent {
  slug: string;
  translations: {
    [key in Locale]?: {
      longDescription: string;
      bestTimeToVisit: string;
      howToGetThere: string;
      attractions: Attraction[];
      beaches?: string[];
      faqs: FAQ[];
    };
  };
}

export const destinationContent: DestinationContent[] = [
  {
    slug: 'alicante',
    translations: {
      sv: {
        longDescription: `Alicante är Costa Blancas pulserande huvudstad och en perfekt kombination av historia, kultur och strandliv. Staden domineras av det imponerande Santa Barbara-slottet som tronar på berget Benacantil och erbjuder fantastisk utsikt över Medelhavet.

Den berömda strandpromenaden Explanada de España, med sitt vackra mosaik av marmor i rött, vitt och blått, är hjärtat i stadens sociala liv. Här flanerar både lokalbefolkning och turister under palmerna, njuter av tapas på uteserveringar och upplever den äkta spanska atmosfären.

Alicante erbjuder också utmärkta stränder, särskilt Playa del Postiguet som ligger precis vid stadskärnan. För den som söker shopping finns moderna gallerior och charmiga butiker i de smala gränderna i gamla stan El Barrio.`,
        bestTimeToVisit: 'April till oktober är bästa tiden att besöka Alicante. Sommaren (juni-augusti) är varmast med temperaturer runt 30°C, perfekt för strandliv. Vår och höst erbjuder behagligare temperaturer för sightseeing.',
        howToGetThere: 'Alicante-Elche flygplats (ALC) ligger endast 9 km från stadskärnan med direktflyg från Stockholm, Göteborg och Köpenhamn. Från flygplatsen tar du enkelt buss eller taxi till centrum.',
        attractions: [
          {
            name: 'Santa Barbara-slottet',
            description: 'Medeltida fästning med fantastisk utsikt över staden och havet. Ta hissen från stranden för enkel åtkomst.',
            type: 'culture',
          },
          {
            name: 'Explanada de España',
            description: 'Iconic strandpromenad med vacker marmormosaik, kaféer och restauranger.',
            type: 'culture',
          },
          {
            name: 'Playa del Postiguet',
            description: 'Centraltstaden strand med blå flagg-utmärkelse, perfekt för bad och sol.',
            type: 'beach',
          },
          {
            name: 'El Barrio',
            description: 'Charmig gammal stad med smala gator, butiker och tapasbarer.',
            type: 'culture',
          },
          {
            name: 'MARQ - Arkeologiskt museum',
            description: 'Prisbelönt museum med fascinerande utställningar om regionens historia.',
            type: 'culture',
          },
        ],
        beaches: ['Playa del Postiguet', 'Playa de San Juan', 'Playa de la Albufereta'],
        faqs: [
          {
            question: 'Hur långt är det från Alicante flygplats till centrum?',
            answer: 'Flygplatsen ligger endast 9 km från Alicante centrum. Med buss tar det cirka 20 minuter och med taxi cirka 15 minuter.',
          },
          {
            question: 'Vilken är bästa stranden i Alicante?',
            answer: 'Playa del Postiguet är närmast centrum och perfekt för en snabb simborrning. Playa de San Juan är längre och mer barnvänlig med grundare vatten.',
          },
          {
            question: 'Är det gratis att besöka Santa Barbara-slottet?',
            answer: 'Ja, inträdet till slottet är gratis. Hissen från stranden kostar en liten avgift men vandringen upp är också möjlig.',
          },
        ],
      },
      en: {
        longDescription: `Alicante is the vibrant capital of Costa Blanca and a perfect combination of history, culture, and beach life. The city is dominated by the impressive Santa Barbara Castle, which crowns Mount Benacantil and offers fantastic views of the Mediterranean.

The famous Explanada de España promenade, with its beautiful marble mosaic in red, white, and blue, is the heart of the city's social life. Here, both locals and tourists stroll under the palm trees, enjoy tapas at outdoor cafés, and experience the authentic Spanish atmosphere.

Alicante also offers excellent beaches, particularly Playa del Postiguet, located right by the city center. For those seeking shopping, there are modern malls and charming boutiques in the narrow alleys of the old town El Barrio.`,
        bestTimeToVisit: 'April to October is the best time to visit Alicante. Summer (June-August) is warmest with temperatures around 30°C, perfect for beach life. Spring and autumn offer more pleasant temperatures for sightseeing.',
        howToGetThere: 'Alicante-Elche Airport (ALC) is only 9 km from the city center with direct flights from major European cities. From the airport, you can easily take a bus or taxi to the center.',
        attractions: [
          {
            name: 'Santa Barbara Castle',
            description: 'Medieval fortress with fantastic views of the city and sea. Take the elevator from the beach for easy access.',
            type: 'culture',
          },
          {
            name: 'Explanada de España',
            description: 'Iconic promenade with beautiful marble mosaic, cafés, and restaurants.',
            type: 'culture',
          },
          {
            name: 'Playa del Postiguet',
            description: 'Central beach with Blue Flag status, perfect for swimming and sunbathing.',
            type: 'beach',
          },
          {
            name: 'El Barrio',
            description: 'Charming old town with narrow streets, shops, and tapas bars.',
            type: 'culture',
          },
          {
            name: 'MARQ - Archaeological Museum',
            description: 'Award-winning museum with fascinating exhibitions about the region\'s history.',
            type: 'culture',
          },
        ],
        beaches: ['Playa del Postiguet', 'Playa de San Juan', 'Playa de la Albufereta'],
        faqs: [
          {
            question: 'How far is Alicante airport from the center?',
            answer: 'The airport is only 9 km from Alicante center. By bus it takes about 20 minutes and by taxi about 15 minutes.',
          },
          {
            question: 'What is the best beach in Alicante?',
            answer: 'Playa del Postiguet is closest to the center and perfect for a quick swim. Playa de San Juan is longer and more family-friendly with shallower water.',
          },
          {
            question: 'Is Santa Barbara Castle free to visit?',
            answer: 'Yes, entrance to the castle is free. The elevator from the beach costs a small fee, but walking up is also possible.',
          },
        ],
      },
      de: {
        longDescription: `Alicante ist die pulsierende Hauptstadt der Costa Blanca und eine perfekte Kombination aus Geschichte, Kultur und Strandleben. Die Stadt wird von der beeindruckenden Burg Santa Barbara dominiert, die auf dem Berg Benacantil thront und einen fantastischen Blick auf das Mittelmeer bietet.

Die berühmte Explanada de España mit ihrem schönen Marmormosaik in Rot, Weiß und Blau ist das Herz des gesellschaftlichen Lebens der Stadt. Hier flanieren sowohl Einheimische als auch Touristen unter den Palmen, genießen Tapas in den Straßencafés und erleben die authentische spanische Atmosphäre.

Alicante bietet auch ausgezeichnete Strände, insbesondere die Playa del Postiguet, die direkt neben dem Stadtzentrum liegt. Für Shopping-Liebhaber gibt es moderne Einkaufszentren und charmante Boutiquen in den engen Gassen der Altstadt El Barrio.`,
        bestTimeToVisit: 'April bis Oktober ist die beste Zeit für einen Besuch in Alicante. Der Sommer (Juni-August) ist am wärmsten mit Temperaturen um 30°C, perfekt für das Strandleben. Frühling und Herbst bieten angenehmere Temperaturen für Besichtigungen.',
        howToGetThere: 'Der Flughafen Alicante-Elche (ALC) liegt nur 9 km vom Stadtzentrum entfernt mit Direktflügen aus wichtigen europäischen Städten. Vom Flughafen können Sie einfach einen Bus oder ein Taxi ins Zentrum nehmen.',
        attractions: [
          {
            name: 'Burg Santa Barbara',
            description: 'Mittelalterliche Festung mit fantastischem Blick auf Stadt und Meer. Nehmen Sie den Aufzug vom Strand für einen einfachen Zugang.',
            type: 'culture',
          },
          {
            name: 'Explanada de España',
            description: 'Ikonische Promenade mit schönem Marmormosaik, Cafés und Restaurants.',
            type: 'culture',
          },
          {
            name: 'Playa del Postiguet',
            description: 'Zentraler Strand mit Blauer Flagge, perfekt zum Schwimmen und Sonnenbaden.',
            type: 'beach',
          },
          {
            name: 'El Barrio',
            description: 'Charmante Altstadt mit engen Gassen, Geschäften und Tapas-Bars.',
            type: 'culture',
          },
          {
            name: 'MARQ - Archäologisches Museum',
            description: 'Preisgekröntes Museum mit faszinierenden Ausstellungen über die Geschichte der Region.',
            type: 'culture',
          },
        ],
        beaches: ['Playa del Postiguet', 'Playa de San Juan', 'Playa de la Albufereta'],
        faqs: [
          {
            question: 'Wie weit ist der Flughafen Alicante vom Zentrum entfernt?',
            answer: 'Der Flughafen liegt nur 9 km vom Zentrum Alicantes entfernt. Mit dem Bus dauert es etwa 20 Minuten und mit dem Taxi etwa 15 Minuten.',
          },
          {
            question: 'Welcher ist der beste Strand in Alicante?',
            answer: 'Die Playa del Postiguet liegt am nächsten zum Zentrum und ist perfekt für einen schnellen Sprung ins Wasser. Die Playa de San Juan ist länger und familienfreundlicher mit flacherem Wasser.',
          },
          {
            question: 'Ist der Eintritt zur Burg Santa Barbara kostenlos?',
            answer: 'Ja, der Eintritt zur Burg ist kostenlos. Der Aufzug vom Strand kostet eine kleine Gebühr, aber man kann auch zu Fuß hinaufgehen.',
          },
        ],
      },
      no: {
        longDescription: `Alicante er den pulserende hovedstaden på Costa Blanca og en perfekt kombinasjon av historie, kultur og strandliv. Byen domineres av det imponerende Santa Barbara-slottet som troner på fjellet Benacantil og tilbyr fantastisk utsikt over Middelhavet.

Den berømte strandpromenaden Explanada de España, med sin vakre mosaikk av marmor i rødt, hvitt og blått, er hjertet av byens sosiale liv. Her flanerer både lokalbefolkning og turister under palmene, nyter tapas på uteserveringer og opplever den autentiske spanske atmosfæren.

Alicante tilbyr også utmerkede strender, særlig Playa del Postiguet som ligger rett ved bykjernen. For den som søker shopping finnes moderne kjøpesentre og sjarmerende butikker i de smale gatene i gamlebyen El Barrio.`,
        bestTimeToVisit: 'April til oktober er den beste tiden å besøke Alicante. Sommeren (juni-august) er varmest med temperaturer rundt 30°C, perfekt for strandliv. Vår og høst tilbyr mer behagelige temperaturer for sightseeing.',
        howToGetThere: 'Alicante-Elche flyplass (ALC) ligger bare 9 km fra bysentrum med direktefly fra store europeiske byer. Fra flyplassen kan du enkelt ta buss eller taxi til sentrum.',
        attractions: [
          {
            name: 'Santa Barbara-slottet',
            description: 'Middelaldersk festning med fantastisk utsikt over byen og havet. Ta heisen fra stranden for enkel tilgang.',
            type: 'culture',
          },
          {
            name: 'Explanada de España',
            description: 'Ikonisk strandpromenade med vakker marmormosaikk, kafeer og restauranter.',
            type: 'culture',
          },
          {
            name: 'Playa del Postiguet',
            description: 'Sentral strand med Blått Flagg-status, perfekt for bading og soling.',
            type: 'beach',
          },
          {
            name: 'El Barrio',
            description: 'Sjarmerende gamleby med smale gater, butikker og tapasbarer.',
            type: 'culture',
          },
          {
            name: 'MARQ - Arkeologisk museum',
            description: 'Prisvinnende museum med fascinerende utstillinger om regionens historie.',
            type: 'culture',
          },
        ],
        beaches: ['Playa del Postiguet', 'Playa de San Juan', 'Playa de la Albufereta'],
        faqs: [
          {
            question: 'Hvor langt er det fra Alicante flyplass til sentrum?',
            answer: 'Flyplassen ligger bare 9 km fra Alicante sentrum. Med buss tar det cirka 20 minutter og med taxi cirka 15 minutter.',
          },
          {
            question: 'Hvilken er den beste stranden i Alicante?',
            answer: 'Playa del Postiguet ligger nærmest sentrum og er perfekt for en rask svømmetur. Playa de San Juan er lengre og mer barnevennlig med grunnere vann.',
          },
          {
            question: 'Er det gratis å besøke Santa Barbara-slottet?',
            answer: 'Ja, inngangen til slottet er gratis. Heisen fra stranden koster en liten avgift, men det er også mulig å gå opp.',
          },
        ],
      },
    },
  },
  {
    slug: 'calpe',
    translations: {
      sv: {
        longDescription: `Calpe är en av Costa Blancas mest ikoniska destinationer, känd för den dramatiska klippan Peñón de Ifach som reser sig 332 meter ur havet. Denna naturskyddade klippa är synlig från långa avstånd och har blivit en symbol för hela regionen.

Staden erbjuder en perfekt blandning av modernt strandliv och historisk charm. Den gamla stadsdelen med sina smala kullerstensgator och vitkallade hus bjuder på autentisk spansk atmosfär, medan de moderna områdena längs stränderna erbjuder alla bekvämligheter för semesterfirare.

Calpe är också känt för sin utmärkta gastronomi, särskilt färsk fisk och skaldjur direkt från den lokala fiskehamnen. Lonja de Calpe, fiskauktionen, är ett populärt turistmål där du kan se fiskarna sälja dagens fångst.`,
        bestTimeToVisit: 'Maj till oktober är idealisk för strandliv. Vandringsentusiaster föredrar vår (mars-maj) eller höst (september-november) för att bestiga Peñón de Ifach när temperaturen är behagligare.',
        howToGetThere: 'Calpe ligger 65 km från Alicante flygplats. Hyr bil för flexibilitet eller ta buss från Alicante busstation. Tåg finns från Alicante via TRAM-linjen till Benidorm och vidare med buss.',
        attractions: [
          {
            name: 'Peñón de Ifach',
            description: 'Ikonisk klippa och naturreservat. Vandringen till toppen belönas med fantastisk utsikt.',
            type: 'nature',
          },
          {
            name: 'Playa de la Fossa',
            description: 'Calpes längsta strand med gyllene sand och grunt vatten, perfekt för familjer.',
            type: 'beach',
          },
          {
            name: 'Gamla stan',
            description: 'Pittoresk stadsdel med smala gator, historiska byggnader och utsiktsplatser.',
            type: 'culture',
          },
          {
            name: 'Las Salinas',
            description: 'Saltpannor där du kan se flamingos, särskilt under migrationssäsongen.',
            type: 'nature',
          },
          {
            name: 'Lonja de Calpe',
            description: 'Fiskauktion där lokala fiskare säljer dagens fångst.',
            type: 'culture',
          },
        ],
        beaches: ['Playa de la Fossa', 'Playa del Arenal-Bol', 'Cala del Morelló'],
        faqs: [
          {
            question: 'Kan man bestiga Peñón de Ifach?',
            answer: 'Ja, men du behöver gratis tillstånd som bokas online. Vandringen tar 2-3 timmar tur och retur och kräver god kondition och lämpliga skor.',
          },
          {
            question: 'När kan man se flamingos i Calpe?',
            answer: 'Flamingos ses oftast vid Las Salinas från oktober till mars under migrationen. Ibland stannar de även under sommaren.',
          },
          {
            question: 'Vilken strand är bäst för barn i Calpe?',
            answer: 'Playa de la Fossa är bäst för familjer med sitt grunda, klara vatten och goda faciliteter inklusive livräddare.',
          },
        ],
      },
      en: {
        longDescription: `Calpe is one of Costa Blanca's most iconic destinations, known for the dramatic Peñón de Ifach rock rising 332 meters from the sea. This protected nature reserve is visible from great distances and has become a symbol of the entire region.

The town offers a perfect blend of modern beach life and historic charm. The old quarter with its narrow cobblestone streets and whitewashed houses provides an authentic Spanish atmosphere, while the modern areas along the beaches offer all conveniences for holidaymakers.

Calpe is also renowned for its excellent gastronomy, particularly fresh fish and seafood directly from the local fishing port. Lonja de Calpe, the fish auction, is a popular tourist attraction where you can watch fishermen sell the day's catch.`,
        bestTimeToVisit: 'May to October is ideal for beach life. Hiking enthusiasts prefer spring (March-May) or autumn (September-November) to climb Peñón de Ifach when temperatures are more pleasant.',
        howToGetThere: 'Calpe is 65 km from Alicante airport. Rent a car for flexibility or take a bus from Alicante bus station. Train is available from Alicante via the TRAM line to Benidorm and onwards by bus.',
        attractions: [
          {
            name: 'Peñón de Ifach',
            description: 'Iconic rock and nature reserve. The hike to the top rewards with fantastic views.',
            type: 'nature',
          },
          {
            name: 'Playa de la Fossa',
            description: 'Calpe\'s longest beach with golden sand and shallow water, perfect for families.',
            type: 'beach',
          },
          {
            name: 'Old Town',
            description: 'Picturesque quarter with narrow streets, historic buildings, and viewpoints.',
            type: 'culture',
          },
          {
            name: 'Las Salinas',
            description: 'Salt flats where you can see flamingos, especially during migration season.',
            type: 'nature',
          },
          {
            name: 'Lonja de Calpe',
            description: 'Fish auction where local fishermen sell the day\'s catch.',
            type: 'culture',
          },
        ],
        beaches: ['Playa de la Fossa', 'Playa del Arenal-Bol', 'Cala del Morelló'],
        faqs: [
          {
            question: 'Can you climb Peñón de Ifach?',
            answer: 'Yes, but you need a free permit booked online. The hike takes 2-3 hours round trip and requires good fitness and appropriate footwear.',
          },
          {
            question: 'When can you see flamingos in Calpe?',
            answer: 'Flamingos are most commonly seen at Las Salinas from October to March during migration. Sometimes they also stay during summer.',
          },
          {
            question: 'Which beach is best for children in Calpe?',
            answer: 'Playa de la Fossa is best for families with its shallow, clear water and good facilities including lifeguards.',
          },
        ],
      },
      de: {
        longDescription: `Calpe ist eines der ikonischsten Reiseziele der Costa Blanca, bekannt für den dramatischen Felsen Peñón de Ifach, der 332 Meter aus dem Meer ragt. Dieses geschützte Naturreservat ist aus großer Entfernung sichtbar und ist zu einem Symbol der gesamten Region geworden.

Die Stadt bietet eine perfekte Mischung aus modernem Strandleben und historischem Charme. Das alte Viertel mit seinen engen Kopfsteinpflasterstraßen und weißgetünchten Häusern bietet eine authentische spanische Atmosphäre, während die modernen Bereiche entlang der Strände alle Annehmlichkeiten für Urlauber bieten.

Calpe ist auch für seine ausgezeichnete Gastronomie bekannt, insbesondere für frischen Fisch und Meeresfrüchte direkt aus dem lokalen Fischerhafen. Lonja de Calpe, die Fischauktion, ist eine beliebte Touristenattraktion, wo Sie den Fischern beim Verkauf des Tagesfangs zusehen können.`,
        bestTimeToVisit: 'Mai bis Oktober ist ideal für das Strandleben. Wanderbegeisterte bevorzugen den Frühling (März-Mai) oder Herbst (September-November) für die Besteigung des Peñón de Ifach bei angenehmeren Temperaturen.',
        howToGetThere: 'Calpe liegt 65 km vom Flughafen Alicante entfernt. Mieten Sie ein Auto für Flexibilität oder nehmen Sie einen Bus vom Busbahnhof Alicante. Der Zug ist von Alicante über die TRAM-Linie nach Benidorm und weiter mit dem Bus verfügbar.',
        attractions: [
          {
            name: 'Peñón de Ifach',
            description: 'Ikonischer Felsen und Naturreservat. Die Wanderung zum Gipfel belohnt mit fantastischer Aussicht.',
            type: 'nature',
          },
          {
            name: 'Playa de la Fossa',
            description: 'Calpes längster Strand mit goldenem Sand und flachem Wasser, perfekt für Familien.',
            type: 'beach',
          },
          {
            name: 'Altstadt',
            description: 'Malerisches Viertel mit engen Gassen, historischen Gebäuden und Aussichtspunkten.',
            type: 'culture',
          },
          {
            name: 'Las Salinas',
            description: 'Salzpfannen, wo Sie Flamingos sehen können, besonders während der Zugzeit.',
            type: 'nature',
          },
          {
            name: 'Lonja de Calpe',
            description: 'Fischauktion, wo lokale Fischer den Fang des Tages verkaufen.',
            type: 'culture',
          },
        ],
        beaches: ['Playa de la Fossa', 'Playa del Arenal-Bol', 'Cala del Morelló'],
        faqs: [
          {
            question: 'Kann man den Peñón de Ifach besteigen?',
            answer: 'Ja, aber Sie benötigen eine kostenlose Genehmigung, die online gebucht werden kann. Die Wanderung dauert 2-3 Stunden hin und zurück und erfordert gute Fitness und geeignetes Schuhwerk.',
          },
          {
            question: 'Wann kann man Flamingos in Calpe sehen?',
            answer: 'Flamingos sind am häufigsten bei Las Salinas von Oktober bis März während der Migration zu sehen. Manchmal bleiben sie auch im Sommer.',
          },
          {
            question: 'Welcher Strand ist am besten für Kinder in Calpe?',
            answer: 'Playa de la Fossa ist am besten für Familien mit seinem flachen, klaren Wasser und guten Einrichtungen einschließlich Rettungsschwimmern.',
          },
        ],
      },
      no: {
        longDescription: `Calpe er en av Costa Blancas mest ikoniske destinasjoner, kjent for den dramatiske klippen Peñón de Ifach som reiser seg 332 meter opp fra havet. Dette vernede naturreservatet er synlig på lang avstand og har blitt et symbol for hele regionen.

Byen tilbyr en perfekt blanding av moderne strandliv og historisk sjarm. Gamlebyen med sine smale brosteingater og hvitkalkede hus byr på autentisk spansk atmosfære, mens de moderne områdene langs strendene tilbyr alle bekvemmeligheter for ferierende.

Calpe er også kjent for sin utmerkede gastronomi, særlig fersk fisk og sjømat direkte fra den lokale fiskehavnen. Lonja de Calpe, fiskeauksjonen, er en populær turistattraksjon hvor du kan se fiskerne selge dagens fangst.`,
        bestTimeToVisit: 'Mai til oktober er ideelt for strandliv. Vandringsentusiaster foretrekker vår (mars-mai) eller høst (september-november) for å bestige Peñón de Ifach når temperaturene er mer behagelige.',
        howToGetThere: 'Calpe ligger 65 km fra Alicante flyplass. Lei bil for fleksibilitet eller ta buss fra Alicante busstasjon. Tog er tilgjengelig fra Alicante via TRAM-linjen til Benidorm og videre med buss.',
        attractions: [
          {
            name: 'Peñón de Ifach',
            description: 'Ikonisk klippe og naturreservat. Vandringen til toppen belønnes med fantastisk utsikt.',
            type: 'nature',
          },
          {
            name: 'Playa de la Fossa',
            description: 'Calpes lengste strand med gyllen sand og grunt vann, perfekt for familier.',
            type: 'beach',
          },
          {
            name: 'Gamlebyen',
            description: 'Pittoresk bydel med smale gater, historiske bygninger og utsiktspunkter.',
            type: 'culture',
          },
          {
            name: 'Las Salinas',
            description: 'Saltpanner hvor du kan se flamingoer, særlig under trekksesongen.',
            type: 'nature',
          },
          {
            name: 'Lonja de Calpe',
            description: 'Fiskeauksjon hvor lokale fiskere selger dagens fangst.',
            type: 'culture',
          },
        ],
        beaches: ['Playa de la Fossa', 'Playa del Arenal-Bol', 'Cala del Morelló'],
        faqs: [
          {
            question: 'Kan man bestige Peñón de Ifach?',
            answer: 'Ja, men du trenger en gratis tillatelse som bestilles online. Vandringen tar 2-3 timer tur-retur og krever god kondisjon og passende fottøy.',
          },
          {
            question: 'Når kan man se flamingoer i Calpe?',
            answer: 'Flamingoer sees oftest ved Las Salinas fra oktober til mars under trekksesongen. Noen ganger blir de også gjennom sommeren.',
          },
          {
            question: 'Hvilken strand er best for barn i Calpe?',
            answer: 'Playa de la Fossa er best for familier med sitt grunne, klare vann og gode fasiliteter inkludert livvakter.',
          },
        ],
      },
    },
  },
  {
    slug: 'torrevieja',
    translations: {
      sv: {
        longDescription: `Torrevieja är en unik kuststad känd för sina rosa saltsjöar och stora skandinaviska community. Staden har blivit en favorit bland nordbor som söker sol, värme och ett prisvärt alternativ för långtidsvistelse.

De rosa saltsjöarna, Laguna de la Mata och Laguna de Torrevieja, skapar ett surrealistiskt landskap och är kända för sina hälsosamma egenskaper. Det sägs att det salta vattnet och lervällingarna har läkande egenskaper för huden.

Med över 3000 soltimmar per år och ett varmt klimat året runt är Torrevieja perfekt för den som vill njuta av strandliv utan den intensiva turistträngseln som finns i större orter. Staden erbjuder också utmärkta restauranger, marknader och shoppingmöjligheter.`,
        bestTimeToVisit: 'Torrevieja är härligt året runt tack vare sitt milda klimat. Vintern (november-februari) är perfekt för långtidsvistelse med temperaturer runt 15-18°C. Sommaren är varm men mindre turisttät än Benidorm.',
        howToGetThere: 'Torrevieja ligger 50 km från Alicante flygplats och 25 km från Murcia San Javier flygplats. Bussar går regelbundet från båda flygplatserna. Hyr bil för att enkelt utforska omgivningarna.',
        attractions: [
          {
            name: 'Laguna Rosa',
            description: 'Rosa saltsjö med surrealistiska färger. Bada i det salta vattnet eller prova lerbehandlingar.',
            type: 'nature',
          },
          {
            name: 'Playa del Cura',
            description: 'Central strand med blå flagg, promenad och restauranger.',
            type: 'beach',
          },
          {
            name: 'Paseo de la Libertad',
            description: 'Vacker strandpromenad perfekt för kvällspromenader och tapas.',
            type: 'culture',
          },
          {
            name: 'Habaneras köpcentrum',
            description: 'Öppet köpcentrum med butiker, restauranger och underhållning.',
            type: 'shopping',
          },
          {
            name: 'Fredagsmarknaden',
            description: 'En av Spaniens största utomhusmarknader med allt från kläder till lokala produkter.',
            type: 'shopping',
          },
        ],
        beaches: ['Playa del Cura', 'Playa de los Locos', 'Playa de los Náufragos', 'Cala Ferris'],
        faqs: [
          {
            question: 'Varför är saltsjön i Torrevieja rosa?',
            answer: 'Den rosa färgen kommer från en mikroalg som trivs i det extremt salta vattnet. Färgen är mest intensiv under sommaren när salthalten är som högst.',
          },
          {
            question: 'Finns det svenska butiker i Torrevieja?',
            answer: 'Ja, det finns flera skandinaviska livsmedelsbutiker och svenska produkter finns även i de större supermarketerna. Många restauranger har menyer på svenska.',
          },
          {
            question: 'Är Torrevieja bra för långtidsvistelse?',
            answer: 'Ja, Torrevieja är mycket populärt för långtidsvistelse med sitt milda vinterklimat, låga levnadskostnader och stora skandinaviska community.',
          },
        ],
      },
      en: {
        longDescription: `Torrevieja is a unique coastal town known for its pink salt lakes and large Scandinavian community. The town has become a favorite among Northern Europeans seeking sun, warmth, and an affordable option for long-term stays.

The pink salt lakes, Laguna de la Mata and Laguna de Torrevieja, create a surrealistic landscape and are known for their health-promoting properties. It is said that the salty water and mud baths have healing properties for the skin.

With over 3,000 hours of sunshine per year and a warm climate year-round, Torrevieja is perfect for those who want to enjoy beach life without the intense tourist crowds found in larger resorts. The town also offers excellent restaurants, markets, and shopping opportunities.`,
        bestTimeToVisit: 'Torrevieja is lovely year-round thanks to its mild climate. Winter (November-February) is perfect for long-term stays with temperatures around 15-18°C. Summer is warm but less crowded than Benidorm.',
        howToGetThere: 'Torrevieja is 50 km from Alicante airport and 25 km from Murcia San Javier airport. Buses run regularly from both airports. Rent a car to easily explore the surroundings.',
        attractions: [
          {
            name: 'Pink Lagoon',
            description: 'Pink salt lake with surrealistic colors. Bathe in the salty water or try mud treatments.',
            type: 'nature',
          },
          {
            name: 'Playa del Cura',
            description: 'Central beach with Blue Flag status, promenade, and restaurants.',
            type: 'beach',
          },
          {
            name: 'Paseo de la Libertad',
            description: 'Beautiful seafront promenade perfect for evening walks and tapas.',
            type: 'culture',
          },
          {
            name: 'Habaneras Shopping Center',
            description: 'Open-air shopping center with shops, restaurants, and entertainment.',
            type: 'shopping',
          },
          {
            name: 'Friday Market',
            description: 'One of Spain\'s largest outdoor markets with everything from clothes to local products.',
            type: 'shopping',
          },
        ],
        beaches: ['Playa del Cura', 'Playa de los Locos', 'Playa de los Náufragos', 'Cala Ferris'],
        faqs: [
          {
            question: 'Why is the salt lake in Torrevieja pink?',
            answer: 'The pink color comes from a microalgae that thrives in the extremely salty water. The color is most intense during summer when salinity is highest.',
          },
          {
            question: 'Are there Scandinavian shops in Torrevieja?',
            answer: 'Yes, there are several Scandinavian grocery stores and Scandinavian products are also available in larger supermarkets. Many restaurants have menus in multiple languages.',
          },
          {
            question: 'Is Torrevieja good for long-term stays?',
            answer: 'Yes, Torrevieja is very popular for long-term stays with its mild winter climate, low cost of living, and large international community.',
          },
        ],
      },
      de: {
        longDescription: `Torrevieja ist eine einzigartige Küstenstadt, die für ihre rosa Salzseen und ihre große skandinavische Gemeinde bekannt ist. Die Stadt ist zu einem Favoriten unter Nordeuropäern geworden, die Sonne, Wärme und eine erschwingliche Option für Langzeitaufenthalte suchen.

Die rosa Salzseen, Laguna de la Mata und Laguna de Torrevieja, schaffen eine surrealistische Landschaft und sind für ihre gesundheitsfördernden Eigenschaften bekannt. Es heißt, dass das salzige Wasser und die Schlammbäder heilende Eigenschaften für die Haut haben.

Mit über 3.000 Sonnenstunden pro Jahr und einem warmen Klima das ganze Jahr über ist Torrevieja perfekt für diejenigen, die das Strandleben ohne die intensiven Touristenmassen größerer Orte genießen möchten. Die Stadt bietet auch ausgezeichnete Restaurants, Märkte und Einkaufsmöglichkeiten.`,
        bestTimeToVisit: 'Torrevieja ist dank seines milden Klimas das ganze Jahr über schön. Der Winter (November-Februar) ist perfekt für Langzeitaufenthalte mit Temperaturen um 15-18°C. Der Sommer ist warm, aber weniger überlaufen als Benidorm.',
        howToGetThere: 'Torrevieja liegt 50 km vom Flughafen Alicante und 25 km vom Flughafen Murcia San Javier entfernt. Busse fahren regelmäßig von beiden Flughäfen. Mieten Sie ein Auto, um die Umgebung einfach zu erkunden.',
        attractions: [
          {
            name: 'Rosa Lagune',
            description: 'Rosa Salzsee mit surrealistischen Farben. Baden Sie im salzigen Wasser oder probieren Sie Schlammbehandlungen.',
            type: 'nature',
          },
          {
            name: 'Playa del Cura',
            description: 'Zentraler Strand mit Blauer Flagge, Promenade und Restaurants.',
            type: 'beach',
          },
          {
            name: 'Paseo de la Libertad',
            description: 'Schöne Strandpromenade, perfekt für Abendspaziergänge und Tapas.',
            type: 'culture',
          },
          {
            name: 'Einkaufszentrum Habaneras',
            description: 'Open-Air-Einkaufszentrum mit Geschäften, Restaurants und Unterhaltung.',
            type: 'shopping',
          },
          {
            name: 'Freitagsmarkt',
            description: 'Einer der größten Freiluftmärkte Spaniens mit allem von Kleidung bis zu lokalen Produkten.',
            type: 'shopping',
          },
        ],
        beaches: ['Playa del Cura', 'Playa de los Locos', 'Playa de los Náufragos', 'Cala Ferris'],
        faqs: [
          {
            question: 'Warum ist der Salzsee in Torrevieja rosa?',
            answer: 'Die rosa Farbe kommt von einer Mikroalge, die im extrem salzigen Wasser gedeiht. Die Farbe ist im Sommer am intensivsten, wenn der Salzgehalt am höchsten ist.',
          },
          {
            question: 'Gibt es skandinavische Geschäfte in Torrevieja?',
            answer: 'Ja, es gibt mehrere skandinavische Lebensmittelgeschäfte und skandinavische Produkte sind auch in größeren Supermärkten erhältlich. Viele Restaurants haben Speisekarten in mehreren Sprachen.',
          },
          {
            question: 'Ist Torrevieja gut für Langzeitaufenthalte?',
            answer: 'Ja, Torrevieja ist sehr beliebt für Langzeitaufenthalte mit seinem milden Winterklima, niedrigen Lebenshaltungskosten und seiner großen internationalen Gemeinschaft.',
          },
        ],
      },
      no: {
        longDescription: `Torrevieja er en unik kystby kjent for sine rosa saltsjøer og store skandinaviske miljø. Byen har blitt en favoritt blant nordeuropeere som søker sol, varme og et rimelig alternativ for langtidsopphold.

De rosa saltsjøene, Laguna de la Mata og Laguna de Torrevieja, skaper et surrealistisk landskap og er kjent for sine helsebringende egenskaper. Det sies at det salte vannet og gjørmebehandlingene har helbredende egenskaper for huden.

Med over 3000 soltimer per år og et varmt klima året rundt er Torrevieja perfekt for de som vil nyte strandliv uten den intense turistmengden som finnes på større steder. Byen tilbyr også utmerkede restauranter, markeder og shoppingmuligheter.`,
        bestTimeToVisit: 'Torrevieja er deilig året rundt takket være sitt milde klima. Vinteren (november-februar) er perfekt for langtidsopphold med temperaturer rundt 15-18°C. Sommeren er varm men mindre turisttett enn Benidorm.',
        howToGetThere: 'Torrevieja ligger 50 km fra Alicante flyplass og 25 km fra Murcia San Javier flyplass. Busser går regelmessig fra begge flyplassene. Lei bil for enkelt å utforske omgivelsene.',
        attractions: [
          {
            name: 'Rosa lagunen',
            description: 'Rosa saltsjø med surrealistiske farger. Bade i det salte vannet eller prøv gjørmebehandlinger.',
            type: 'nature',
          },
          {
            name: 'Playa del Cura',
            description: 'Sentral strand med Blått Flagg-status, promenade og restauranter.',
            type: 'beach',
          },
          {
            name: 'Paseo de la Libertad',
            description: 'Vakker strandpromenade perfekt for kveldspaserjer og tapas.',
            type: 'culture',
          },
          {
            name: 'Habaneras kjøpesenter',
            description: 'Åpent kjøpesenter med butikker, restauranter og underholdning.',
            type: 'shopping',
          },
          {
            name: 'Fredagsmarkedet',
            description: 'Et av Spanias største utendørsmarkeder med alt fra klær til lokale produkter.',
            type: 'shopping',
          },
        ],
        beaches: ['Playa del Cura', 'Playa de los Locos', 'Playa de los Náufragos', 'Cala Ferris'],
        faqs: [
          {
            question: 'Hvorfor er saltsjøen i Torrevieja rosa?',
            answer: 'Den rosa fargen kommer fra en mikroalge som trives i det ekstremt salte vannet. Fargen er mest intens om sommeren når saltinnholdet er på sitt høyeste.',
          },
          {
            question: 'Finnes det skandinaviske butikker i Torrevieja?',
            answer: 'Ja, det finnes flere skandinaviske dagligvarebutikker og skandinaviske produkter er også tilgjengelig i større supermarkeder. Mange restauranter har menyer på flere språk.',
          },
          {
            question: 'Er Torrevieja bra for langtidsopphold?',
            answer: 'Ja, Torrevieja er veldig populært for langtidsopphold med sitt milde vinterklima, lave levekostnader og store internasjonale miljø.',
          },
        ],
      },
    },
  },
];

export function getDestinationContent(slug: string): DestinationContent | undefined {
  return destinationContent.find((d) => d.slug === slug);
}
