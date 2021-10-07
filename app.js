Moralis.initialize("FWiojOYpBOA8PMcsF1XI8gaNbMdCRn5axry07ths", "", "l1NsHjQhah5JHgFUY2p8WtRC6eCPvA4OKFeB2Bho"); // Application id from moralis.io
Moralis.serverURL = "https://f2sieotb2933.moralishost.com:2053/server"; //Server url from moralis.io

async function getPrice() {
    let address = document.getElementById("address").value;
    console.log(address);
    let price = await Moralis.Cloud.run("getPrice", {address: address});
    let ethPrice = (price.nativePrice.value / (10**price.nativePrice.decimals)) + " ETH"
    let usdPrice = price.usdPrice + " USD"
    document.getElementById("eth_price").innerHTML = ethPrice;
    document.getElementById("usd_price").innerHTML = usdPrice;
    console.log(price);
}

document.getElementById("button").addEventListener("click", getPrice);