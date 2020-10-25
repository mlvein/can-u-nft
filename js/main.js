

function search() {
    
    var searchResult;
    var searchQuery = document.getElementById("input001").value;

    
    switch (searchQuery) {
        case "":
            searchResult = respondBlank;
            break;

        case "art":
        case "collectibles":
        case "collectible":
        case "artwork":
        case "artworks":
            searchResult = resultPossibleArt;
            break;

        case "cats":
        case "a cat":
        case "cat":
            searchResult = resultCats;
            break;

        case "animal":
        case "animals":
        case "wildlife":
        case "endangered species":
        case "species":
            searchResult = resultWildlife;
            break;

        default:
            searchResult = defaultResponse;
    }

    document.getElementById("result").innerHTML = searchResult;

  }



function resourceReveal() {
    var card = document.getElementById("cardContainer");
    var cardWidth = card.clientWidth;
    var learnMore = document.getElementById("learnMore");
    var authorInfo = document.getElementById("aboutLink");

    if (cardWidth >= 540) {
        learnMore.style.cssText = 'display: none;';
    } 
    
    document.getElementById("resourceCard").style.cssText = 'display: block;';
    card.style.width = (cardWidth + 280) + 'px';
    learnMore.style.zIndex = "-1";
    learnMore.style.cssText = 'display: none;';
    authorInfo.style.cssText = 'display: block;';
    
}

function infoReveal() {
    var card = document.getElementById("cardContainer");
    var cardWidth = card.clientWidth;
    
    document.getElementById("infoCard").style.cssText = 'display: block;';

    if (card.clientWidth >= 820) {
        card.style.cssText = 'width: 820px;';
    } else {
        card.style.width = (cardWidth + 280) + 'px';
    }
    
}