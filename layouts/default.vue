<template>
  <div>
    <div class="header">
      <div class="gradient">
                
      </div>
    </div>
    <div class="content-container">
      <nuxt />
    </div>
  </div>
</template>

<style>
body {
    background: linear-gradient(to right, #f4f4ff 45% ,transparent 65%), url("./yuriko.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    scroll-behavior: smooth;
}
.content-container {
    margin-top: 5vh;
    margin-left: 5vh;
    margin-right: 60%;
    word-wrap: break-word;
    font-family: 'Exo 2', sans-serif;
}
.header {
    display: none;
}
.gradient {
    display: none;
}
@media only screen and (max-aspect-ratio: 9/5) {
    body {
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        background: #f4f4ff;
    }
    .content-container {
        margin-right: 0%;
    }
    .header {
        margin-left: 0px;
        margin-right: 0px;
        display: block;
        height: 50vh;
        background: url("./yuriko.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: right 20% top;
    }
    .gradient {
        display: block;
        position: absolute;
        top: 25vh;
        left: 0%;
        width: 100%;
        height: 25vh;
        background: linear-gradient(to top,#f4f4ff 25%,transparent 100%);
    }
}


.primary {
    color: #c7b83c;
}

.japanese{
    font-family: 'M PLUS 1p', sans-serif;
}

h1 {
    font-size: 3.2rem;
    font-weight: 500;
}
h2 {
    font-size: 3rem;
}
a {
    text-decoration: none;
    color: #c7b83c;
}
a:hover{
    text-decoration: underline;
}
.lily {
    font-size: 1.6rem;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 300;
}
.yuriko {
    margin-top: 0px;
    font-size: 5rem;
    margin-bottom: 5px;
}

.yuriko-sub {
    margin-top: 0px;
    font-weight: 300;
    margin-bottom: 0px;
    font-size: 2.6rem;
}
.yuriko-smol {
    display: block;
    margin-bottom: 0px;
}

.name {
    margin-top: 0px;
    margin-bottom: 5px;
}

.sub {
    font-size: 1.6rem;
    margin-top: 0px;
    font-weight: 300;
    margin-bottom: 0px;
}

.title {
    margin-bottom: 10px;
}
p {
    font-size: 1.3rem;
}
.games-list > li {
    font-size: 1.6rem;
}
.games-list > li > p {
    margin-top: 0px;
    margin-bottom: 5px;
}

.col {
    display: flex;
    flex-flow: column;
}
.row {
    flex: 0 1 auto;
}
.expand {
    flex: 1 1 auto;
}
.fill {
    height: 87vh;
}
.nanao-enter-active,
.nanao-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.nanao-enter,
.nanao-leave-to {
  opacity: 0;
}

</style>
