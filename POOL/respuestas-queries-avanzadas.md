EXERCICE 2
http://localhost:3000/offsset


[
    {
        "id": 8,
        "name": "Macar",
        "types": "Fighting, Steel",
        "createdAt": "2026-09-22T13:35:29.257Z",
        "updatedAt": "2026-09-22T13:35:29.257Z",
        "trainerId": null
    },
    {
        "id": 7,
        "name": "Onyx",
        "types": "Fighting, Steel",
        "createdAt": "2026-09-22T13:35:20.559Z",
        "updatedAt": "2026-09-22T13:35:20.559Z",
        "trainerId": null
    },
    {
        "id": 6,
        "name": "Lucario",
        "types": "Fighting, Steel",
        "createdAt": "2026-09-22T13:34:39.804Z",
        "updatedAt": "2026-09-22T13:34:39.804Z",
        "trainerId": null
    }
]











EXERCICE 1

http://localhost:3000/pokemons/3


[
    {
        "id": 12,
        "name": "por",
        "types": "fuego",
        "createdAt": "2026-09-22T14:20:35.590Z",
        "updatedAt": "2026-09-22T14:20:35.590Z",
        "trainerId": null
    },
    {
        "id": 11,
        "name": "pory",
        "types": "fuego",
        "createdAt": "2026-09-22T14:20:31.709Z",
        "updatedAt": "2026-09-22T14:20:31.709Z",
        "trainerId": null
    },
    {
        "id": 10,
        "name": "porygon",
        "types": "fuego",
        "createdAt": "2026-09-22T14:19:50.321Z",
        "updatedAt": "2026-09-22T14:19:50.321Z",
        "trainerId": null
    },
    {
        "id": 9,
        "name": null,
        "types": null,
        "createdAt": "2026-09-22T13:49:55.213Z",
        "updatedAt": "2026-09-22T13:49:55.213Z",
        "trainerId": null
    },
    {
        "id": 8,
        "name": "Macar",
        "types": "Fighting, Steel",
        "createdAt": "2026-09-22T13:35:29.257Z",
        "updatedAt": "2026-09-22T13:35:29.257Z",
        "trainerId": null
    },
    {
        "id": 7,
        "name": "Onyx",
        "types": "Fighting, Steel",
        "createdAt": "2026-09-22T13:35:20.559Z",
        "updatedAt": "2026-09-22T13:35:20.559Z",
        "trainerId": null
    },
    {
        "id": 6,
        "name": "Lucario",
        "types": "Fighting, Steel",
        "createdAt": "2026-09-22T13:34:39.804Z",
        "updatedAt": "2026-09-22T13:34:39.804Z",
        "trainerId": null
    },
    {
        "id": 4,
        "name": "Kadabra",
        "types": "agua",
        "createdAt": "2026-09-18T14:54:45.599Z",
        "updatedAt": "2026-09-18T15:55:03.891Z",
        "trainerId": null
    }
]









EXERCICE 3
http://localhost:3000/pokemons/trainer/Ash Ketchum

returns this:
[
    {
        "id": 1,
        "name": "Pikachu",
        "types": "Electric",
        "createdAt": "2026-09-18T14:24:20.410Z",
        "updatedAt": "2026-09-18T14:24:20.410Z",
        "trainerId": 1,
        "trainer": {
            "id": 1,
            "name": "Ash Ketchum",
            "region": "Kanto",
            "createdAt": "2026-09-18T14:24:11.087Z",
            "updatedAt": "2026-09-18T14:24:11.087Z"
        }
    },
    {
        "id": 2,
        "name": "Charizard",
        "types": "Fire/Flying",
        "createdAt": "2026-09-18T14:24:20.410Z",
        "updatedAt": "2026-09-18T14:24:20.410Z",
        "trainerId": 1,
        "trainer": {
            "id": 1,
            "name": "Ash Ketchum",
            "region": "Kanto",
            "createdAt": "2026-09-18T14:24:11.087Z",
            "updatedAt": "2026-09-18T14:24:11.087Z"
        }
    }
]