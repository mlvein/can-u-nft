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

    if (card.clientWidth >= 540) {
        document.getElementById("learnMore").style.cssText = 'display: none;';
    } 
    
    document.getElementById("resourceCard").style.cssText = 'display: block;';
    card.style.width = (cardWidth + 280) + 'px';
    document.getElementById("learnMore").style.cssText = 'display: none;';

    
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
    
    // document.getElementById("resourceCard").style.cssText = 'margin-right: 10px;';
}