# Sticky Navbar

![screen recording](https://media.giphy.com/media/lmUK5opkS6gKaL8RsS/giphy.gif)

#### project notes

1. HTML
- landing page: nav, home(h1, p), other content(h2, p)
- nav: Brand, Home, About, Services, Contact

2. CSS
- sticky navbar
- nav items justify content: right
- Home colour red, rest white, :hover
- when scroll down, nav bg turns into white and getting smaller
- responsive navbar

3. JavaScript
- .getBoundingClientRect()
- scroll, resize, click eventListener

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML
- logo in navbar: h1/a
- add active class to the container and control the height of the nav

2. CSS
- container wrapping all the element except nav and set max-width
- for overlay used ::before and z-index //need to check the difference from background-blend-mode
- nav position: fixed, transition: all 300ms ease-in-out

3. JavaScript
```
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
```
