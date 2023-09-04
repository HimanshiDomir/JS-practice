var newObj = Object.assign({}, ...(array.map(item => ({ [item.key]: item.value }) )));

// original
var arr = [ 
    {key : '11', value : '1100', $$hashKey : '00X' },
    {key : '22', value : '2200', $$hashKey : '018' }
  ];
  
  //convert
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    result[arr[i].key] = arr[i].value;
  }
  
  console.log(result);