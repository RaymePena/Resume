$(document).ready(() =>{
    let jsonData = {}
    $.getJSON('./resume.json', (data) => {
        console.log(data);
        $('.title').append(data.name)
        $('.email').append(data.email)
        $('.phone').append(data.phone)

        //education
        $.each(data.education, (index, education) => {
            $('.educations').append(
                `
                <div class="col-lg-4 col-md-4 col-sm-12 gx-5"
                    <div  class="card" >
                        <img class="card-img-top" style="max-width: 400px"  src="${education.image}" />
                        <div class="card-body>
                            <h1 class="card-title"><strong>${education.fullname}</strong></h1>
                            <hr />
                            <p class="card-text">${education.major} - ${education.emphasis}</p>
                            <p><strong>${education.graduated}</strong></p>
                        </div>
                    </div>
                </div>
                
                `
            )
        })


        //Skills
       $.each(data.skills, (index, skill) => {
           $('.skills').append('<li class="list-group-item">' + skill + '</li>')
       })

       //qualities
       $.each(data.qualities, (index, quality) => {
           $('.qualities').append(`<li class="list-group-item"> ${quality} </li>`)
       })

    //    profesional experiences 

    $.each(data.experiences, (index, experience) => {
        console.log(experience.company);
        $('.experience').append(   
        `
            <div class="col-sm-6 col-md-6 col-lg-3"><strong>${experience.company}</strong></div>
            <div class="col-sm-6 col-md-6 col-lg-3">${experience.date}</div> 

        ` 
        )
        $.each(experience.tasks, (i, task) => {
            $('.tasks').append( 
                `
                <div class="col-sm-6 col-md-6 col-lg-6
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> ${task} </li>
                </ul>
                </div>
                `
                
    
            )
        })
        
        
    })

    })

    

})


