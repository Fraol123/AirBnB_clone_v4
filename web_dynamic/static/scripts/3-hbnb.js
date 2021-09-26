$(() => {
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    success: (data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        $('section.places').append(`
        <article>
            <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
        <div class="max_guest">${place.max_guest} ${place.max_guest !== 1 ? 'Guests' : 'Guest'}</div>
            <div class="number_rooms">${place.number_rooms} ${place.number_rooms !== 1 ? 'Bedrooms' : 'Bedroom'}</div>
            <div class="number_bathrooms">${place.number_bathrooms} ${place.number_bathrooms !== 1 ? 'Bathrooms' : 'Bathroom'}</div>
          </div>
          <div class="user">

          </div>
          <div class="description">${place.description}
          </div>
        </article>
    `);
      }
    },
    contentType: 'application/json'
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    console.log(res);
    if (res.status === 'OK') {
      $('div#api_status').addClass('available');
      $('div#api_status').removeAttr('id');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  console.log('loaded');
  const checkedAmenities = {};
  $(':checkbox').change(function () {
    if (this.checked) {
      checkedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedAmenities[$(this).attr('data-id')];
    }
    const lst = Object.values(checkedAmenities);
    if (lst.length > 0) {
      $('div.amenities > h4').text(lst.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
