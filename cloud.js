Moralis.Cloud.define('getPrice', async (request) => {
	let url = 'https://deep-index.moralis.io/api/token/ERC20/' + request.params.address + '/price'
    logger.info(url);
  	return Moralis.Cloud.httpRequest({
      url: url,
      params: (chain: "Eth", chain_name: "Mainnet"),
      headers: {
        'accept': 'application/json',
        'X-API-Key': 'FLhUq86fLQKWhd1mq6qIM5JH6RK9NdZhZsekuoawCyX7qIeETvrtYnbBZIzo40cd'
      }
    }).then( function(httpResponse){
      return httpResponse.data;
    }, function(httpResponse){
      	logger.info("error");
      	logger.info(httpResponse);
    })   
});