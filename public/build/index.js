document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  console.log(choice)
  const url = `https://rickandmortyapi.com/api/character/?name=${choice}`

  fetch(url)

      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector("#outputs").style.visibility = "visible"
        // console.log(data)
        document.querySelector('#charName').innerText = data.results[0].name
        document.querySelector('#charImg').src = data.results[0].image
        document.querySelector('#stat').innerText = data.results[0].status
        document.querySelector('#species').innerText = data.results[0].species
        document.querySelector('#gender').innerText = data.results[0].gender
        document.querySelector('#orig').innerText = data.results[0].origin.name
        document.querySelector('#loc').innerText = data.results[0].location.name

        if(data.results[0].type === "" || data.results[0].type === null){
          document.querySelector('#type').remove()
      }else{
        document.querySelector('#ty').innerText = data.results[0].type
      }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      }