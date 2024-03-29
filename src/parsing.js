import { groupPatternsByBaseDirectory } from "fast-glob/out/managers/tasks"

/*global chrome*/
//https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/history/showHistory/typedUrls.js


//exclude from history
const excludeSites = [
    "facebook.com",
    "google.com",
    "..."
]
export const getHistory = () => {
    chrome.history.search({
        'text': '',              // Return every history item....
        'startTime': (new Date).getTime() - 100000  // that was accessed less than one week ago.
      }, function (historyItems){
    
        console.log("history", historyItems)
        //callback
    })
}

export const getMostVisitedURLs = historyItems => (["..."]) //historyItem has numvisits i think
export const getConcepts = async paragraph => {
    //call to dandeolon or some entity extraction provider
    return ["..."]
}

export const getDocumentEmbeddings = document => {

    parseDom() //scrapy etc.
    getParagraphEmbeddings()

}

export const getUserEmbedding = documents => {
    getDocumentEmbeddings()
    mergeDocEmbeddings()
    decomposeDocEmbeddings() //reduce dims of embed space
    //
}




export const findConceptComposites = () => [[]] //potent overlaps (eg HCI, algorithm interpretability and computational biology)


