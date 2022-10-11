import { makeAutoObservable } from "mobx";

import { mockData } from "../constants/constants";
import { DataPath } from "../interfaces";

class pathsBuilder {
  pathsStore = [...mockData];

  constructor() {
    makeAutoObservable(this);
  }
  addPath(path: any) {
    this.pathsStore.push(path);
  }

  removePath(pathId: number) {
    const filteredArray = this.pathsStore.filter((item: DataPath) => item.id !== pathId);
    this.pathsStore = filteredArray;
  }

  addToFavourites(pathId: number) {
    const updatedArray = this.pathsStore.map((item: any) => item.id === pathId ? { ...item, isFavourite: !item.isFavourite } : item);
    this.pathsStore = updatedArray;
  }

  getDetailedPathInfo(pathId: number) {
    return this.pathsStore.find(item => item.id === pathId);
   }

  searchData(searchQuery: string) {
    if (searchQuery.length) { 
      return this.pathsStore.filter((item: any) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())).slice().sort((a, b) => Number(b.isFavourite) - Number(a.isFavourite))
    } else {
      return this.pathsStore.slice().sort((a, b) => Number(b.isFavourite) - Number(a.isFavourite));
    }  
  }
}

export default new pathsBuilder();