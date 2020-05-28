const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const headers = document.querySelector("#headers")
const selectedPetDiv = document.querySelector('.selected-pet')
const petDetailDiv = document.querySelector('.pet-details')
const container = document.querySelector('.container')
const playerPet = []
const createTab = document.querySelector(".create-tab")
const battleTab = document.querySelector(".battle-tab")


function credits() {
    mainRender.innerHTML = ""

    congrats.play()
    
    let div = document.createElement('div')
    div.setAttribute('class', 'fade')

    let section = document.createElement('section')
    section.setAttribute('class', 'credit-container')

    let crawl = document.createElement('div')
    crawl.setAttribute('class', 'crawl')

    let credits = document.createElement('div')
    credits.setAttribute('class', 'credits')
    credits.innerHTML = `
    <br>
    </br>
    <h1 id="welcome-header">//It's been a strange 15 weeks but...</h1>
    <br>
    </br>
    <br>
    </br>
    <h1 id="welcome-header">//CONGRATS</h1>
    <h1 id="welcome-header">NYC AND ATL!!!</h1>
    
    <br>
    <h2 id="welcome-header"><strong>//We</strong> made it!</h2>
    <h2 id="welcome-header"><strong>Laura Archambault</strong></h2>
    <h2 id="welcome-header"><strong>Chanmoon Park</strong></h2>
    <h2 id="welcome-header"><strong>Gene Campbell</strong></h2>
    <h2 id="welcome-header"><strong>Spencer Blum</strong></h2>
    <h2 id="welcome-header"><strong>Ariel David</strong></h2>
    <h2 id="welcome-header"><strong>Chris Leja</strong></h2>
    <h2 id="welcome-header"><strong>Firuz Afzalov</strong></h2>
    <h2 id="welcome-header"><strong>Ken Ho</strong></h2>
    <h2 id="welcome-header"><strong>Stanley Lee</strong></h2>
    <h2 id="welcome-header"><strong>Abid Talukdar</strong></h2>
    <h2 id="welcome-header"><strong>Mavi Toktamis-Paker</strong></h2>
    <h2 id="welcome-header"><strong>Ryan Seit</strong></h2>
    <h2 id="welcome-header"><strong>Eric S Cheung</strong></h2>
    <h2 id="welcome-header"><strong>Ben Hickson</strong></h2>
    <br>
    <h1 id="welcome-header">//We'll see you soon!!</h1>
    <h2 id="welcome-header"><strong>John Schimansky</strong></h2>
    <h2 id="welcome-header"><strong>Andy Cruz</strong></h2>
    <h2 id="welcome-header"><strong>Kevin Clark</strong></h2>
    <h2 id="welcome-header"><strong>Andrew D'Antonio</strong></h2>
    <br>
    <h2 id="welcome-header"><strong>//Special</strong> Thanks to our instructors</h2>
    <h2 id="welcome-header"><strong>Graham</strong></h2>
    <h2 id="welcome-header"><strong>Ian</strong></h2>
    <h2 id="welcome-header"><strong>Annie</strong></h2>
    <h2 id="welcome-header"><strong>Jack</strong></h2>
    <h2 id="welcome-header"><strong>Otha</strong></h2>
    <br>
    <h2 id="welcome-header"><strong>Thanks Everyone!</strong></h2>
    `
    crawl.append(credits)
    section.append(crawl)
    div.append(section)
    mainRender.append(div)
    setTimeout(()=> {congrats.play(), 0})
}
