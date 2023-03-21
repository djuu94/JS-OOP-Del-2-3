class Validering{
    constructor(...players){
        this.players = players;
        this.playersOutOfArray = this.players.flatMap(obj => obj)
    }
    static logResults(x){
        const highestValuePlayer = x.playersOutOfArray.reduce(
            (prev, current) => {
              return prev.countCardValue > current.countCardValue ? prev : current
            }
          );
            return `The winner of the round is ${highestValuePlayer.name}! With the total of ${highestValuePlayer.countCardValue} points`;
    }
}
export { Validering };