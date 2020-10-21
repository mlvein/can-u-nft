
  
var resultPossibleArt = 
    `
        <h4>Yes, It's possible!</h4>
        <hr>
        <p>
            Here are some platforms that have done so:
        </p>
        
        <ul>
            <li><a href="https://makersplace.com/" target="_blank">makersplace</a></li>
            <li><a href="https://rarible.com/" target="_blank">rarible</a></li>
        </ul>
    `;

function search() {
    var searchResult;
    var searchQuery = document.getElementById("input001").value;
    
    
    switch (searchQuery) {
        case "":
            searchResult = "You can't turn nothing into a non-fungible token... or can you?!!"
        break;
        case "chicken":
            searchResult = "Hmm... it might be possible!";
        break;
        case "art":
        case "music":
            searchResult = resultPossibleArt;
        break;
        case "cats":
            searchResult = "Well... sort of";
        break;
        default:
            searchResult = "Not sure...";
        break;
    }

    document.getElementById("result").innerHTML = searchResult;
  }