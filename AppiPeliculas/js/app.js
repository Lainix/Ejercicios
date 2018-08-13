const peliculasApp = () => {
  $.ajax({
    url: `http://www.omdbapi.com/?s=Action&apikey=1aa7ae62`,   
    type: 'GET',
    crossDomain: true,
    datatype: 'json',
    success: function (response) {
      for (var i = 0; i <= 5; i++) {
        var photo = response.Search[i].Poster
        console.log(photo);

        var titleProduct = 'Titulo: ' + '' + response.Search[i].Title;
        var yearProduct = 'Año: ' + '' + response.Search[i].Year;
        var template = `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${titleProduct}</div>
        <div class="card-body text-primary">
        <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
          <p class="card-text">${yearProduct}</p>
        </div>
      </div>`

        $('#pelis').append(template);
      };
    }
  }).done((response) => {
    console.log(response);
  });
}
peliculasApp();