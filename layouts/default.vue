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
    background: linear-gradient(to right, #060600 45% ,transparent 65%), url("/yuriko-360.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    scroll-behavior: smooth;
}
@media only screen and (max-height: 479px) {
    body {
        background: linear-gradient(to right, #060600 45% ,transparent 65%), url("/yuriko-360.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
}
@media only screen and (max-height: 899px) {
    body {
        background: linear-gradient(to right, #060600 45% ,transparent 65%), url("/yuriko-720.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
}
@media only screen and (min-height: 900px) {
    body {
        background: linear-gradient(to right, #060600 45% ,transparent 65%), url("/yuriko-1080.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
}
.content-container {
    margin-top: 5vh;
    margin-left: 2.5%;
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
.lily {
    font-size: 1.6vw;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 300;
}
.yuriko {
    margin-top: 0px;
    font-size: 5vw;
    margin-bottom: 5px;
}

.yuriko-sub {
    margin-top: 0px;
    font-weight: 300;
    margin-bottom: 0px;
    font-size: 2.6vw;
}
p {
    color: #ffffff;
    font-size: 1.3vw;
}
h1 {
    color: #c7b83c;
    font-size: 3.2vw;
    font-weight: 500;
}
h2 {
    color: #ffffff;
    font-size: 3vw;
}
@media only screen and (max-aspect-ratio: 8/5) {
    body {
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        background: #060600;
    }
    .content-container {
        margin-left: 3%;
        margin-right: 3%;
    }
    .header {
        margin-left: 0px;
        margin-right: 0px;
        display: block;
        height: 50vh;
        background: url("/yuriko.jpg") no-repeat;
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
        background: linear-gradient(to top,#060600 25%,transparent 100%);
    }
    .lily {
        font-size: 7.5vw;
        margin-top: 0px;
        margin-bottom: 0px;
        font-weight: 300;
    }
    .yuriko {
        margin-top: 0px;
        font-size: 15vw;
        margin-bottom: 5px;
    }

    .yuriko-sub {
        margin-top: 0px;
        font-weight: 300;
        margin-bottom: 0px;
        font-size: 8vw;
    }
    p {
        color: #ffffff;
        font-size: 5vw;
    }
    h1 {
        color: #c7b83c;
        font-size: 10vw;
        font-weight: 500;
    }
    h2 {
        color: #ffffff;
        font-size: 8vw;
    }
}
@media only screen and (min-aspect-ratio: 5/5) and (max-aspect-ratio: 8/5) {
    .lily {
        font-size: 5vw;
        margin-top: 0px;
        margin-bottom: 0px;
        font-weight: 300;
    }
    .yuriko {
        margin-top: 0px;
        font-size: 10vw;
        margin-bottom: 5px;
    }

    .yuriko-sub {
        margin-top: 0px;
        font-weight: 300;
        margin-bottom: 0px;
        font-size: 5.6vw;
    }
    p {
        color: #ffffff;
        font-size: 3.3vw;
    }
    h1 {
        color: #c7b83c;
        font-size: 6.7vw;
        font-weight: 500;
    }
    h2 {
        color: #ffffff;
        font-size: 5.6vw;
    }
}
@media only screen and (max-aspect-ratio: 8/5) and (max-width: 479px) {
    .header {
        margin-left: 0px;
        margin-right: 0px;
        display: block;
        height: 50vh;
        background: url("/yuriko-360.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: right 20% top;
    }
    
}
@media only screen and (max-aspect-ratio: 8/5) and (max-width: 899px) {
    .header {
        margin-left: 0px;
        margin-right: 0px;
        display: block;
        height: 50vh;
        background: url("/yuriko-720.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: right 20% top;
    }
    
}
@media only screen and (max-aspect-ratio: 8/5) and (min-width: 899px) {
    .header {
        margin-left: 0px;
        margin-right: 0px;
        display: block;
        height: 50vh;
        background: url("/yuriko-720.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: right 20% top;
    }
    
}

.primary {
    color: #c7b83c;
}

.japanese{
    font-family: 'M PLUS 1p', sans-serif;
}

a {
    text-decoration: none;
    color: #c7b83c;
}
a:hover{
    text-decoration: underline;
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
    margin-top: 0px;
    font-weight: 300;
    margin-bottom: 0px;
}

.title {
    margin-bottom: 10px;
}
.games-list > li {
    font-size: 1.6vw;
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
