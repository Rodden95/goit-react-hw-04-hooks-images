class Services {

  constructor(page, nextName, id) {
    this.id = id;
    this.nextName = nextName;
    this.page = page;
    this.apiKey = '24225279-9c926e63021bd911a81e6f13c';
  }

  async fetchName() {
    const picsArr = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&q=${this.nextName}&per_page=12&page=1`)
    return picsArr.json();
  }
  async fetchPage() {
    const picsArr = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&q=${this.nextName}&per_page=12&page=${this.page}`)
    return picsArr.json();
  }
  async fetchPic() {
  
      const bigPic = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&id=${this.id}`)
      const response = bigPic.json()
    return response
  };



}


export default function Init(page, nextName, id) {
return  new Services(page, nextName, id)
};