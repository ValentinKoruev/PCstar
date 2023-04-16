import { IDropdownElement } from "@components/UI/MenuOption"

export const computerDropdown : IDropdownElement[] = [
    { 
        header: { text: "Настолни Компютри", href: "/catalog/computers/desktop-computers"},
        content: [
            "HP", "Dell", "Lenovo", "Fujitsu", "MiniPC"
        ] 
    },
    { 
        header: { text: "Геймърски Компютри", href: "/catalog/computers/gaming-computers"},
        content: [
            "ASUS", "Dell", "Lenovo"
        ] 
    },
    { 
        header: { text: "Сървъри", href: "/catalog/computers/servers"},
        content: [
            "Dell", "Fujitsu", "HP"
        ] 
    },     
    { 
        header: { text: "Процесори", href: "/catalog/computers/processors"},
        content: [
            "Intel i3", "Intel i5", "Intel i7", "Ryzen 3", "Ryzen 5", "Ryzen 7"
        ] 
    },  
    { 
        header: { text: "Видео карти", href: "/catalog/computers/graphic-cards"},
        content: [
            "ASUS", "GIGABYTE", "MSI", "Zotac"
        ] 
    }, 
    { 
        header: { text: "Памети", href: "/catalog/computers/memory"},
        content: [
            "DDR", "DDR2", "DRR3", "DDR4", "DDR5"
        ] 
    }, 
    { 
        header: { text: "HDD/SSD", href: "/catalog/computers/hdd-ssd"},
        content: [
            "HDD", "SSD"
        ] 
    },      
] 



export const laptopDropdown : IDropdownElement[] = [
    { 
        header: { text: "Лаптопи", href: "/catalog/laptops/work-laptops"},
        content: [
            "Apple", "ASUS", "Dell", "Lenovo"
        ] 
    },
    { 
        header: { text: "Геймърски Лаптопи", href: "/catalog/laptops/gaming-laptops"},
        content: [
            "ASUS", "Dell", "Lenovo"
        ] 
    },
    { 
        header: { text: "Адаптери", href: "/catalog/laptops/adapters"},
        content: [
        ] 
    },     
    { 
        header: { text: "Батерии", href: "/catalog/laptops/laptop-battery"},
        content: [] 
    },   
    { 
        header: { text: "Памети", href: "/catalog/laptops/memory"},
        content: [
            "DDR", "DDR2", "DRR3", "DDR4", "DDR5"
        ] 
    }, 
    { 
        header: { text: "HDD/SSD", href: "/catalog/laptops/hdd-ssd"},
        content: [
            "HDD", "SSD"
        ] 
    },    
] 

export const monitorDropdown : IDropdownElement[] = [
    { 
        header: { text: '15" - 17"', href: "/catalog/monitors/15-17"},
        content: [
            "AOC", "AOPEN", "ASUS", "HP"
        ] 
    },
    { 
        header: { text: '17" - 21"', href: "/catalog/monitors/17-21"},
        content: [
            "AOC", "ACER", "ASUS", "Philips", "Dell", "LG"
        ] 
    },
    { 
        header: { text: '21" - 24"', href: "/catalog/monitors/21-24"},
        content: [
            "AOC", "ACER", "ASUS", "Philips", "BenQ", "Lenovo"
        ] 
    },
    { 
        header: { text: '24" - 27"', href: "/catalog/monitors/24-27"},
        content: [
            "AOC", "ACER", "Apple", "ASUS", "Samsung", "HP"
        ] 
    },
] 


export const peripheralsDropdown : IDropdownElement[] = [
    { 
        header: { text: 'Мишки', href: "/catalog/peripherals/mouses"},
        content: [
            "Logitech", "Razer", "Canyon", "SteelSeries"
        ] 
    },
    { 
        header: { text: 'Клавиатури', href: "/catalog/peripherals/keyboards"},
        content: [
            "Logitech", "Razer", "Canyon", "SteelSeries"
        ] 
    },
    { 
        header: { text: 'Слушалки', href: "/catalog/peripherals/headphones"},
        content: [
            "Apple", "Sony", "JBL", "Logitech", "Canyon"
        ] 
    },
    { 
        header: { text: 'Микрофони', href: "/catalog/peripherals/microphones"},
        content: [
            "Logitech", "Razer", "Hama", "Trust"
        ] 
    },
    { 
        header: { text: 'Уеб камери', href: "/catalog/peripherals/web-cameras"},
        content: [
            "Logitech", "Microsoft", "Razer", "Canyon"
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
            "Apple", "Samsung", "Xiaomi"
        ] 
    },
    { 
        header: { text: 'Таблети', href: "/catalog/mobile/tablets"},
        content: [
            "Apple", "Samsung", "Xiaomi"
        ] 
    }
]

export const tvDropdown : IDropdownElement[] = [
    {
        header: { text: "Телевизори", href:"/catalog/tv-video-photo/tv"},
        content: [
            "Samsung", "Philips", "LG"
        ] 
    },
    {
        header: { text: "Проектори", href:"/catalog/tv-video-photo/projectors"},
        content: [] 
    }, 
    {
        header: { text: "Фото камери", href:"/catalog/tv-video-photo/cameras"},
        content: [] 
    }
]

export const softwareDropdown : IDropdownElement[] = [
    {
        header: { text: "Операционни системи", href: "/catalog/software/operational-systems"},
        content: []
    }
]

export const networkDropdown : IDropdownElement[] = [
    {
        header: { text: "Рутери", href: "/catalog/network/routers"},
        content: []
    }, 
    {
        header: { text: "Суичове", href: "/catalog/network/switches"},
        content: []
    }
]


export default {
    computerDropdown,
    laptopDropdown,
    monitorDropdown,
    peripheralsDropdown,
    printerDropdown,
    mobileDropdown,
    tvDropdown,
    softwareDropdown,
    networkDropdown
}