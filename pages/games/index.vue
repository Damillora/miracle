<template>
  <div class="page">
            <h1 class="title">Game Profile</h1>
            <p>I play arcade and mobile games mostly, not all are recorded / streamed.</p>
            <p>My most frequently played genre is rhythm games, but sometimes I try other genres too</p>
            <h2>Game IDs</h2>
            <p>
                <ul>
                    <GameListItem 
                      name="SOUND VOLTEX VIVID WAVE"
                      link="/games/sdvx"
                      gameid="SV-6457-6694"
                     />
                    <GameListItem 
                      name="maimai DX"
                      link="/games/maimai"
                      gameid="6027059823123"
                     />
                    <GameListItem 
                      name="The IDOLM@STER Million Live: Theater Days"
                      link="/games/mirishita"
                      gameid="CGTEDUQ4"
                     />
                    <GameListItem 
                      name="Arcaea"
                      link="/games/arcaea"
                      gameid="264202217"
                     />
                    <GameListItem 
                      name="Tokyo 7th Sisters"
                      link="/games/t7s"
                      gameid="M2mXkWk"
                     />
                    <GameListItem 
                      name="BanG Dream! Girls Band Party (JP)"
                      link="/games/bandori"
                      gameid="106205253"
                     />
                    <GameListItem
                      name="Love Live! School Idol Festival (JP)"
                      link="/games/llsif"
                      gameid="755897396"
                     />
                    <GameListItem
                      name="Revue Starlight Re LIVE (EN)"
                      link="/games/starira"
                      gameid="2490812618"
                     />
                    <GameListItem
                      name="Shadowverse"
                      link="/games/shadowverse"
                      gameid="778908673"
                     />
                    <GameListItem
                      name="Nogikoi"
                      link="/games/nogikoi"
                      gameid="1673068678"
                     />
                    <GameListItem
                      name="THE IDOLM@STER: Shiny Colors"
                      link="/games/shinymas"
                      gameid="ePmtJyTwzn"
                     />
                    <GameListItem
                      name="欅坂46・日向坂46 UNI'S ON AIR"
                      link="games/unison"
                      gameid="y2medy4d"
                     />
                    <GameListItem
                      name="CUE!"
                      link="/games/cue"
                      gameid="37132287893"
                     />
                    <GameListItem
                      name="Love Live! School idol festival ALL STARS"
                      link="/games/llsifas"
                      gameid="-"
                     />
                    <!--
                    <GameListItem
                      name=""
                      link=""
                      gameid=""
                     />
                    -->
                </ul>
            </p>
  </div>
</template>

<script>
import GameListItem from "@/components/GameListItem";

export default {
  components: {
    GameListItem,
  },

}
</script>

<style>
</style>
