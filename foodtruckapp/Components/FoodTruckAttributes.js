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
    ])
}

export default foodTruckAttributeMap;