const hotels = [
    {
        image: "assets/img/hotels/ironhill-bengaluru/1.jpg",
        category: "Brewery",
        rating: "4.7 (39k)",
        link: "https://share.google/hnWkgOsQFHLBUUsti",
        name: "Ironhill Bengaluru",
        address: "Sy no 90, 7 & 90/8, Outer Ring Rd, beside Radisson Blu 8, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?sca_esv=6a3dc1d72e9664c9&aep=1&biw=1536&bih=730&sxsrf=ANbL-n78IDDRk4jvnJjvhrHlO6fdWtemoA:1771225386907&kgmid=/g/11r4w7wfq5&shndl=30&kgs=2d8336ca885ec752&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KbethdasE647Mc2objGQMcWD&daddr=Sy+no+90,+7+%26+90/8,+Outer+Ring+Rd,+beside+Radisson+Blu+8,+Marathahalli+Village,+Marathahalli,+Bengaluru,+Karnataka+560037"
    },
    {
        image: "assets/img/hotels/dhaba-estd-1986/1.jpg",
        category: "North Indian restaurant",
        rating: "3.9 (4k)",
        link: "https://share.google/WHyvIVnKyyt0Ytg6R",
        name: "Dhaba Estd 1986 Delhi, Indiranagar",
        address: "2nd Floor, 618, 12th Main Rd, above Namdhari, 7th Cross, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n76le35m_YnwTT6D3quZWcpOZLaeg:1771225600387&kgmid=/g/11c2ppnhl5&shndl=30&kgs=2cddce29fc7b9344&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KXcoJ-OnFq47Me-TbxiVIjAE&daddr=2nd+Floor,+618,+12th+Main+Rd,+above+Namdhari,+7th+Cross,+HAL+2nd+Stage,+Indiranagar,+Bengaluru,+Karnataka+560008"
    },
    {
        image: "assets/img/hotels/nakkshatra-by-nagarjuna/1.jpg",
        category: "North Indian restaurant",
        rating: "4.2 (4k)",
        link: "https://share.google/qw1LlXpus8ufsFlZF",
        name: "Nakkshatra By Nagarjuna",
        address: "No. 88, 1st Floor, next to More Megastore, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?aep=1&sca_esv=6a3dc1d72e9664c9&biw=1536&bih=730&sxsrf=ANbL-n7yiWAQ69rw6UZhD9c5p2zCKt9APA:1771225626631&kgmid=/g/11fx81rl9k&shndl=30&kgs=a3824ac01d2adc6a&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRcK40i1E647MeN90JQ8FDna&daddr=No.+88,+1st+Floor,+next+to+More+Megastore,+Marathahalli+Village,+Marathahalli,+Bengaluru,+Karnataka+560037"
    },
    {
        image: "assets/img/hotels/proxy-rooftop-bar-kitchen/1.jpg",
        category: "Bar",
        rating: "4.0 (870)",
        link: "https://share.google/77WSKpKvVDE3o3tPm",
        name: "Proxy Rooftop Bar & Kitchen",
        address: "22/3, 5th Floor, Icon Select by Bhagini, Outer Ring Rd, near More Mega Store, Saraswathi Nagar, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n48oKCcMnhblHhgEPMvkX_smsPyJQ:1771225664935&kgmid=/g/11txjdch9r&shndl=30&kgs=d597787805a83335&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVUCL1kQEa47MdynElpms_HH&daddr=22/3,+Outer+Ring+Rd,+Bengaluru"
    },
    {
        image: "assets/img/hotels/sichuan/1.jpg",
        category: "Chinese restaurant",
        rating: "4.0 (870)",
        link: "https://share.google/j5ct0H7SjJaNyxVmw",
        name: "Sichuan",
        address: "Ground Floor, Sobha Lakeview Club House, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103",
        map: "https://www.google.com/maps/dir//Sichuan,+Ground+Floor,+Sobha+Lakeview+Club+House,+Green+Glen+Layout,+Bellandur,+Bengaluru,+Karnataka+560103/@12.9411873,77.6656664,6790m/data=!3m2!1e3!5s0x3bae139e7f395fa3:0x7fd55354a5992bd6!4m9!4m8!1m0!1m5!1m1!1s0x3bae134f3e86452f:0xa3b75006cd7b90a7!2m2!1d77.6723954!2d12.9289499!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/the-big-baadshaah/1.jpg",
        category: "Pub",
        rating: "4.3 (4.3k)",
        link: "https://share.google/ZJ35lMxfYpdCwT1qk",
        name: "The Big Baadshaah",
        address: "2nd Floor, 88, Outer Ring Rd, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps/dir/12.9540363,77.6929918/The+Big+Baadshaah,+2nd+Floor,+88,+Outer+Ring+Rd,+near+More+Supermarket,+Marathahalli+Village,+Marathahalli,+Bengaluru,+Karnataka+560037/@12.9513748,77.6908591,1697m/data=!3m2!1e3!4b1!4m18!1m7!3m6!1s0x3bae13f0104466e7:0xd5f32cc24b24f541!2sThe+Big+Baadshaah!8m2!3d12.9484311!4d77.6987728!16s%2Fg%2F11syr257nz!4m9!1m1!4e1!1m5!1m1!1s0x3bae13f0104466e7:0xd5f32cc24b24f541!2m2!1d77.6987728!2d12.9484311!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/chowki-multicuisine-restaurant/1.jpg",
        category: "Indian restaurant",
        rating: "4.3 (2.3k)",
        link: "https://share.google/1hZLRYS1VHr7K954f",
        name: "Chowki Multi Cuisine Restaurant",
        address: "61, Main Rd, Whitefield, Nallurhalli, Bengaluru, Karnataka 560066",
        map: "https://www.google.com/maps/dir/12.9540363,77.6929918/Chowki+Multi+cuisine+restaurant,+61,+Main+Rd,+Whitefield,+Nallurhalli,+Bengaluru,+Karnataka+560066/@12.9614362,77.6730755,13579m/data=!3m2!1e3!4b1!4m18!1m7!3m6!1s0x3bae139709f27231:0x7efe062b995ee069!2sChowki+Multi+cuisine+restaurant!8m2!3d12.9688425!4d77.7354608!16s%2Fg%2F11s5h9gsvn!4m9!1m1!4e1!1m5!1m1!1s0x3bae139709f27231:0x7efe062b995ee069!2m2!1d77.7354608!2d12.9688425!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/nusa-tropical-brewvilla/1.jpg",
        category: "North Indian restaurant",
        rating: "4.3 (6.8k)",
        link: "https://share.google/UmlgS3bhAebHknps8",
        name: "Nusa - Tropical Brewvilla",
        address: "23-A, Chaithanya Sharan X, Gunjur Village, Bengaluru, Karnataka 560087",
        map: "https://www.google.com/maps/dir//Nusa+-+Tropical+Brewvilla,+23-A+,+chaithanya+sharan+X,+Gunjur+Village,+Bengaluru,+Karnataka+560087/@12.9413383,77.672713,13580m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3bae13c453e380df:0x194df077f80b3937!2m2!1d77.7348309!2d12.9258327!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/anTeRa-kitchen-and-bar/1.jpg",
        category: "South Indian restaurant",
        rating: "4.4 (2k)",
        link: "https://share.google/qnXmtahytJetRyStP",
        name: "AnTeRa Kitchen and Bar - Marathahalli",
        address: "Outer Ring Rd, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps/dir//AnTeRa+Kitchen+and+Bar+-+Marathahalli,+Outer+Ring+Rd,+Marathahalli,+Bengaluru,+Karnataka+560037/@12.9519154,77.6920141,1697m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3bae1390e7e1cf49:0x6f57ae3ade11b1e2!2m2!1d77.699136!2d12.9471197!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/oasis-brewery/1.jpg",
        category: "Brewpub",
        rating: "4.7 (2.1k)",
        link: "https://share.google/RQgP4TKk0CCXmsYEc",
        name: "Oasis Brewery",
        address: "Whitefield Main Road, Devasandra Industrial Estate, Bengaluru, Karnataka 560048",
        map: "https://www.google.com/maps/dir//Oasis+Brewery,+Sy+No.+26,+Plot+No+1A+%26+2B,+Whitefield+Main+Road,+Devasandra+Industrial+Estate,+Area,+Bengaluru,+Karnataka+560048/@12.9756006,77.6694854,6789m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3bae11c9fd0a9ca1:0x9d7c7089c9f4fd81!2m2!1d77.6910558!2d12.9973211!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/szechuan-dragon/1.jpg",
        category: "Chinese restaurant",
        rating: "4.7 (331)",
        link: "https://share.google/m3vofVEr8ayjGYyC3",
        name: "Szechuan Dragon",
        address: "1st Floor 312, ITPL Main Road AECS Layout, Kundalahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?q=Szechuan+Dragon+Kundalahalli"
    },
    {
        image: "assets/img/hotels/zaffran-by-tbc/1.jpg",
        category: "North West Frontier Cuisine",
        rating: "4.7 (590)",
        link: "https://share.google/yfUVITNolMKLnxNJm",
        name: "Zaffran By TBC",
        address: "Astra Hotel, Silver Spring Layout, Varthur Main Rd, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?q=Zaffran+By+TBC+Bengaluru"
    },
    {
        image: "assets/img/hotels/barkaas/1.jpg",
        category: "Middle Eastern restaurant",
        rating: "4.2 (5.9k)",
        link: "https://share.google/Sk4E0oZ3bEVzqJmih",
        name: "Barkaas",
        address: "Krishna Icon, Marathahalli Village, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?q=Barkaas+Marathahalli"
    },
    {
        image: "assets/img/hotels/kaavu/1.jpg",
        category: "Restaurant",
        rating: "4.3 (3.1k)",
        link: "https://share.google/BxM5kVffVTIxKKE3u",
        name: "Kaavu",
        address: "Pattandur Agrahara Village Main Rd, Brookefield, Bengaluru, Karnataka 560066",
        map: "https://www.google.com/maps?q=Kaavu+Brookefield+Bengaluru"
    },
    {
        image: "assets/img/hotels/helens-place/1.jpg",
        category: "Restaurant",
        rating: "4.3 (3.3k)",
        link: "https://share.google/a0JdCd1fQxLRNljhs",
        name: "Helen’s Place Marathahalli",
        address: " No 90 Above Titan World, Marathahalli , Service Road, Outer Ring Rd, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps/dir//Helen%E2%80%99s+Place+Marathahalli,+No+90+Above+Titan+World,+Marathahalli+,+Service+Road,+Outer+Ring+Rd,+Chandra+Layout,+Marathahalli,+Bengaluru,+Karnataka+560037/@12.9579976,77.692521,3395m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae13e87fea2821:0x482a4079c4d7cc5f!2m2!1d77.6998876!2d12.9508464?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        image: "assets/img/hotels/hamilton-cocktail-bar/1.jpg",
        category: "Cocktail bar",
        rating: "4.2 (174)",
        link: "https://share.google/oKNM8IeHOAp5QdBZV",
        name: "Hamilton Cocktail Bar",
        address: "2, behind HDFC Bank, Doddanakundi Industrial Area 2, Seetharampalya, Hoodi, Bengaluru, Karnataka 560048",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n66tYcgWiWeojjuWSTjZJi9H7x7wA:1771226046292&kgmid=/g/11m67hlvmz&shndl=30&kgs=eeeb3da8a56498fb&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVU3gLV5Ea47MT8gCc3cZdBw&daddr=2,+behind+HDFC+Bank,+Doddanakundi+Industrial+Area+2,+Seetharampalya,+Hoodi,+Bengaluru,+Karnataka+560048"
    },
    {
        image: "assets/img/hotels/black-pearl-barbeque-restaurant/1.jpg",
        category: "Buffet restaurant",
        rating: "4.3 (38k)",
        link: "https://share.google/7Ci8cAMFa3VCU4ic2",
        name: "Black Pearl Barbeque Restaurant",
        address: "Lagoto Building, 7, Swami Building, 6th, Outer Ring Rd, Kadubeesanahalli, Marathahalli, Bengaluru, Karnataka 560103",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n7UT2-xkU98M7dv9vTZdudnyyYpwA:1771226064975&kgmid=/g/11cn2m4zmz&shndl=30&kgs=8e3152bc732cddb1&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KX0EnxWyE647MZZMcBQWlFAa&daddr=Lagoto+Building,+7,+Swami+Building,+6th,+Outer+Ring+Rd,+Kadubeesanahalli,+Marathahalli,+Bengaluru,+Karnataka+560103"
    },
    {
        image: "assets/img/hotels/hoot-craftworks-2.0/1.jpg",
        category: "Brewery",
        rating: "4.2 (22k)",
        link: "https://share.google/fmfURdOomvJTO6gFZ",
        name: "Hoot Craftworks 2.0",
        address: "Block 2, Village, Varthur, BBMP, 2034/69, Ambalipura - Sarjapur Rd, Kaikondrahalli, Bengaluru, Karnataka 560035",
        map: "https://www.google.com/maps?aep=1&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n4pFxXbQI8mpiYXGtJSTsAJy7ee3Q:1771842655612&biw=1536&bih=730&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kafj_388E647Mdwrbug8SlgJ&daddr=Block+2,+Village,+Varthur,+BBMP,+2034/69,+Ambalipura+-+Sarjapur+Rd,+Kaikondrahalli,+Bengaluru,+Karnataka+560035"
    },
    {
        image: "assets/img/hotels/big-pitcher-indiranagar/1.jpg",
        category: "Brewery",
        rating: "4.4 (30k)",
        link: "https://share.google/OuOkcaKICPDxbo753",
        name: "Big Pitcher Indiranagar",
        address: "Ward No.88, L R Arcade, No.4121, HAL Old Airport Rd, next to The Leela Palace, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n7zoNYLUNN54LUo98VOi-avoiJprw:1771226101395&kgmid=/g/1ptxfyn30&shndl=30&kgs=08f6bc8912adab6b&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZmBcsQFFK47MUNtNPUbAN3D&daddr=Ward+No.88,+L+R+Arcade,+No.4121,+HAL+Old+Airport+Rd,+next+to+The+Leela+Palace,+HAL+2nd+Stage,+Indiranagar,+Bengaluru,+Karnataka+560008"
    },
    {
        image: "assets/img/hotels/triple-eight-rooftop/1.jpg",
        category: "Gastropub",
        rating: "4.1 (4.4k)",
        link: "https://share.google/sFHl2SkY0rAcaL09S",
        name: "TRIPLE EIGHT Rooftop Bar & Kitchen",
        address: "Devarachikkanahalli main road, Bannerghatta Rd, above Akshara eye hospital, Thayappa Garden, Ranka Colony, Bilekahalli, Bengaluru, Karnataka 560076",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n5re9a2vNZcsYLRJ4eVyXgmkSr5VA:1771226122185&kgmid=/g/11hbk4jrb1&shndl=30&kgs=17048b396886fa2f&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRPEfT53Fq47Mboyy_LYes5d&daddr=Devarachikkanahalli+main+road,+Bannerghatta+Rd,+above+Akshara+eye+hospital,+Thayappa+Garden,+Ranka+Colony,+Bilekahalli,+Bengaluru,+Karnataka+560076"
    },
    {
        image: "assets/img/hotels/tbc-sky-lounge-kadubisanahalli/1.jpg",
        category: "Lounge",
        rating: "4.3 (9.1k)",
        link: "https://share.google/IFFs1aWRS5ioyioFU",
        name: "TBC Sky Lounge - Kadubisanahalli",
        address: "5th Floor, Berry's Hotel, 36/1, Marathahalli - Sarjapur Outer Ring Rd, opposite JP Morgan, Kadubeesanahalli, Bengaluru, Karnataka 560103",
        map: "https://www.google.com/maps?aep=1&sca_esv=6a3dc1d72e9664c9&cs=1&kgmid=/g/11gwf8cd1r&shndl=30&kgs=05c93e207c5fbd5a&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTGqgHuxE647MTSD3OqLgcOG&daddr=5th+Floor,+Berry%27s+Hotel,+36/1,+Marathahalli+-+Sarjapur+Outer+Ring+Rd,+opposite+JP+Morgan,+Kadubeesanahalli,+Bengaluru,+Karnataka+560103"
    },
    {
        image: "assets/img/hotels/cbd-central-bar-district/1.jpg",
        category: "Bar & grill",
        rating: "4.3 (623)",
        link: "https://share.google/OSmUYkrBrlRgBeGzL",
        name: "CBD Central Bar District",
        address: "3, Church St, Shanthala Nagar, MSR, Bengaluru, Karnataka 560001",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n6uMzrumOM5Jl1r_rm4yuKFY3tU2w:1771226156795&kgmid=/g/11x77sb421&shndl=30&kgs=19e6c78184dd7bdb&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdXoRXGqF647MUjw0sD2d7dh&daddr=3,+Church+St,+Shanthala+Nagar,+MSR,+Bengaluru,+Karnataka+560001"
    },
    {
        image: "assets/img/hotels/armadq-gastro-pub/1.jpg",
        category: "Pub",
        rating: "4.3 (147)",
        link: "https://share.google/Yc4jCR99PNz8KdSHh",
        name: "Armadq Gastro Pub",
        address: "3rd Floor, Sri Kote Ashirwad Towers No, 25/7, Outer Ring Rd, Doddanekundi, Mahadevapura, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n63e69-y6WzFYmHSew8Sw6BtWZU8w:1771226173794&kgmid=/g/11ychc20dy&shndl=30&kgs=51509db72b15a481&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KS2thq7xEa47MWonNAqlFPOo&daddr=3rd+Floor,+Sri+Kote+Ashirwad+Towers+No,+25/7,+Outer+Ring+Rd,+Doddanekundi,+Mahadevapura,+Bengaluru,+Karnataka+560037"
    },
    {
        image: "assets/img/hotels/hashtag-88-pub-bar-kitchen/1.jpg",
        category: "Pub",
        rating: "4.5 (4.6k)",
        link: "https://share.google/s7XfVt6zlZcvgLSpi",
        name: "Hashtag 88 – Pub | Bar | Kitchen",
        address: "4th Floor, above More Hypermarket, near Innovative Multiplex, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n7Th98FPHFjARlpEReN_X8PiGRGgA:1771226188765&kgmid=/g/11tk4b_6k2&shndl=30&kgs=d8f86e5c554911e1&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kb1TrUnDE647MfRALWDHN0aA&daddr=4th+Floor,+above+More+Hypermarket,+near+Innovative+Multiplex,+Marathahalli+Village,+Marathahalli,+Bengaluru,+Karnataka+560037"
    },
    {
        image: "assets/img/hotels/deck-of-brews-brewery-kitchen/1.jpg",
        category: "Brewpub",
        rating: "4.3 (3.6k)",
        link: "https://share.google/OtpMixQ6f4mZozwRk",
        name: "Deck of Brews- Brewery & Kitchenn",
        address: "4th Floor, above More Hypermarket, near Innovative Multiplex, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?aep=1&biw=1536&bih=730&sca_esv=6a3dc1d72e9664c9&sxsrf=ANbL-n5B6CGHYGcQYzhLYyvbI49UrrfOSA:1771226203859&kgmid=/g/11stdqtt6d&shndl=30&kgs=c074bfd772ebc49b&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KT3blXBxE647MUtBC_3DJmhR&daddr=Gear+School+Rd,+Kaverappa+Layout,+Kadubeesanahalli,+Bengaluru,+Karnataka+560103"
    },
    {
        image: "assets/img/hotels/iron-timber-lounge/1.jpg",
        category: "Bar",
        rating: "4.8 (182)",
        link: "https://share.google/OQVzjUEL17qbHssGT",
        name: "Iron & Timber Lounge",
        address: "2nd Floor, BEML Layout, Brookefield, Bengaluru, Karnataka 560037",
        map: "https://www.google.com/maps?aep=1&sca_esv=6a3dc1d72e9664c9&biw=1536&bih=730&sxsrf=ANbL-n5iKbOt2IqM8P7Bcimwh35ooySltw:1771225552376&kgmid=/g/11xnqs9h6g&shndl=30&kgs=47b5c092f524ac5d&shem=shrtsdl&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KU-GhGgAE647Mdkb_6f29e9j&daddr=2nd+Floor,+BEML+Layout,+Brookefield,+Bengaluru,+Karnataka+560037"
    }
];
const container = document.getElementById("hotelContainer");

hotels.forEach(hotel => {
    container.innerHTML += `
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
        <div class="course-item">
          <img src="${hotel.image}" class="img-fluid" alt="${hotel.name}">
          <div class="course-content">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <p class="category">${hotel.category}</p>
              <p class="price">${hotel.rating}</p>
            </div>
            <h3>
              <a href="${hotel.link}" target="_blank">${hotel.name}</a>
            </h3>
            <p class="description">${hotel.address}</p>
            <div class="trainer d-flex justify-content-between align-items-center">
              <a target="_blank" href="${hotel.map}" 
                 class="category" 
                 style="background-color: rgb(83, 87, 126);">
                 Google Map
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
});