<template>
  <div class="page">
    <PageHeader imageType="cue-mei2">
      <h1 class="title">Game Profile</h1>
    </PageHeader>
    <main class="container mx-auto main">
      <p>I play arcade and mobile games mostly, not all are recorded / streamed.</p>
      <p>My most frequently played genre is rhythm games, but sometimes I try other genres too</p>
      <h2>Game IDs</h2>
      <div class="card-list">
              <GameListItem 
                name="SOUND VOLTEX VIVID WAVE"
                link="/games/sdvx"
                playername="YUIKA283"
                gameid="SV-6457-6694"
                />
              <GameListItem 
                name="maimai DX"
                link="/games/maimai"
                playername="YUIKA283"
                gameid="6027059823123"
                />
              <GameListItem 
                name="The IDOLM@STER Million Live: Theater Days"
                link="/games/mirishita"
                playername="Damillora"
                gameid="CGTEDUQ4"
                />
              <GameListItem 
                name="Arcaea"
                link="/games/arcaea"
                playername="Damillora"
                gameid="264202217"
                />
              <GameListItem 
                name="Tokyo 7th Sisters"
                link="/games/t7s"
                playername="Damillora"
                gameid="M2mXkWk"
                />
              <GameListItem 
                name="BanG Dream! Girls Band Party (JP)"
                link="/games/bandori"
                playername="Damillora"
                gameid="106205253"
                />
              <GameListItem
                name="Love Live! School Idol Festival (JP)"
                link="/games/llsif"
                playername="Damillora"
                gameid="755897396"
                />
              <GameListItem
                name="Revue Starlight Re LIVE (EN)"
                link="/games/starira"
                playername="[RS]Damillora"
                gameid="2490812618"
                />
              <GameListItem
                name="Shadowverse"
                link="/games/shadowverse"
                playername="Damillora"
                gameid="778908673"
                />
              <GameListItem
                name="Nogikoi"
                link="/games/nogikoi"
                playername="-"
                gameid="1673068678"
                />
              <GameListItem
                name="THE IDOLM@STER: Shiny Colors"
                link="/games/shinymas"
                playername="Damillora"
                gameid="ePmtJyTwzn"
                />
              <GameListItem
                name="欅坂46・日向坂46 UNI'S ON AIR"
                link="games/unison"
                playername="Damillora"
                gameid="y2medy4d"
                />
              <GameListItem
                name="CUE!"
                link="/games/cue"
                playername="Damillora"
                gameid="37132287893"
                />
              <GameListItem
                name="Love Live! School idol festival ALL STARS"
                link="/games/llsifas"
                playername="-"
                gameid="-"
                />
              <GameListItem
                name="Arknights"
                link="/games/arknights"
                playername="Damillora"
                gameid="Damillora#0835"
                />
              <GameListItem
                name="Azur Lane (EN)"
                link="/games/azurlane"
                playername="Damillora"
                gameid="204960914"
                />
              <GameListItem
                name="Fate/Grand Order (JP)"
                link="/games/fgo"
                playername="Damillora"
                gameid="744497723"
                />
              <GameListItem
                name="Project SEKAI COLORFUL STAGE"
                link="/games/puroseka"
                playername="Damillora"
                gameid="5121608293470214"
                />
              <GameListItem
                name="Honkai Impact 3rd"
                link="/games/honkai"
                playername="Damillora"
                gameid="17918429"
                />
              <GameListItem
                name="Genshin Impact"
                link="/games/genshin"
                playername="Damillora"
                gameid="804547223"
                />
              <GameListItem
                name="ARGONAVIS from BanG Dream! AAside"
                link="/games/aaside"
                playername="Damilora"
                gameid="3BUWJibt"
                />
              <!--
              <GameListItem
                name=""
                link=""
                playername=""
                gameid=""
                />
              -->
      </div>
    </main>
  </div>
</template>

<script>
import GameListItem from "@/components/GameListItem";
import PageHeader from "@/components/PageHeader";

export default {
  components: {
    GameListItem,
    PageHeader,
  },
  head: {
    title: "Game Profile",
  }
}
</script>

<style>
</style>
