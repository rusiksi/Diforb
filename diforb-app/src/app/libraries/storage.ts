export enum LibraryType {
    Category = 'category',
    SubCategory = 'subcategory',
    Sound = 'sound'
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
                data: [
                    {
                        name: 'Digital',
                        type: LibraryType.SubCategory,
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
                            }
                        ]
                    },
                    {
                        name: 'Metal',
                        type: LibraryType.SubCategory,
                        data: []
                    },
                    {
                        name: 'Plastic',
                        type: LibraryType.SubCategory,
                        data: []
                    },
                    {
                        name: 'Wood',
                        type: LibraryType.SubCategory,
                        data: []
                    }
                ]
            },
            {
                name: 'Extra',
                type: LibraryType.Category,
                data: []
            },
            {
                name: 'Main',
                type: LibraryType.Category,
                data: []
            },
            {
                name: 'Music',
                type: LibraryType.Category,
                data: []
            },
            {
                name: 'PopUp',
                type: LibraryType.Category,
                data: []
            },
            {
                name: 'Swish',
                type: LibraryType.Category,
                data: []
            }
        ]
    },

    "Natural-Ambience": [],

    "Pick Up": [],

    "Puzzle": [],

    "Zoo": []
}

export interface Library {
    name: string, 
    type: LibraryType, 
    data: any[]
}




