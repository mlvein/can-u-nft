function search() {
    var searchResult;
    var searchQuery = document.getElementById("input001").value;
    
    switch (searchQuery) {
        case "chicken":
            searchResult = "Hmm... it might be possible!";
            break;
        case "egg":
            searchResult = "Yes! It's possible";
            break;
        default:
            searchResult = "Not sure...";
            break;
    }
    document.getElementById("result").innerHTML = searchResult;
  }