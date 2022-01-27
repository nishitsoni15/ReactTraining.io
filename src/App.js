import { useState } from "react";
import { ContextText, themes } from "./components/context-text";
import { AboutUsPage, Dashboard } from "./pages";
import  Router  from "./router";

function App() {

const[color] = useState(themes.dark)

const data = {
  image:"./images/unnamed.png",
  headerOne:"Fotis Karayannopoulos",
  paraDesignation:"SENIOR ASSOCIATE",
  profession:"SUPREME COURT LAWYER",
  year:"Admitted to Athens Bar in 1992",
  lang:"Languages:",
  languages:"GREEK,ENGLISH,FRENCH,ITALIAN",
  icon:"./images/download.png",
  download:"DOWNLOAD V.CARD",
  li1:"SHORT BIOGRAPHY",
  li2:"ACADEMIC CURICULUM",
  li3:"OTHER ACTIVITIES",
  li4:"MEMBERSHIPS",
  mainHeading:"SHORT BIOGRAPHY",
  para1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  para2:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
}
  return (
    <ContextText.Provider value={color}>
    <div className="App">
      <Router aboutUsData = {data} />
    </div>
    </ContextText.Provider>
  );
}

export default App;

