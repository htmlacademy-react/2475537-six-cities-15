export type Coords = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  title: string;
  code: string;
  location: Coords;
}
