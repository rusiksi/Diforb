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
    "Birds": {},

    "Cats-N-Dogs": {},

    "Creatures": {},

    "Destruction": {},

    "Explosions": {},

    "Falling": {},

    "Farm": {},

    "Food": {},

    "Footsteps": {},

    "Interface": {
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

    "Natural-Ambience": [],

    "Pick Up": [],

    "Puzzle": [],

    "Zoo": []
}






