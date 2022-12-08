import {movies} from '../modules/data.js'

let ul = document.querySelector('.promo__interactive-list')
let searchInp = document.querySelector('#search')
let poster = document.querySelector('.promo__bg') 
let modal_1 = document.querySelector('.modal_1')
let modal_bg = document.querySelector('.modal_bg')
let exit = document.querySelector('.exit')
let modImg = modal_1.querySelector('img')
let modTitle = modal_1.querySelector('.info h1')
let rt = modal_1.querySelector('.info p')
let about = modal_1.querySelector('.info b')




searchInp.oninput = () => {
    let searchkey = searchInp.value.trim().toLowerCase()

    let filtered = movies.filter(item => {
        let title = item.Title.trim().toLowerCase()

        if(title.includes(searchkey)) {
            return item
        }
    })

    reload(filtered, searchkey)
}

reload(movies)
function reload(arr, val = "") {
    ul.innerHTML = ""
    showPoster(arr[0])
    let re = new RegExp(val, 'g')

    for(let item of arr) {
        let title = item.Title.toLowerCase().replace(re, `<b>${val}</b>`)

        let li = document.createElement('li')
        let del = document.createElement('div')

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.innerHTML = title

        li.append(del)
        ul.append(li)

        li.onclick = () => {
          
    modal_1.style.display= "block"
    modal_bg.style.display= "block"
    modImg.src = item.Poster
    modTitle.innerHTML = item.Title
    rt.innerHTML = item.imdbRating
    about.innerHTML = item.Plot
}
exit.onclick = () => {
    modal_1.style.display= "none"
    modal_bg.style.display= "none"
}
class Rating {
  constructor(dom) {
      dom.innerHTML = '<svg width="110" height="20"></svg>';
      this.svg = dom.querySelector('svg');
      for (var i = 0; i < 5; i++)
          this.svg.innerHTML += `<polygon data-value="${i + 1}"
           transform="translate(${i * 22},0)" 
           points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
      this.svg.onclick = e => this.change(e);
      this.render();
  }

  change(e) {
      let value = e.target.dataset.value;
      value && (this.svg.parentNode.dataset.value = value);
      this.render();
  }

  render() {
      this.svg.querySelectorAll('polygon').forEach(star => {
          let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
          star.classList.toggle('active', on);
      });
  }
}

let rate = document.querySelectorAll('.rating').forEach(dom => new Rating(dom));



let adv = document.getElementById('adv')
let com = document.getElementById('comedy')
let fan = document.getElementById('fantasy')
let sfi = document.getElementById('sci-fi')
let drm = document.getElementById('drama')
let hrr = document.getElementById('horor')

com.onclick = () => {
  ul.innerHTML = item.Title
  
}

    }
}


function showPoster(data) {
    poster.style.backgroundImage = `url(${data.Poster})`
}









// let names = document.querySelectorAll('.promo__interactive-item')





