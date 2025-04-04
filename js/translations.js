// Fichier de traductions pour le site web de l'hôtel

const translations = {
    // Français
    fr: {
      hotelName: "Le Palmeiras",
      nav: {
        home: "Accueil",
        about: "À propos",
        rooms: "Chambres",
        services: "Services",
        gallery: "Galerie",
        contact: "Contact",
        book: "Réserver"
      },
      hero: {
        slide1: {
          title: "Bienvenue au Palmeiras",
          subtitle: "Une expérience hôtelière unique"
        },
        slide2: {
          title: "Luxe et Élégance",
          subtitle: "Découvrez notre hôtel d'exception"
        },
        slide3: {
          title: "Détente et Sérénité",
          subtitle: "Un havre de paix au cœur de la ville"
        },
        bookNow: "Réserver maintenant"
      },
      about: {
        title: "À propos du Palmeiras",
        paragraph1: "Niché au cœur d'un environnement exceptionnel, Le Palmeiras est bien plus qu'un simple hôtel. C'est une destination où l'élégance rencontre le confort, où chaque détail est pensé pour créer une expérience inoubliable.",
        paragraph2: "Notre établissement allie harmonieusement architecture contemporaine et touches traditionnelles, créant ainsi une atmosphère unique qui séduira les voyageurs les plus exigeants.",
        paragraph3: "Que vous soyez en quête d'une escapade romantique, d'un séjour d'affaires ou d'une retraite relaxante, Le Palmeiras vous offre un cadre idéal pour tous vos besoins.",
        history: {
          title: "Notre Histoire",
          text: "Fondé en 2010, Le Palmeiras s'est rapidement imposé comme une référence dans l'hôtellerie de luxe, perpétuant une tradition d'excellence et d'hospitalité."
        },
        philosophy: {
          title: "Notre Philosophie",
          text: "Nous croyons que chaque séjour doit être une expérience unique. Notre équipe s'engage à offrir un service personnalisé qui dépasse vos attentes."
        },
        commitment: {
          title: "Notre Engagement",
          text: "Le développement durable est au cœur de nos préoccupations. Nous mettons en œuvre des pratiques respectueuses de l'environnement dans tous nos services."
        }
      },
      rooms: {
        title: "Nos Chambres & Suites",
        subtitle: "Découvrez nos chambres et suites élégantes, conçues pour offrir un confort optimal et une expérience inoubliable. Chaque espace a été méticuleusement aménagé pour répondre à vos besoins.",
        accommodations: "Nos Hébergements",
        features: "Caractéristiques:",
        bookNow: "Réserver maintenant",
        deluxe: {
          name: "Chambre Deluxe",
          price: "À partir de 250€ / nuit",
          description: "Nos chambres Deluxe offrent un espace généreux et élégant, avec une vue imprenable sur les environs. Chaque chambre est équipée d'un lit king-size, d'une salle de bain en marbre et d'équipements modernes.",
          feature1: "Lit king-size",
          feature2: "Vue panoramique",
          feature3: "Salle de bain en marbre",
          feature4: "Wi-Fi gratuit",
          feature5: "Minibar"
        },
        junior: {
          name: "Suite Junior",
          price: "À partir de 350€ / nuit",
          description: "Nos Suites Junior combinent espace de vie et de couchage dans un cadre luxueux. Profitez d'un séjour confortable avec des équipements haut de gamme et une décoration raffinée.",
          feature1: "Espace salon séparé",
          feature2: "Lit king-size",
          feature3: "Baignoire et douche séparées",
          feature4: "Machine à café Nespresso",
          feature5: "Service de conciergerie"
        },
        presidential: {
          name: "Suite Présidentielle",
          price: "À partir de 650€ / nuit",
          description: "Notre Suite Présidentielle représente le summum du luxe. Avec ses espaces généreux, sa décoration somptueuse et ses services exclusifs, elle offre une expérience incomparable pour les clients les plus exigeants.",
          feature1: "150m² d'espace",
          feature2: "Terrasse privée",
          feature3: "Salle à manger",
          feature4: "Majordome personnel",
          feature5: "Transfert aéroport inclus"
        }
      },
      amenities: {
        title: "Nos Services & Équipements",
        subtitle: "Au Palmeiras, nous nous efforçons de rendre votre séjour aussi confortable et agréable que possible. Découvrez notre large gamme de services et d'équipements conçus pour enrichir votre expérience.",
        restaurant: {
          title: "Restaurant Gastronomique",
          description: "Savourez une cuisine raffinée préparée par notre chef étoilé, mettant en valeur les produits locaux et de saison."
        },
        wifi: {
          title: "Wi-Fi Haut Débit",
          description: "Restez connecté avec notre Wi-Fi gratuit à haut débit disponible dans tout l'établissement."
        },
        valet: {
          title: "Service de Voiturier",
          description: "Profitez de notre service de voiturier et de location de véhicules pour faciliter vos déplacements."
        },
        fitness: {
          title: "Centre de Fitness",
          description: "Maintenez votre routine d'exercice dans notre centre de fitness moderne équipé des dernières machines."
        },
        spa: {
          title: "Spa & Bien-être",
          description: "Détendez-vous dans notre spa luxueux offrant une gamme complète de soins et de massages."
        },
        bar: {
          title: "Bar & Lounge",
          description: "Dégustez des cocktails créatifs et une sélection de vins fins dans notre bar élégant."
        },
        activities: {
          title: "Excursions & Activités",
          description: "Découvrez la région avec nos excursions personnalisées et activités organisées par notre équipe."
        },
        service: {
          title: "Service 24h/24",
          description: "Notre équipe est à votre disposition 24h/24 pour répondre à tous vos besoins pendant votre séjour."
        }
      },
      gallery: {
        title: "Galerie",
        subtitle: "Explorez notre hôtel à travers cette sélection d'images qui capture l'essence du Palmeiras et vous donne un aperçu de l'expérience qui vous attend.",
        filter: {
          all: "Tous",
          interior: "Intérieur",
          exterior: "Extérieur",
          rooms: "Chambres",
          restaurant: "Restaurant",
          spa: "Spa"
        }
      },
      contact: {
        title: "Contact & Réservation",
        subtitle: "Nous sommes à votre disposition pour répondre à toutes vos questions et vous aider à planifier votre séjour parfait au Palmeiras.",
        contactUs: "Nous Contacter",
        address: {
          label: "Adresse",
          value: "123 Avenue des Champs-Élysées, 75008 Paris, France"
        },
        phone: {
          label: "Téléphone",
          value: "+33 (0)1 23 45 67 89"
        },
        email: {
          label: "Email",
          value: "info@lePalmeiras.com"
        },
        hours: {
          label: "Horaires",
          value: "Réception ouverte 24h/24, 7j/7"
        },
        followUs: "Suivez-nous",
        sendMessage: "Envoyez-nous un Message",
        form: {
          name: "Nom complet",
          email: "Email",
          phone: "Téléphone",
          message: "Message",
          send: "Envoyer"
        }
      },
      footer: {
        hotelName: "Le Palmeiras",
        description: "Une expérience hôtelière unique alliant luxe, confort et élégance pour un séjour inoubliable.",
        rights: "Le Palmeiras. Tous droits réservés.",
        quickLinks: "Liens Rapides",
        legal: "Informations Légales",
        legalLinks: {
          terms: "Mentions légales",
          privacy: "Politique de confidentialité",
          conditions: "Conditions générales",
          sitemap: "Plan du site"
        },
        newsletter: "Newsletter",
        newsletterText: "Inscrivez-vous à notre newsletter pour recevoir nos offres spéciales.",
        emailPlaceholder: "Votre email",
        subscribe: "OK"
      }
    },
    
    // English
    en: {
      hotelName: "The Palmeiras",
      nav: {
        home: "Home",
        about: "About",
        rooms: "Rooms",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact",
        book: "Book Now"
      },
      hero: {
        slide1: {
          title: "Welcome to The Palmeiras",
          subtitle: "A unique hotel experience"
        },
        slide2: {
          title: "Luxury and Elegance",
          subtitle: "Discover our exceptional hotel"
        },
        slide3: {
          title: "Relaxation and Serenity",
          subtitle: "A haven of peace in the heart of the city"
        },
        bookNow: "Book Now"
      },
      about: {
        title: "About The Palmeiras",
        paragraph1: "Nestled in an exceptional environment, The Palmeiras is much more than just a hotel. It's a destination where elegance meets comfort, where every detail is designed to create an unforgettable experience.",
        paragraph2: "Our establishment harmoniously combines contemporary architecture and traditional touches, creating a unique atmosphere that will seduce the most demanding travelers.",
        paragraph3: "Whether you're looking for a romantic getaway, a business stay, or a relaxing retreat, The Palmeiras offers you an ideal setting for all your needs.",
        history: {
          title: "Our History",
          text: "Founded in 2010, The Palmeiras quickly established itself as a reference in luxury hospitality, perpetuating a tradition of excellence and hospitality."
        },
        philosophy: {
          title: "Our Philosophy",
          text: "We believe that every stay should be a unique experience. Our team is committed to offering personalized service that exceeds your expectations."
        },
        commitment: {
          title: "Our Commitment",
          text: "Sustainable development is at the heart of our concerns. We implement environmentally friendly practices in all our services."
        }
      },
      rooms: {
        title: "Our Rooms & Suites",
        subtitle: "Discover our elegant rooms and suites, designed to offer optimal comfort and an unforgettable experience. Each space has been meticulously arranged to meet your needs.",
        accommodations: "Our Accommodations",
        features: "Features:",
        bookNow: "Book Now",
        deluxe: {
          name: "Deluxe Room",
          price: "From €250 / night",
          description: "Our Deluxe rooms offer a generous and elegant space, with a breathtaking view of the surroundings. Each room is equipped with a king-size bed, a marble bathroom, and modern amenities.",
          feature1: "King-size bed",
          feature2: "Panoramic view",
          feature3: "Marble bathroom",
          feature4: "Free Wi-Fi",
          feature5: "Minibar"
        },
        junior: {
          name: "Junior Suite",
          price: "From €350 / night",
          description: "Our Junior Suites combine living and sleeping space in a luxurious setting. Enjoy a comfortable stay with high-end amenities and refined decoration.",
          feature1: "Separate living area",
          feature2: "King-size bed",
          feature3: "Separate bath and shower",
          feature4: "Nespresso coffee machine",
          feature5: "Concierge service"
        },
        presidential: {
          name: "Presidential Suite",
          price: "From €650 / night",
          description: "Our Presidential Suite represents the pinnacle of luxury. With its generous spaces, sumptuous decoration, and exclusive services, it offers an incomparable experience for the most demanding clients.",
          feature1: "150m² of space",
          feature2: "Private terrace",
          feature3: "Dining room",
          feature4: "Personal butler",
          feature5: "Airport transfer included"
        }
      },
      amenities: {
        title: "Our Services & Amenities",
        subtitle: "At The Palmeiras, we strive to make your stay as comfortable and enjoyable as possible. Discover our wide range of services and amenities designed to enrich your experience.",
        restaurant: {
          title: "Gourmet Restaurant",
          description: "Savor refined cuisine prepared by our starred chef, highlighting local and seasonal products."
        },
        wifi: {
          title: "High-Speed Wi-Fi",
          description: "Stay connected with our free high-speed Wi-Fi available throughout the establishment."
        },
        valet: {
          title: "Valet Service",
          description: "Take advantage of our valet service and vehicle rental to facilitate your travels."
        },
        fitness: {
          title: "Fitness Center",
          description: "Maintain your exercise routine in our modern fitness center equipped with the latest machines."
        },
        spa: {
          title: "Spa & Wellness",
          description: "Relax in our luxurious spa offering a complete range of treatments and massages."
        },
        bar: {
          title: "Bar & Lounge",
          description: "Enjoy creative cocktails and a selection of fine wines in our elegant bar."
        },
        activities: {
          title: "Excursions & Activities",
          description: "Discover the region with our personalized excursions and activities organized by our team."
        },
        service: {
          title: "24/7 Service",
          description: "Our team is at your disposal 24/7 to meet all your needs during your stay."
        }
      },
      gallery: {
        title: "Gallery",
        subtitle: "Explore our hotel through this selection of images that captures the essence of The Palmeiras and gives you a glimpse of the experience that awaits you.",
        filter: {
          all: "All",
          interior: "Interior",
          exterior: "Exterior",
          rooms: "Rooms",
          restaurant: "Restaurant",
          spa: "Spa"
        }
      },
      contact: {
        title: "Contact & Booking",
        subtitle: "We are at your disposal to answer all your questions and help you plan your perfect stay at The Palmeiras.",
        contactUs: "Contact Us",
        address: {
          label: "Address",
          value: "123 Champs-Élysées Avenue, 75008 Paris, France"
        },
        phone: {
          label: "Phone",
          value: "+33 (0)1 23 45 67 89"
        },
        email: {
          label: "Email",
          value: "info@thePalmeiras.com"
        },
        hours: {
          label: "Hours",
          value: "Reception open 24/7"
        },
        followUs: "Follow Us",
        sendMessage: "Send Us a Message",
        form: {
          name: "Full Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          send: "Send"
        }
      },
      footer: {
        hotelName: "The Palmeiras",
        description: "A unique hotel experience combining luxury, comfort, and elegance for an unforgettable stay.",
        rights: "The Palmeiras. All rights reserved.",
        quickLinks: "Quick Links",
        legal: "Legal Information",
        legalLinks: {
          terms: "Terms of use",
          privacy: "Privacy policy",
          conditions: "General conditions",
          sitemap: "Site map"
        },
        newsletter: "Newsletter",
        newsletterText: "Subscribe to our newsletter to receive our special offers.",
        emailPlaceholder: "Your email",
        subscribe: "OK"
      }
    },
    
    // Portuguese
    pt: {
      hotelName: "O Palmeiras",
      nav: {
        home: "Início",
        about: "Sobre",
        rooms: "Quartos",
        services: "Serviços",
        gallery: "Galeria",
        contact: "Contato",
        book: "Reservar"
      },
      hero: {
        slide1: {
          title: "Bem-vindo ao Palmeiras",
          subtitle: "Uma experiência hoteleira única"
        },
        slide2: {
          title: "Luxo e Elegância",
          subtitle: "Descubra nosso hotel excepcional"
        },
        slide3: {
          title: "Relaxamento e Serenidade",
          subtitle: "Um refúgio de paz no coração da cidade"
        },
        bookNow: "Reservar Agora"
      },
      about: {
        title: "Sobre O Palmeiras",
        paragraph1: "Aninhado em um ambiente excepcional, O Palmeiras é muito mais do que apenas um hotel. É um destino onde a elegância encontra o conforto, onde cada detalhe é projetado para criar uma experiência inesquecível.",
        paragraph2: "Nosso estabelecimento combina harmoniosamente arquitetura contemporânea e toques tradicionais, criando uma atmosfera única que seduzirá os viajantes mais exigentes.",
        paragraph3: "Seja você está procurando uma escapadela romântica, uma estadia de negócios ou um retiro relaxante, O Palmeiras oferece um cenário ideal para todas as suas necessidades.",
        history: {
          title: "Nossa História",
          text: "Fundado em 2010, O Palmeiras rapidamente se estabeleceu como uma referência em hospitalidade de luxo, perpetuando uma tradição de excelência e hospitalidade."
        },
        philosophy: {
          title: "Nossa Filosofia",
          text: "Acreditamos que cada estadia deve ser uma experiência única. Nossa equipe está comprometida em oferecer um serviço personalizado que exceda suas expectativas."
        },
        commitment: {
          title: "Nosso Compromisso",
          text: "O desenvolvimento sustentável está no centro de nossas preocupações. Implementamos práticas ambientalmente amigáveis em todos os nossos serviços."
        }
      },
      rooms: {
        title: "Nossos Quartos & Suítes",
        subtitle: "Descubra nossos elegantes quartos e suítes, projetados para oferecer conforto ideal e uma experiência inesquecível. Cada espaço foi meticulosamente organizado para atender às suas necessidades.",
        accommodations: "Nossas Acomodações",
        features: "Características:",
        bookNow: "Reservar Agora",
        deluxe: {
          name: "Quarto Deluxe",
          price: "A partir de €250 / noite",
          description: "Nossos quartos Deluxe oferecem um espaço generoso e elegante, com uma vista deslumbrante dos arredores. Cada quarto está equipado com uma cama king-size, um banheiro de mármore e comodidades modernas.",
          feature1: "Cama king-size",
          feature2: "Vista panorâmica",
          feature3: "Banheiro de mármore",
          feature4: "Wi-Fi gratuito",
          feature5: "Minibar"
        },
        junior: {
          name: "Suíte Júnior",
          price: "A partir de €350 / noite",
          description: "Nossas Suítes Júnior combinam espaço de estar e dormir em um ambiente luxuoso. Desfrute de uma estadia confortável com comodidades de alta qualidade e decoração refinada.",
          feature1: "Área de estar separada",
          feature2: "Cama king-size",
          feature3: "Banheira e chuveiro separados",
          feature4: "Máquina de café Nespresso",
          feature5: "Serviço de concierge"
        },
        presidential: {
          name: "Suíte Presidencial",
          price: "A partir de €650 / noite",
          description: "Nossa Suíte Presidencial representa o auge do luxo. Com seus espaços generosos, decoração suntuosa e serviços exclusivos, oferece uma experiência incomparável para os clientes mais exigentes.",
          feature1: "150m² de espaço",
          feature2: "Terraço privado",
          feature3: "Sala de jantar",
          feature4: "Mordomo pessoal",
          feature5: "Transferência do aeroporto incluída"
        }
      },
      amenities: {
        title: "Nossos Serviços & Comodidades",
        subtitle: "No Palmeiras, nos esforçamos para tornar sua estadia o mais confortável e agradável possível. Descubra nossa ampla gama de serviços e comodidades projetados para enriquecer sua experiência.",
        restaurant: {
          title: "Restaurante Gourmet",
          description: "Saboreie uma culinária refinada preparada pelo nosso chef estrelado, destacando produtos locais e sazonais."
        },
        wifi: {
          title: "Wi-Fi de Alta Velocidade",
          description: "Mantenha-se conectado com nosso Wi-Fi gratuito de alta velocidade disponível em todo o estabelecimento."
        },
        valet: {
          title: "Serviço de Manobrista",
          description: "Aproveite nosso serviço de manobrista e aluguel de veículos para facilitar suas viagens."
        },
        fitness: {
          title: "Centro de Fitness",
          description: "Mantenha sua rotina de exercícios em nosso moderno centro de fitness equipado com as últimas máquinas."
        },
        spa: {
          title: "Spa & Bem-estar",
          description: "Relaxe em nosso luxuoso spa oferecendo uma gama completa de tratamentos e massagens."
        },
        bar: {
          title: "Bar & Lounge",
          description: "Desfrute de coquetéis criativos e uma seleção de vinhos finos em nosso elegante bar."
        },
        activities: {
          title: "Excursões & Atividades",
          description: "Descubra a região com nossas excursões personalizadas e atividades organizadas pela nossa equipe."
        },
        service: {
          title: "Serviço 24/7",
          description: "Nossa equipe está à sua disposição 24 horas por dia, 7 dias por semana, para atender a todas as suas necessidades durante sua estadia."
        }
      },
      gallery: {
        title: "Galeria",
        subtitle: "Explore nosso hotel através desta seleção de imagens que capturam a essência do Palmeiras e lhe dão um vislumbre da experiência que o aguarda.",
        filter: {
          all: "Todos",
          interior: "Interior",
          exterior: "Exterior",
          rooms: "Quartos",
          restaurant: "Restaurante",
          spa: "Spa"
        }
      },
      contact: {
        title: "Contato & Reservas",
        subtitle: "Estamos à sua disposição para responder a todas as suas perguntas e ajudá-lo a planejar sua estadia perfeita no Palmeiras.",
        contactUs: "Entre em Contato",
        address: {
          label: "Endereço",
          value: "123 Avenida Champs-Élysées, 75008 Paris, França"
        },
        phone: {
          label: "Telefone",
          value: "+33 (0)1 23 45 67 89"
        },
        email: {
          label: "Email",
          value: "info@oPalmeiras.com"
        },
        hours: {
          label: "Horários",
          value: "Recepção aberta 24/7"
        },
        followUs: "Siga-nos",
        sendMessage: "Envie-nos uma Mensagem",
        form: {
          name: "Nome Completo",
          email: "Email",
          phone: "Telefone",
          message: "Mensagem",
          send: "Enviar"
        }
      },
      footer: {
        hotelName: "O Palmeiras",
        description: "Uma experiência hoteleira única combinando luxo, conforto e elegância para uma estadia inesquecível.",
        rights: "O Palmeiras. Todos os direitos reservados.",
        quickLinks: "Links Rápidos",
        legal: "Informações Legais",
        legalLinks: {
          terms: "Termos de uso",
          privacy: "Política de privacidade",
          conditions: "Condições gerais",
          sitemap: "Mapa do site"
        },
        newsletter: "Newsletter",
        newsletterText: "Inscreva-se em nossa newsletter para receber nossas ofertas especiais.",
        emailPlaceholder: "Seu email",
        subscribe: "OK"
      }
    }
  };