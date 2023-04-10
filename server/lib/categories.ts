import { IDropdownElement } from "@components/UI/MenuOption"

export const laptopDropdown : IDropdownElement[] = [
    { 
        header: { text: "Лаптопи", href: "/catalog/laptops/work-laptops"},
        content: [
            { text: "Apple", href: '/catalog/laptops/work-laptops?query=Apple'},
            { text: "ASUS", href: '/catalog/laptops/work-laptops?query=ASUS'},
            { text: "Dell", href: '/catalog/laptops/work-laptops?query=Dell'},
            { text: "Lenovo", href: '/catalog/laptops/work-laptops?query=Lenovo'},
            { text: "Toshiba", href: '/catalog/laptops/work-laptops?query=Toshiba'},
        ] 
    },
    { 
        header: { text: "Геймърски Лаптопи", href: "/catalog/laptops/gaming-laptops"},
        content: [
            { text: "ASUS", href: '/catalog/laptops/gaming-laptops?query=ASUS'},
            { text: "Dell", href: '/catalog/laptops/gaming-laptops?query=Dell'},
            { text: "Lenovo", href: '/catalog/laptops/gaming-laptops?query=Lenovo'},
            { text: "HP", href: '/catalog/laptops/gaming-laptops?query=HP'},
            { text: "Razer", href: '/catalog/laptops/gaming-laptops?query=Razer'},
            { text: "Alienware", href: '/catalog/laptops/gaming-laptops?query=Alienware'},
        ] 
    },
    { 
        header: { text: "Адаптери", href: "/catalog/laptops/adapters"},
        content: [
            { text: "ASUS", href: '/catalog/laptops/adapters?query=ASUS'},
            { text: "Toshiba", href: '/catalog/laptops/adapters?query=Toshiba'},
            { text: "Lenovo", href: '/catalog/laptops/adapters?query=Lenovo'},
            { text: "Acer", href: '/catalog/laptops/adapters?query=Acer'},
            { text: "HP", href: '/catalog/laptops/adapters?query=HP'},
            { text: "Sony", href: '/catalog/laptops/adapters?query=Sony'},
            { text: "Samsung", href: '/catalog/laptops/adapters?query=Samsung'},
        ] 
    },     
    { 
        header: { text: "Батерии", href: "/catalog/laptops/laptop-battery"},
        content: [] 
    },  
    { 
        header: { text: "Видео карти", href: "/catalog/laptops/graphic-cards"},
        content: [
            { text: "ASUS", href: '/catalog/laptops/graphic-cards?query=ASUS'},
            { text: "GIGABYTE", href: '/catalog/laptops/graphic-cards?query=GIGABYTE'},
            { text: "MSI", href: '/catalog/laptops/graphic-cards?query=MSI'},
            { text: "ASRock", href: '/catalog/laptops/graphic-cards?query=ASRock'},
            { text: "Zotac", href: '/catalog/laptops/graphic-cards?query=Zotac'},
            { text: "EVGA", href: '/catalog/laptops/graphic-cards?query=EVGA'},
        ] 
    }, 
    { 
        header: { text: "Памети", href: "/catalog/laptops/memory"},
        content: [
            { text: "DDR", href: '/catalog/laptops/memory?query=DDR'},
            { text: "DDR2", href: '/catalog/laptops/memory?query=DDR2'},
            { text: "DDR3", href: '/catalog/laptops/memory?query=DDR3'},
            { text: "DDR4", href: '/catalog/laptops/memory?query=DDR4'},
            { text: "DDR5", href: '/catalog/laptops/memory?query=DDR5'},
        ] 
    }, 
    { 
        header: { text: "HDD/SSD", href: "/catalog/laptops/hdd-ssd"},
        content: [
            { text: "HDD", href: '/catalog/laptops/hdd-ssd?query=HDD'},
            { text: "SSD", href: '/catalog/laptops/hdd-ssd?query=SSD'},
        ] 
    }, 
    { 
        header: { text: "Захранване", href: "/catalog/laptops/power-suplies"},
        content: [
            { text: "Apple", href: '/catalog/laptops/power-suplies?query=Apple'},
            { text: "ASUS", href: '/catalog/laptops/power-suplies?query=ASUS'},
            { text: "Dell", href: '/catalog/laptops/power-suplies?query=Dell'},
            { text: "Fortron", href: '/catalog/laptops/power-suplies?query=Fortron'},
            { text: "Hama", href: '/catalog/laptops/power-suplies?query=Hama'},
        ] 
    },     
] 

export const monitorDropdown : IDropdownElement[] = [
    { 
        header: { text: '15" - 17"', href: "/catalog/monitors/15-17"},
        content: [
            { text: "AOC", href: '/catalog/monitors/15-17?query=AOC'},
            { text: "AOPEN", href: '/catalog/monitors/15-17?query=AOPEN'},
            { text: "ASUS", href: '/catalog/monitors/15-17?query=ASUS'},
            { text: "HP", href: '/catalog/monitors/15-17?query=HP'},
        ] 
    },
    { 
        header: { text: '17" - 21"', href: "/catalog/monitors/17-21"},
        content: [
            { text: "AOC", href: '/catalog/monitors/17-21?query=AOC'},
            { text: "ACER", href: '/catalog/monitors/17-21?query=ACER'},
            { text: "ASUS", href: '/catalog/monitors/17-21?query=ASUS'},
            { text: "Philips", href: '/catalog/monitors/17-21?query=Philips'},
            { text: "Dell", href: '/catalog/monitors/17-21?query=Dell'},
            { text: "LG", href: '/catalog/monitors/17-21?query=LG'},
        ] 
    },
    { 
        header: { text: '21" - 24"', href: "/catalog/monitors/21-24"},
        content: [
            { text: "AOC", href: '/catalog/monitors/21-24?query=AOC'},
            { text: "ACER", href: '/catalog/monitors/21-24?query=ACER'},
            { text: "ASUS", href: '/catalog/monitors/21-24?query=ASUS'},
            { text: "Philips", href: '/catalog/monitors/21-24?query=Philips'},
            { text: "BenQ", href: '/catalog/monitors/21-24?query=BenQ'},
            { text: "Lenovo", href: '/catalog/monitors/21-24?query=Lenovo'},
        ] 
    },
    { 
        header: { text: '24" - 27"', href: "/catalog/monitors/24-27"},
        content: [
            { text: "AOC", href: '/catalog/monitors/24-27?query=AOC'},
            { text: "ACER", href: '/catalog/monitors/24-27?query=ACER'},
            { text: "Apple", href: '/catalog/monitors/24-27?query=Apple'},
            { text: "ASUS", href: '/catalog/monitors/24-27?query=ASUS'},
            { text: "Samsung", href: '/catalog/monitors/24-27?query=Samsung'},
            { text: "HP", href: '/catalog/monitors/24-27?query=HP'},
        ] 
    },
] 


export const peripheralsDropdown : IDropdownElement[] = [
    { 
        header: { text: 'Мишки', href: "/catalog/peripherals/mouses"},
        content: [
            { text: "Logitech", href: '/catalog/peripherals/mouses?query=Logitech'},
            { text: "Razer", href: '/catalog/peripherals/mouses?query=Razer'},
            { text: "Canyon", href: '/catalog/peripherals/mouses?query=Canyon'},
            { text: "SteelSeries", href: '/catalog/peripherals/mouses?query=SteelSeries'},
        ] 
    },
    { 
        header: { text: 'Клавиатури', href: "/catalog/peripherals/keyboards"},
        content: [
            { text: "Logitech", href: '/catalog/peripherals/keyboards?query=Logitech'},
            { text: "Razer", href: '/catalog/peripherals/keyboards?query=Razer'},
            { text: "Canyon", href: '/catalog/peripherals/keyboards?query=Canyon'},
            { text: "SteelSeries", href: '/catalog/peripherals/keyboards?query=SteelSeries'},
        ] 
    },
    { 
        header: { text: 'Слушалки', href: "/catalog/peripherals/headphones"},
        content: [
            { text: "Apple", href: '/catalog/peripherals/headphones?query=Apple'},
            { text: "Sony", href: '/catalog/peripherals/headphones?query=Sony'},
            { text: "JBL", href: '/catalog/peripherals/headphones?query=JBL'},
            { text: "Logitech", href: '/catalog/peripherals/headphones?query=Logitech'},
            { text: "Canyon", href: '/catalog/peripherals/headphones?query=Canyon'},
        ] 
    },
    { 
        header: { text: 'Микрофони', href: "/catalog/peripherals/microphones"},
        content: [
            { text: "Logitech", href: '/catalog/peripherals/microphones?query=Logitech'},
            { text: "Razer", href: '/catalog/peripherals/microphones?query=Razer'},
            { text: "Hama", href: '/catalog/peripherals/microphones?query=Hama'},
            { text: "Trust", href: '/catalog/peripherals/microphones?query=Trust'},
        ] 
    },
    { 
        header: { text: 'Уеб камери', href: "/catalog/peripherals/web-cameras"},
        content: [
            { text: "Logitech", href: '/catalog/peripherals/web-cameras?query=Logitech'},
            { text: "Microsoft", href: '/catalog/peripherals/web-cameras?query=Microsoft'},
            { text: "Razer", href: '/catalog/peripherals/web-cameras?query=Razer'},
            { text: "Canyon", href: '/catalog/peripherals/web-cameras?query=Canyon'},
        ] 
    },
]

export const printerDropdown : IDropdownElement[] = [
    { 
        header: { text: 'Тонер касети', href: "/catalog/printers/toner-cartridges"},
        content: [] 
    },
    { 
        header: { text: 'Части за принтери', href: "/catalog/printers/printer-parts"},
        content: [] 
    }
]

export const mobileDropdown : IDropdownElement[] = [
    { 
        header: { text: 'Смартфони', href: "/catalog/mobile/smartphones"},
        content: [
            { text: "Apple", href: '/catalog/mobile/smartphones?query=Apple'},
            { text: "Samsung", href: '/catalog/mobile/smartphones?query=Samsung'},
            { text: "Xiaomi", href: '/catalog/mobile/smartphones?query=Xiaomi'},
        ] 
    },
    { 
        header: { text: 'Таблети', href: "/catalog/mobile/tablets"},
        content: [
            { text: "Apple", href: '/catalog/mobile/tablets?query=Apple'},
            { text: "Samsung", href: '/catalog/mobile/tablets?query=Samsung'},
            { text: "Xiaomi", href: '/catalog/mobile/tablets?query=Xiaomi'},
        ] 
    }
]