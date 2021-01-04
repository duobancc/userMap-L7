let search1209 = location.search.split(/\?|\&|\=/g)
let uniacid = 53 || search1209[aaa1209(search1209,'uniacid')]
let mode = 2 || search1209[aaa1209(search1209,'mode')]

let sendPOST = ({
  url,
  data,
}) => fetch(url, {
  "method": "POST",
  "headers": {
    "Content-Type":'application/json',
  },
  "body": JSON.stringify({
    uniacid,
    mode,
    ...data,
  }),
})
.then(response => response.json())
.catch(err => {
  console.log(err);
});

function aaa1209(arr,str) {
  return arr.findIndex((i)=>i===str)+1
}