import React from 'react'

var dict = {
    "503" : "https://upload.wikimedia.org/wikipedia/sco/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
    "654" : "https://i.pinimg.com/originals/76/ae/f7/76aef7971ddf70a69f8a08865eb71476.png",
    "516" : "https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg",
    "65" :	"https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/1024px-Manchester_City_FC_badge.svg.png",
    "1887" :	"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/FC_Shakhtar_Donetsk.svg/1200px-FC_Shakhtar_Donetsk.svg.png",
    "108" :	"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/FC_Internazionale_Milano_2014.svg/1200px-FC_Internazionale_Milano_2014.svg.png",
    "18" :	"https://logodownload.org/wp-content/uploads/2019/11/borussia-monchengladbach-logo-1.png",
    "86" :	"https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    "78" :	"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
    "1877" :	"https://www.logofootball.net/wp-content/uploads/FC-Red-Bull-Salzburg-HD-Logo.png",
    "5455" :	"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Lokomotiv_Moscow_logo.svg/1200px-FC_Lokomotiv_Moscow_logo.svg.png",
    "5" :	"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/1024px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png",
    "1897" :	"https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg/1200px-%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg.png",
    "524" :	"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d8.png",
    "64" :	"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e5.png",
    "4485" :	"https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
    "102" :	"https://assets.stickpng.com/images/584ab05530d6736bca3d6e08.png",
    "678" :	"https://upload.wikimedia.org/wikipedia/sco/thumb/7/79/Ajax_Amsterdam.svg/1017px-Ajax_Amsterdam.svg.png",
    "66" :	"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png",
    "721" :	"https://logodownload.org/wp-content/uploads/2019/11/rb-leipzig-logo.png",
    "5954" :	"https://upload.wikimedia.org/wikipedia/commons/5/5c/Ferencv%C3%A1rosiTClog%C3%B3.png",
    "842" :	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/FC_Dynamo_Kyiv_logo.svg/1200px-FC_Dynamo_Kyiv_logo.svg.png",
    "109" :	"https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png",
    "81" :	"https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png",
    "559" :	"https://assets.stickpng.com/thumbs/584ad291b519ea740933a8ba.png",
    "529" :	"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_FC.svg/1200px-Stade_Rennais_FC.svg.png",
    "5452" :	"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/FC_Krasnodar_logo.svg/1200px-FC_Krasnodar_logo.svg.png",
    "61" :	"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e1.png",
    "851" :	"https://upload.wikimedia.org/wikipedia/sco/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png",
    "110" :	"https://www.logofootball.net/wp-content/uploads/SS-Lazio-HD-Logo.png",
    "4" :	"https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-1.png",
    "731" :	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/FC_Zenit_1_star_2015_logo.svg/1200px-FC_Zenit_1_star_2015_logo.svg.png",    
}


export default function match(props) {
    var split1 = props.date.split('-').toString()
    var split2 = split1.split('T')
    var split3 = split2[1].split('Z')
    var time = split3[0]
    var date = split2[0].split(',')
    return (
        <div className="match-container">
        <div className="match-header">
        <h3 className="group">{props.stage.replaceAll('_', ' ')} - {props.group}</h3>
        </div>
        <div className="match-result">
        <div className="homeTeamCont">
        <img id="homeTeamIcon" src={dict[props.homeTeam.id]} alt="home team logo"/>
        <h1 className="home-team">{props.homeTeam.name}</h1>
        </div>
        <div className="score">
        <span className="home-score">{props.homeScore}</span>
        <span className="dash">-</span>
        <span className="away-score">{props.awayScore}</span>
        </div>
        <div className="awayTeamCont">
        <img id="awayTeamIcon" src={dict[props.awayTeam.id]} alt="away team logo" />
        <h1 className="away-team">{props.awayTeam.name}</h1>
        </div>
        </div>
        <div className="footer">
            {`${date[1]}/${date[2]}/${date[0]} - ${time}`}
        </div>
        </div>
    )
}
