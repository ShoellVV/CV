class Tabs{

    constructor() {
        ///////////// buttons ////////////////
        this.tabsBtn = document.querySelectorAll(".tabs-btn");
        ///////////// content divs ////////////////
        this.aboutCnt = document.querySelector(".about");
        this.skillsCnt = document.querySelector(".skills");
        this.expCnt = document.querySelector(".experience");
        this.portfolioCnt = document.querySelector(".portfolio");
        this.contentTabs = document.querySelectorAll(".content-tab");
        ////////////////// cv-container //////////////////
        this.CvCnt = document.querySelector(".CV-container");
    };

    init(){
        this.hideAllTabsAndRemoveClasses();

        this.aboutCnt.classList.remove("invisible");

        this.changeContentDiv();
    };

    changeContentDiv(){
        this.tabsBtn.forEach( button => {
            button.addEventListener("click", event => {
                let name = event.target.innerText;

                this.hideAllTabsAndRemoveClasses();

                if(name === "O mnie"){
                    this.aboutCnt.classList.remove("invisible");
                }else if(name === "Umiejętności"){
                    this.skillsCnt.classList.remove("invisible");
                }else if(name === "Wykształcenie i doświadczenie"){
                    this.CvCnt.classList.add("CV-container-large");
                    this.expCnt.classList.remove("invisible");
                }else{
                    this.portfolioCnt.classList.remove("invisible");
                };  

                event.target.classList.add("active");
            })
        })
    };

    hideAllTabsAndRemoveClasses(){
        for(let i = 0; i < this.contentTabs.length; i++){
            this.contentTabs[i].classList.add("invisible");
        };

        this.tabsBtn.forEach( button => {
            button.classList.remove("active");
        });
        this.CvCnt.classList.remove("CV-container-large");
    };
};

let tabs = new Tabs();
tabs.init();