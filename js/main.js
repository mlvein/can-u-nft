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
    var body = document.getElementsByTagName("body");
    var card = document.getElementById("cardContainer");
    
    // document.getElementById("searchCard").style.cssText = 'left: -240px;';
    document.getElementById("resourceCard").style.cssText = 'display: block;';
    card.style.cssText = 'width: 540px;';
    document.getElementById("learnMore").style.cssText = 'display: none;';
}

function infoReveal() {
    var body = document.getElementsByTagName("body");
    var card = document.getElementById("cardContainer");
    
    document.getElementById("infoCard").style.cssText = 'display: block;';
    card.style.cssText = 'width: 820px;';
    // document.getElementById("resourceCard").style.cssText = 'margin-right: 10px;';
}