// Javascript program to find second largest
// element in an array
// 1) Initialize the first as 0(i.e, index of arr[0] element
//     2) Start traversing the array from array[1],
//        a) If the current element in array say arr[i] is greater
//           than first. Then update first and second as,
//           second = first
//           first = arr[i]
//        b) If the current element is in between first and second, and is greater than second element
//           then update second to store the value of current variable as
//           second = arr[i]
//     3) Return the value stored in second.
    // Function to print the second largest elements
    function print2largest(arr, arr_size) {
        let i;
        let largest = second = -Infinity;
   
        // There should be atleast two elements
        if (arr_size < 2) {
            document.write(" Invalid Input ");
            return;
        }
   
        // finding the largest element
         
        for (i = 0 ;i<arr_size;i++){
            if (arr[i]>largest){
                second = largest ;
                largest = arr[i]
            }
 
            else if (arr[i]!=largest && arr[i]>second ){
                second = arr[i];
            }
        }
  
        if (second == -Infinity){
             
        console.log("There is no second largest element<br>");
        }
        else{
            console.log("The second largest element is " + second);
                return;
            }
        }
     
 
    // Driver program to test above function
  
    let arr= [ 12, 35, 1, 10, 34, 1 ];
    let n = arr.length;
    print2largest(arr, n);
     