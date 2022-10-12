export const LOGO =
  "https://1000logos.net/wp-content/uploads/2022/01/Polestar-logo.png";

export const DEFAULT_COORDS = { lat: 49.44539, lng: 32.061158 };

export const mockData = [
  {
    id: 1,
    title: "test11",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    result: 1.2,
    isFavourite: false,
    defaultCoords: DEFAULT_COORDS,
    markers: [
      { id: 222, position: { lat: 49.44539, lng: 32.061158 } },
      { id: 444, position: { lat: 49.444785, lng: 32.060095 } },
    ],
  },
  {
    id: 2,
    title: "test2",
    shortDescription: "test222",
    fullDescription: "test222 full",
    result: 3.2,
    isFavourite: true,
    defaultCoords: DEFAULT_COORDS,
    markers: [
      { id: 555, position: { lat: 49.44539, lng: 32.061158 } },
      { id: 6666, position: { lat: 49.445957, lng: 32.061576 } },
    ],
  },
  {
    id: 3,
    title: "test3",
    shortDescription: "test333",
    fullDescription: "test333 full",
    result: 4.7,
    isFavourite: false,
    defaultCoords: DEFAULT_COORDS,
    markers: [
      { id: 2222222, position: { lat: 49.44539, lng: 32.061158 } },
      { id: 44444444, position: { lat: 49.444409, lng: 32.061147 } },
    ],
  },
  {
    id: 4,
    title: "My favourite path",
    shortDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    fullDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. FULL",
    result: 4.7,
    isFavourite: true,
    defaultCoords: DEFAULT_COORDS,
    markers: [
      { id: 2223333, position: { lat: 49.44539, lng: 32.061158 } },
      { id: 4445555, position: { lat: 49.44556, lng: 32.060084 } },
    ],
  },
];
