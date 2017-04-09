import {observable} from 'mobx'

let index = 0

class AppStore {
  @observable title = "Test Title"
  @observable players = []


  changeTitle(path){
    this.title = path;
  }

  getPlayerList(){
  	// pull date form the API

    this.players = fetch('https://raw.githubusercontent.com/alexnoob/BasketBall-GM-Rosters/master/2016-17.NBA.Roster.json')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("Got the list of the players for 2017!", responseJson.players);
        return responseJson.players;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}


const appStore = new AppStore()

appStore.getPlayerList();

export default appStore
                        