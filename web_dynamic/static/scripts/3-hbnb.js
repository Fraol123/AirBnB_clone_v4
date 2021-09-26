$(() => {
  $.post( "http://0.0.0.0:5001/api/v1/places_search/", {}, (data)=> {
  console.log(data);
    data.forEach((item)=> {$('section.places').html(`<article>${item.name}</article>`)})
    });
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
  console.log(res);
        if (res.status === 'OK') {
            $('div#api_status').addClass('available');
             $('div#api_status').removeAttr('id');
        } else {
            $('div#api_status').removeClass('available');
        }
    })
  console.log('loaded');
   const checkedAmenities = {};
    const list = [];
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

