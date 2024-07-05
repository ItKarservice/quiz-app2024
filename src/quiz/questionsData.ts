import { ROLES, Roles } from "./questions";

export const questions = [
        {
            question: "1. En perfekt helg är när du får...",
            answers: [
                {
                    text: "Fixa veckans matlådor!",
                    picture: "",
                    roles: [ROLES.CHEF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar1a.jpeg"
                },
                {
                    text: "Kolla på tiktok 48 timmar oavbrutet.",
                    picture: "",
                    roles: [ROLES.MF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar1b.jpeg"
                },
                {
                    text: "Ta tag i tvätthögen.",
                    picture: "",
                    roles: [ROLES.HOST, ROLES.HG],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar1c.jpeg"
                },
                {
                    text: "Klubba såklart!",
                    picture: "",
                    roles: [ROLES.BAR, ROLES.DJ],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar1d.jpeg"
                },
            ]
        },
        {
            question: "2. Du står bakom baren och kön börjar sträcka sig ut genom dörren, du...",
            answers: [
                {
                    text: "Lägger in en extra växel och börjar bilda en extra kö, nu jävlar!",
                    picture: "",
                    roles: [ROLES.BAR],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/2-1-1-scaled.jpg"
                },
                {
                    text: "Gömmer dig bakom baren och börjar hyperventilera.",
                    picture: "",
                    roles: [ROLES.MF, ROLES.DJ],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/2-3-scaled.jpeg"


                },
                {
                    text: "Tar ett djupt andetag och gör ditt allra bästa",
                    picture: "",
                    roles: [ROLES.CHEF, ROLES.HG], 
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/2-2-scaled.jpeg"

                },
                {
                    text: "Taggar till dina medarbetare, det här klarar vi!",
                    picture: "",
                    roles: [ROLES.HOST],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/2-4-scaled.jpeg"
                },
            ]
        },
        {
            question: "3. Under grupprojekt är du alltid den som...",
            answers: [
                {
                    text: "Ser till att alla känner sig inkluderade. Teamwork makes the dream work!",
                    picture: "",
                    roles: [ROLES.CHEF, ROLES.HOST],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/3-1-scaled.jpeg"
                },
                {
                    text: "Skapar den snyggaste presentationen så att du garanterat får högsta betyg.",
                    picture: "",
                    roles: [ROLES.MF],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/3-3-1-scaled.jpg"

                },
                {
                    text: "Hjälper till där det behövs!",
                    picture: "",
                    roles: [ROLES.HG],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/3-2.jpg"

                },
                {
                    text: "Väntar till sista minut innan jag gör min del. Prokrastinering är en livsstil!",
                    picture: "",
                    roles: [ROLES.BAR, ROLES.DJ],
                    url: "https://studentlivet.se/wp-content/uploads/sites/7/2024/07/3-4.jpg"
                },
            ]
        },
        {
            question: "4. Välj ditt spirit-animal!",
            answers: [
                {
                    text: "Gepard: Snabb & målmedveten",
                    picture: "",
                    roles: [ROLES.BAR],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar4a.jpeg"
                },
                {
                    text: "Hund: Trogen & ödmjuk",
                    picture: "",
                    roles: [ROLES.CHEF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar4b.jpeg"
                },
                {
                    text: "Delfin: Social & smart",
                    picture: "",
                    roles: [ROLES.HOST, ROLES.MF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar4c.jpeg"
                },
                {
                    text: "Kameleont: Flexibel & kreativ",
                    picture: "",
                    roles: [ROLES.HG, ROLES.DJ],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar4d.jpeg"
                },
            ]
        },
        {
            question: "5. Oh no! Gränges börjar ta slut, vad gör du?",
            answers: [
                {
                    text: "Börjar instinktivt marknadsföra våra andra härliga drycker, hot-shots någon?",
                    picture: "",
                    roles: [ROLES.MF],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/present-scaled.jpg"
                },
                {
                    text: "Underhåller folket bakom baren medan din kollega fyller på ölen.",
                    picture: "",
                    roles: [ROLES.HOST, ROLES.DJ],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/distract-scaled.jpg"
                },
                {
                    text: "Gränges tar inte slut när jag jobbar, det fyllde jag på tidigare!",
                    picture: "",
                    roles: [ROLES.BAR],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/beer-scaled.jpg"
                },
                {
                    text: "Jag rekommenderar vårt närmaste alternativ, du kommer knappt känna skillnaden!",
                    picture: "",
                    roles: [ROLES.HG, ROLES.CHEF],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/recomend-scaled.jpg"
                },
            ]
        },
        {
            question: "6. Ditt dröm-studentliv i en bild:",
            answers: [
                {
                    text: "Fest",
                    picture: "",
                    roles: [ROLES.BAR, ROLES.HG],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar6a.jpeg"
                },
                {
                    text: "Kompisar",
                    picture: "",
                    roles: [ROLES.HOST, ROLES.CHEF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar6b.jpeg"
                },
                {
                    text: "Plugg (A+)",
                    picture: "",
                    roles: [ROLES.MF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar6c.jpeg"
                },
                {
                    text: "Sova",
                    picture: "",
                    roles: [ROLES.DJ],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar6d.jpeg"
                },
            ]
        },
        {
            question: "7. Välj en film!",
            answers: [
                {
                    text: "Ratatouille",
                    picture: "",
                    roles: [ROLES.CHEF],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar7a.jpeg"
                },
                {
                    text: "Star Wars",
                    picture: "",
                    roles: [ROLES.DJ],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar7b.jpeg"
                },
                {
                    text: "Inception",
                    picture: "",
                    roles: [ROLES.MF, ROLES.HG],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar7c.jpg"
                },
                {
                    text: "Dirty dancing",
                    picture: "",
                    roles: [ROLES.BAR, ROLES.HOST],
                    url:"http://studentlivet.se/wp-content/uploads/sites/7/2023/08/Svar7d.jpeg"
                },
            ]
        },
        {
            question: "8. Du är på din första kravall och din kompis börjar må dåligt, du...",
            answers: [
                {
                    text: "Ser till att kompisen får i sig vatten, sen festar vi vidare!",
                    picture: "",
                    roles: [ROLES.BAR, ROLES.DJ],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/8-1-2-scaled.jpg"
                },
                {
                    text: "Stämmer av med kompisen, “Dags att gå hem?”",
                    picture: "",
                    roles: [ROLES.HOST],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/8-2.jpg"
                },
                {
                    text: "Drar ner tempot, sätter oss nånstans och kör två lögner en sanning.",
                    picture: "",
                    roles: [ROLES.MF, ROLES.HG],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/8-3-2-scaled.jpg"
                },
                {
                    text: "Tar med festen till donken! Käk löser detta.",
                    picture: "",
                    roles: [ROLES.CHEF],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/8-4-2-scaled.jpg"
                },
            ]
        },
        {
            question: "9. Vad skulle du ta med dig till en öde ö?",
            answers: [
                {
                    text: "Kniv",
                    picture: "",
                    roles: [ROLES.CHEF, ROLES.HG],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/9-1-1-scaled.jpeg"
                },
                {
                    text: "Mobil",
                    picture: "",
                    roles: [ROLES.MF, ROLES.DJ],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/9-3-1-scaled.jpeg"
                },
                {
                    text: "Kompis",
                    picture: "",
                    roles: [ROLES.HOST],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/9-2-1-scaled.jpeg"
                },
                {
                    text: "Piña Colada",
                    picture: "",
                    roles: [ROLES.BAR],
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/9-4.jpeg"
                },
            ]
        },
        {
            question: "10. Till sist, vad tyckte du om quizet?",
            answers: [
                {
                    text: "Toppenbra!!!",
                    picture: "",
                    roles: [],                    
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/10-1-scaled.jpeg"

                },
                {
                    text: "Helt ok.",
                    picture: "",
                    roles: [],                    
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/10-3-scaled.jpeg"

                },
                {
                    text: "Snaaaaaark.",
                    picture: "",
                    roles: [],                    
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/10-2.jpg"

                },
                {
                    text: "Jag vill ha mitt svar nu!",
                    picture: "",
                    roles: [],                    
                    url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/10-3-scaled.jpg"

      
                },
            ]
        },
        {
            question: "11. Vart vill du helst jobba?",
            answers: [
              {
                text: "Linköping",
                picture: "",
                roles: [ROLES.Link], 
                location: "Linköping",
                url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/link-scaled.jpg"
              },
              {
                text: "Norrköping",
                picture: "",
                roles: [ROLES.Norr], 
                location: "Norrköping",
                url:"https://studentlivet.se/wp-content/uploads/sites/7/2024/07/nork-scaled.jpg"
              },
            ]
          },
      
];