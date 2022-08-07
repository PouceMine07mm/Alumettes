

var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    goldPerEsclave: 0.1,
    goldPerEsclaveCost: 15
  }
  
  function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("goldMinedtitle").innerHTML = gameData.gold + " Gold Mined - dev.nclsvncnt.net"
  }

  function mineGoldEsclave() {
    gameData.gold += gameData.goldPerEsclave
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("goldMinedtitle").innerHTML = gameData.gold + " Gold Mined - dev.nclsvncnt.net"
  }

  function buyEsclave() {
    if (gameData.gold >= gameData.goldPerEsclaveCost) {
      gameData.gold -= gameData.goldPerEsclaveCost
      gameData.goldPerEsclave += 1
      gameData.goldPerEsclaveCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("goldMinedtitle").innerHTML = gameData.gold + " Gold Mined - dev.nclsvncnt.net"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerEsclave + ") Cost: " + gameData.goldPerEsclaveCost + " Gold"
    }
  }
  
  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("goldMinedtitle").innerHTML = gameData.gold + " Gold Mined - dev.nclsvncnt.net"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }
  
  function maingameloop(){
      window.setInterval(function() {
      mineGoldEsclave()
      }, 1000 )
    }
