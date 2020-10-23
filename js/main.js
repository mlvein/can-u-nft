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

        case "animals":
        case "wildlife":
            searchResult = resultWildlife;
        break;

        default:
            searchResult = defaultResponse;
    }

    document.getElementById("result").innerHTML = searchResult;
  }