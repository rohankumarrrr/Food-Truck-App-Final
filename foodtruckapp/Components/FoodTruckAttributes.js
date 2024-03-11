const foodTruckAttributeMap = () => {
    return new Map([
        ["JGrill", 
        {
            image: require("../assets/JG.png"),
            cuisineType: "Burgers & Fries",
            description: "Jurassic Grill Food Truck Description",
            websiteURL: "https://jurassicgrillchampaign.com/",
        }
        ],
        ["TBell", 
        {
            image: require("../assets/JG.png"),
            cuisineType: "Mexican Fast Food",
            description: "Taco Bell Food Truck Description",
            websiteURL: "https://www.tacobell.com/",
        }
        ],
        ["Dons", 
        {
            image: require("../assets/JG.png"),
            cuisineType: "American Fast Food",
            description: "McDonald's Food Truck Description",
            websiteURL: "https://www.mcdonalds.com/us/en-us.html",
        }
        ],
        ["Fernando's", 
        {
            image: require("../assets/FernandosLogo.jpeg"),
            cuisineType: "Mexican Cuisine",
            description: "Come find us for fresh tacos, burritos, quesadillas, and nachos! All you need is love and Fernando's tacos.",
            websiteURL: "https://www.facebook.com/FernandosTacosAndMore/"
        }
        ]
    ])
}

export default foodTruckAttributeMap;