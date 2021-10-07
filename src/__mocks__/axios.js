const cardData = {
    name: {
        first: "Laith",
        last: "Harb"
    },
    picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg"
    },
    login: {
        username: "ThePhonyGOAT"
    }
}


const mockResponse = {
    data: {
        results: [
            cardData, cardData, cardData, cardData, cardData
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}