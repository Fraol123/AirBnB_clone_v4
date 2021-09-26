$(() => {
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
