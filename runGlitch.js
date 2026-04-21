setup.insertRandomChars=function(book){
  if (!book) return "【文本加载失败Text failed to load】";
  let char = book.split('');
  let sign = ["!","@","#","$","%","^","&","*","(",")"];
  let insertCount = random (0,char.length)
  for (let i = 0; i < insertCount; i++) {
    let position=random (0,char.length)
    let resultsigns = sign[random(0,sign.length-1)]
    char.splice(position,0,resultsigns)
  
  };
  
  
  return char.join('')
};



setup.utf=function(text){
  
  let ori = new TextEncoder()
  let res = new TextDecoder("iso-8859-1")
  
  let char = text.split('')
  let begin = random(0,char.length-1)
  let end = random(begin,char.length-1)
  for( let i = begin; i<=end; i++){
    let bytes = ori.encode(char[i])
    char[i] = res.decode(bytes)

  };
  return char.join('')
 


};

setup.repeatParagraph = function(id) {
    let passageEl = document.querySelector(".passage") || document.querySelector("#passage") || document.querySelector("tw-passage") ;
    if (!passageEl) {
        console.log("找不到 passage 容器");
        return;
    }
    if (setup.repeatedFlag) return;
    setup.repeatedFlag = true;
    
    let links = passageEl.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        let oldLink = links[i];
        let newLink = document.createElement("a");
        newLink.innerText = "继续continue";
        newLink.style.cursor = "pointer";
        newLink.addEventListener("click", function() {
            Engine.play(id);
        });
        oldLink.parentNode.replaceChild(newLink, oldLink);
    }
};




window.runGlitch = function(divid, modes) {
    let el = document.getElementById(divid);
    if (!el) return;
    let id0 = passage();  
    let passageEl = el.closest(".passage") || el.closest("#passage") || el.parentNode;
    
    
    let result = el.innerText;
    
    for (let i = 0; i < modes.length; i++) {
        let mode = modes[i];
        if (mode === 1) result = setup.insertRandomChars(result);
        if (mode === 2) result = setup.utf(result);
        if (mode === 3) {
            setup.repeatParagraph(id0);  
        }
    }
    
    if (modes.includes(1) || modes.includes(2)) {
        el.innerHTML = result;
    }
};
