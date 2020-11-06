addBM = async function(info){
    console.log(info);

    var link=info.linkUrl;
    var url="http://localhost:3000/newbm?link="+link;

    const res = await fetch(url, { 
        method: 'POST', 
        body: JSON.stringify({link}),
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
        });
        console.log(res);
  };
  
  chrome.contextMenus.create({
    title: "Add Bookmark",
    contexts:["link"],
    onclick: addBM
  });
  
