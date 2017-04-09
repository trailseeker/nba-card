import {observable} from 'mobx'

let index = 0

class AppStore {
  @observable title = "Test Title"

  changeTitle(path){
    this.title = path;
  }

}


const appStore = new AppStore()
export default appStore
                        