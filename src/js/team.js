export default class Team {
  static iteration(team) {
    const entries = Object.entries(team);
    *[Symbol.iterator]() {
      for (let i = 0; i >= entries.length; i ++ ) {
        yield entries[i]
      } 
    }
  }
}
