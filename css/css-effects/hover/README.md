# Hover Effects

## Triangle (사선을 활용하여 삼각형 만들기)

2022-01-09  
Site: [CSS clip-path maker](https://bennettfeely.com/clippy/)

```css
.container {
  gap: 10px;
}

.container .card {
  margin: 0 -70px;
  overflow: hidden;
  clip-path: polygon(50%, 100%, 0%, 0%, 100%, 0%);
}

.container .card:nth-child(2) {
  clip-path: polygon(50%, 0%, 0%, 100%, 100%, 100%);
}

.container .card img {
  transition: 0.5s;
}

.container .card:hover img {
  transform: scale(1.5);
}
```
