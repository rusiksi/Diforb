export enum LibraryType {
    Category = 'category',
    SubCategory = 'subcategory',
    Sound = 'sound'
}

export interface Library {
    name: string,
    type: LibraryType,
    child: LibraryType,
    data: any[]
}

export const LibrariesStorage = {
    "Birds": {
        image: "birds",
        description: "Here you can find variety of birds sounds such as crows, parrots, chickens and others.",
        price: 0
    },

    "Cats-N-Dogs": {
        image: "cats-and-dogs",
        description: "Here is a huge set of barking, growl, howl, hissing, snore and other sounds which are made by cats and dogs.",
        price: 0
    },

    "Creatures": {
        image: "creatures",
        description: "Zombies, orcs, goblins and other mystical beings are already almost ready to break away from your loudspeakers and become a part of your project."
    },

    "Destruction": {
        image: "destruction",
        description: "In this library sounds of various objects blows, breaking, and destructions are presented. Wooden, metal, plastic, paper and other elements will break at your command. This library is perfectly suitable for movies, ads and video games."
    },

    "Explosions": {
        image: "explosions",
        description: "Here you can find a full set of sounds to create a maximum amount of noise.",
        price: 0
    },

    "Falling": {
        image: "falling",
        description: "Here you can hear sounds of various objects falling . First-aid kits, backpacks, guns, rifles, keys, coins and many other things will fall under your direction. These sounds are perfectly  suitable for games, commercials and animation video."
    },

    "Farm": {
        image: "farm",
        description: "This library is dedicated to different farm animals.You can find here all you need to recreate farm soundscape.It features 8 animal species  sounds with multiple variations for each animal.",     
        price: 0
    },

    "Food": {
        image: "food",
        description: "We recorded different  sounds related to food and its cooking.Chewing, swallowing , boiling and many other sounds are waiting for you in the library ."
    },

    "Footsteps": {
        image: "footsteps",
        description: "The library includes three submenus - walking, running and landing. Besides, a large number of men's and women's shoes you can find steps of various beings presented in a sound set - paws, hoofs, robots, retro sounds. Combining different steps with various additional sounds, you have a chance to reproduce the movement of any object on the screen most precisely."
    },

    "Interface": {
        image: "interface",
        description: "The interface is a new and convenient way to create GUI sounds for games, applications, advertising, presentations and many other media projects. By means of the unique system of sound combination and processing, you can create original clicks, popups, swipes and many other sounds to polish up your project.",
        data: [
            {
                name: 'Designed',
                type: LibraryType.Category,
                child: LibraryType.SubCategory,
                data: [
                    {
                        name: 'Digital',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Complex_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_10',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_10',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Metal',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Complex_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_10',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_05',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Plastic',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Complex_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_10',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_05',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Wood',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Complex_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Complex_10',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Light_05',
                                type: LibraryType.Sound
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Extra',
                type: LibraryType.Category,
                child: LibraryType.SubCategory,
                data: [
                    {
                        name: 'Digital',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Digital_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Sci_Fi_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Sci_Fi_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Sci_Fi_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: '8-Bit_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: '8-Bit_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: '8-Bit_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Blip_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Blip_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Blip_03',
                                type: LibraryType.Sound
                            },
                        ]
                    },
                    {
                        name: 'Other',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Organic_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Organic_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Organic_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Water_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Water_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Water_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Paper',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Stone',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Snow',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Snow_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Snow_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Snow_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Snow_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Snow_05',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Voice',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Voice_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Voice_08',
                                type: LibraryType.Sound
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Main',
                type: LibraryType.Category,
                child: LibraryType.SubCategory,
                data: [
                    {
                        name: 'Glass',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Glass_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Glass_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Glass_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Glass_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Glass_05',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Metal',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Small_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_04',
                                type: LibraryType.Sound
                            },
                        ]
                    },
                    {
                        name: 'Percussion',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Percussion_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Percussion_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Percussion_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Percussion_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Percussion_05',
                                type: LibraryType.Sound
                            },
                        ]
                    },
                    {
                        name: 'Plastic',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Big_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Big_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Medium_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Small_05',
                                type: LibraryType.Sound
                            },
                        ]
                    },
                    {
                        name: 'Wood',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                             {
                                name: 'Wood_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Wood_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Wood_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Wood_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Wood_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Wood_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Wood_07',
                                type: LibraryType.Sound
                            },
                        ]
                    }
                ]
            },
            {
                name: 'Music',
                type: LibraryType.Category,
                child: LibraryType.SubCategory,
                data: [
                    {
                        name: 'Negative',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Digital_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_05',
                                type: LibraryType.Sound
                            }
                        ]
                    },
                    {
                        name: 'Positive',
                        type: LibraryType.SubCategory,
                        child: LibraryType.Sound,
                        data: [
                            {
                                name: 'Digital_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Digital_10',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_01',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_02',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_03',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_04',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_05',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_06',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_07',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_08',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_09',
                                type: LibraryType.Sound
                            },
                            {
                                name: 'Natural_10',
                                type: LibraryType.Sound
                            }
                        ]
                    }
                ]
            },
            {
                name: 'PopUp',
                type: LibraryType.Category,
                child: LibraryType.Sound,
                data: [
                    {
                        name: 'Cartoon',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Magical',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Metal',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Musical',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Paper',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Scary',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Sci-fi',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Stone',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Water',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    },
                    {
                        name: 'Wood',
                        type: LibraryType.Sound,
                        parent: 'PopUp'
                    }
                ]
            },
            {
                name: 'Swish',
                type: LibraryType.Category,
                child: LibraryType.Sound,
                data: [
                    {
                        name: 'Swish_01',
                        type: LibraryType.Sound,
                        parent: 'Swish'
                    },
                    {
                        name: 'Swish_02',
                        type: LibraryType.Sound,
                        parent: 'Swish'
                    },
                    {
                        name: 'Swish_03',
                        type: LibraryType.Sound,
                        parent: 'Swish'
                    },
                    {
                        name: 'Swish_04',
                        type: LibraryType.Sound,
                        parent: 'Swish'
                    },
                    {
                        name: 'Swish_05',
                        type: LibraryType.Sound,
                        parent: 'Swish'
                    }
                ]
            }
        ]
    },

    "Natural-Ambience": {
        image: "ambience",
        description: "Natural Ambience is a universal collection of high-quality sounds which can help you create the sound atmosphere of various locations such as a city, a forest, a beach, a cave, the underwater world and many other things. Thanks to the unique system of combination, you get the opportunity to create hundreds of original sounds."
    },

    "Pick Up": {
        image: "pick-up",
        description: "The majority of games make you grab various objects and artifacts to go ahead. In this library, you can find sounds reproducing picking up different stuff like first-aid kits, cartridges, coins, the weapon and other important objects. These sounds are perfectly suitable for games of any genres."
    },

    "Puzzle": {
        image: "puzzle",
        description: "In this library sounds of unsolved riddles, detective investigations, figures row collecting, various puzzles and other adventures are hidden. Also, here you can find musical jingles to strengthen pleasure from victories and smooth grief from defeats."
    },

    "Zoo": {
        image: "zoo",
        description: "Here you can hear sounds of various wild and dangerous animals.You don't  need to risk your health in order to record them - we did it for you. "
    }
}






