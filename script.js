$( document ).ready(function() {
    console.log( 'script.js ready!' );
    console.log('version 6')

    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;
      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

    const accessToken = getUrlParameter('access_token');
    console.log(`accessToken ${accessToken}`);

});
