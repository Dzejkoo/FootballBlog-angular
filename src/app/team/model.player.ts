export interface PlayerName {
  firstName: string;
  fullName: string;
  lastName: string;
}

export interface Team {
  [index: number]: {
    age: number;
    born: string;
    citizenship: string;
    debut: string;
    image: string;
    name: PlayerName;
    numberShirt: number;
    position: string;
  };
}
